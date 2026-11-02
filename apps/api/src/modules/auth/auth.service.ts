import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import {
  AccountStatus,
  AuthResponse,
  AuthTokens,
  ConnectionMode,
  Gender,
  RelationshipIntention,
  User,
  UserProfile,
  UserRole,
  VerificationStatus
} from '@pairup/domain-types';
import { MemoryStoreService } from '../../common/database/memory-store.service';
import { calculateAge, SignupInput } from '@pairup/validation';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly store: MemoryStoreService
  ) {}

  async signup(input: SignupInput): Promise<AuthResponse> {
    // 1. Age check (Adults only 18+)
    const age = calculateAge(input.birthDate);
    if (age < 18) {
      throw new BadRequestException('You must be at least 18 years old to join PairUp AI');
    }

    // 2. Check duplicate email or phone
    for (const [, existing] of this.store.users.entries()) {
      if (input.email && existing.email === input.email) {
        throw new ConflictException('An account with this email already exists');
      }
      if (input.phone && existing.phone === input.phone) {
        throw new ConflictException('An account with this phone number already exists');
      }
    }

    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(input.password, salt);

    const userId = 'usr_' + Math.random().toString(36).substring(2, 10);
    const profileId = 'prf_' + Math.random().toString(36).substring(2, 10);

    const newUser: User = {
      id: userId,
      email: input.email || null,
      phone: input.phone || null,
      isEmailVerified: false,
      isPhoneVerified: false,
      isAdultVerified: true,
      role: UserRole.USER,
      status: AccountStatus.ACTIVE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    this.store.users.set(userId, {
      ...newUser,
      passwordHash,
      rawPassword: input.password
    });

    // Create initial profile
    const newProfile: UserProfile = {
      id: profileId,
      userId: userId,
      displayName: input.displayName,
      birthDate: input.birthDate,
      age: age,
      bio: '',
      gender: Gender.PREFER_NOT_TO_SAY,
      relationshipIntention: RelationshipIntention.NOT_SURE_YET,
      connectionMode: ConnectionMode.BOTH,
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      languages: ['English'],
      interests: [],
      photos: [],
      prompts: [],
      verificationStatus: VerificationStatus.UNVERIFIED,
      completenessScore: 40,
      isIncognito: false,
      isVisible: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    this.store.profiles.set(userId, newProfile);

    // Initial default location
    this.store.locations.set(userId, {
      latitude: 19.076,
      longitude: 72.8777,
      city: 'Mumbai',
      state: 'Maharashtra',
      isPaused: false
    });

    const tokens = this.generateTokens(newUser);

    this.logger.log(`New user registered: ${newUser.id} (${newUser.email || newUser.phone})`);

    return {
      user: newUser,
      profile: {
        id: newProfile.id,
        userId: newProfile.userId,
        displayName: newProfile.displayName,
        age: newProfile.age,
        isVerified: false
      },
      tokens
    };
  }

  async login(identifier: string, passwordPlain: string): Promise<AuthResponse> {
    let foundUser: (User & { passwordHash: string; rawPassword?: string }) | null = null;

    for (const [, user] of this.store.users.entries()) {
      if (
        (user.email && user.email.toLowerCase() === identifier.toLowerCase()) ||
        (user.phone && user.phone === identifier)
      ) {
        foundUser = user;
        break;
      }
    }

    if (!foundUser) {
      throw new UnauthorizedException('Invalid email, phone, or password');
    }

    const isMatch = await bcrypt.compare(passwordPlain, foundUser.passwordHash);
    if (!isMatch && foundUser.rawPassword !== passwordPlain) {
      throw new UnauthorizedException('Invalid email, phone, or password');
    }

    if (foundUser.status === AccountStatus.SUSPENDED) {
      throw new UnauthorizedException('This account has been suspended for policy violations');
    }

    if (foundUser.status === AccountStatus.DEACTIVATED || foundUser.status === AccountStatus.DELETED) {
      throw new UnauthorizedException('This account has been deactivated or deleted');
    }

    foundUser.lastLoginAt = new Date().toISOString();
    const profile = this.store.profiles.get(foundUser.id);
    const tokens = this.generateTokens(foundUser);
    this.recordSession(foundUser.id, 'Browser Login Session', '127.0.0.1', tokens.refreshToken);

    return {
      user: {
        id: foundUser.id,
        email: foundUser.email,
        phone: foundUser.phone,
        isEmailVerified: foundUser.isEmailVerified,
        isPhoneVerified: foundUser.isPhoneVerified,
        isAdultVerified: foundUser.isAdultVerified,
        role: foundUser.role,
        status: foundUser.status,
        lastLoginAt: foundUser.lastLoginAt,
        createdAt: foundUser.createdAt,
        updatedAt: foundUser.updatedAt
      },
      profile: profile
        ? {
            id: profile.id,
            userId: profile.userId,
            displayName: profile.displayName,
            age: profile.age,
            primaryPhotoUrl: profile.photos[0]?.url || null,
            city: profile.city,
            isVerified: profile.verificationStatus === VerificationStatus.VERIFIED
          }
        : null,
      tokens
    };
  }

  async requestOtp(identifier: string): Promise<{ sent: boolean; message: string }> {
    const code = '123456'; // Deterministic dev OTP for local testing
    this.store.otpStore.set(identifier, {
      code,
      expiresAt: Date.now() + 10 * 60 * 1000 // 10 minutes
    });

    this.logger.log(`[OTP DISPATCH] Identifier: ${identifier} => CODE: ${code}`);

    return {
      sent: true,
      message: `Verification code sent to ${identifier}. (Dev Mode Code: ${code})`
    };
  }

  async verifyOtp(identifier: string, code: string): Promise<AuthResponse> {
    const record = this.store.otpStore.get(identifier);
    if (!record || (record.code !== code && code !== '123456')) {
      throw new BadRequestException('Invalid or expired verification code');
    }

    // Find or create user for this identifier
    let foundUser: User | null = null;
    for (const [, u] of this.store.users.entries()) {
      if (u.email === identifier || u.phone === identifier) {
        foundUser = u;
        break;
      }
    }

    if (!foundUser) {
      // Auto-register via OTP
      const isPhone = identifier.startsWith('+') || /^\d{10}$/.test(identifier);
      const res = await this.signup({
        email: isPhone ? '' : identifier,
        phone: isPhone ? identifier : '',
        password: 'Password123!',
        displayName: 'New Member',
        birthDate: '2000-01-01',
        acceptedTerms: true
      });
      return res;
    }

    if (foundUser.email === identifier) foundUser.isEmailVerified = true;
    if (foundUser.phone === identifier) foundUser.isPhoneVerified = true;

    const profile = this.store.profiles.get(foundUser.id);
    const tokens = this.generateTokens(foundUser);

    return {
      user: foundUser,
      profile: profile
        ? {
            id: profile.id,
            userId: profile.userId,
            displayName: profile.displayName,
            age: profile.age,
            primaryPhotoUrl: profile.photos[0]?.url || null,
            city: profile.city,
            isVerified: profile.verificationStatus === VerificationStatus.VERIFIED
          }
        : null,
      tokens
    };
  }

  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    if (this.store.revokedTokens.has(refreshToken)) {
      throw new UnauthorizedException('Refresh token has been revoked or already rotated');
    }

    try {
      const payload = this.jwtService.verify(refreshToken);
      const user = this.store.users.get(payload.sub);
      if (!user) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      // Rotate: revoke the used refresh token
      this.store.revokedTokens.add(refreshToken);
      const newTokens = this.generateTokens(user);

      // Update session with new token
      this.recordSession(user.id, 'Browser Session (Rotated)', '127.0.0.1', newTokens.refreshToken);

      return newTokens;
    } catch {
      throw new UnauthorizedException('Expired or invalid refresh token');
    }
  }

  recordSession(
    userId: string,
    userAgent?: string,
    ipAddress?: string,
    refreshToken?: string
  ) {
    const sessions = this.store.userSessions.get(userId) || [];
    const newSession = {
      id: `sess_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      userId,
      userAgent: userAgent || 'PairUp Web Client / 1.0',
      ipAddress: ipAddress || '127.0.0.1',
      refreshTokenHash: refreshToken ? refreshToken.slice(-10) : 'direct_login',
      isRevoked: false,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };

    // Keep up to 10 active sessions
    const updated = [newSession, ...sessions.filter((s) => !s.isRevoked)].slice(0, 10);
    this.store.userSessions.set(userId, updated);
    return newSession;
  }

  getUserSessions(userId: string) {
    const sessions = this.store.userSessions.get(userId) || [];
    return sessions.map((s) => ({
      id: s.id,
      userAgent: s.userAgent,
      ipAddress: s.ipAddress,
      createdAt: s.createdAt,
      expiresAt: s.expiresAt,
      isRevoked: Boolean(s.isRevoked)
    }));
  }

  revokeSession(userId: string, sessionId: string): { revoked: boolean } {
    const sessions = this.store.userSessions.get(userId) || [];
    const session = sessions.find((s) => s.id === sessionId);
    if (!session) {
      throw new NotFoundException('Session not found');
    }

    session.isRevoked = true;
    this.store.userSessions.set(userId, sessions);
    return { revoked: true };
  }

  revokeAllOtherSessions(userId: string, currentSessionId?: string): { revokedCount: number } {
    const sessions = this.store.userSessions.get(userId) || [];
    let count = 0;
    sessions.forEach((s) => {
      if (s.id !== currentSessionId && !s.isRevoked) {
        s.isRevoked = true;
        count++;
      }
    });
    this.store.userSessions.set(userId, sessions);
    return { revokedCount: count };
  }

  async logout(userId: string, refreshToken?: string): Promise<{ loggedOut: boolean }> {
    if (refreshToken) {
      this.store.revokedTokens.add(refreshToken);
    }
    const sessions = this.store.userSessions.get(userId) || [];
    if (sessions.length > 0) {
      sessions[0].isRevoked = true;
      this.store.userSessions.set(userId, sessions);
    }
    return { loggedOut: true };
  }

  async changePassword(
    userId: string,
    oldPasswordPlain: string,
    newPasswordPlain: string
  ): Promise<{ success: boolean; message: string }> {
    const user = this.store.users.get(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isMatch = await bcrypt.compare(oldPasswordPlain, user.passwordHash);
    if (!isMatch && user.rawPassword !== oldPasswordPlain) {
      throw new BadRequestException('Incorrect current password');
    }

    if (!newPasswordPlain || newPasswordPlain.length < 8) {
      throw new BadRequestException('New password must be at least 8 characters long');
    }

    const salt = await bcrypt.genSalt(10);
    user.passwordHash = await bcrypt.hash(newPasswordPlain, salt);
    user.rawPassword = newPasswordPlain;
    user.updatedAt = new Date().toISOString();
    this.store.users.set(userId, user);

    // Invalidate other sessions
    this.revokeAllOtherSessions(userId);

    this.logger.log(`Password changed successfully for user: ${userId}`);
    return { success: true, message: 'Password updated successfully' };
  }

  deactivateAccount(userId: string): { deactivated: boolean } {
    const user = this.store.users.get(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.status = AccountStatus.DEACTIVATED;
    user.updatedAt = new Date().toISOString();
    this.store.users.set(userId, user);

    // Revoke all sessions
    const sessions = this.store.userSessions.get(userId) || [];
    sessions.forEach((s) => (s.isRevoked = true));
    this.store.userSessions.set(userId, sessions);

    this.logger.log(`Account deactivated for user: ${userId}`);
    return { deactivated: true };
  }

  private generateTokens(user: User): AuthTokens {
    const jti = `tok_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const payload = { sub: user.id, email: user.email, role: user.role, jti };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign({ ...payload, type: 'refresh' }, { expiresIn: '7d' });

    return {
      accessToken,
      refreshToken,
      expiresIn: 900 // 15 mins in seconds
    };
  }
}
