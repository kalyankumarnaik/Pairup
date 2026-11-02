import { describe, expect, it, beforeEach } from 'vitest';
import { AuthService } from '../src/modules/auth/auth.service';
import { MemoryStoreService } from '../src/common/database/memory-store.service';
import { JwtService } from '@nestjs/jwt';
import { AccountStatus } from '@pairup/domain-types';

describe('AuthService - Sessions, Rotation, Security & Lifecycle', () => {
  let authService: AuthService;
  let store: MemoryStoreService;
  let jwtService: JwtService;

  beforeEach(() => {
    store = new MemoryStoreService();
    store.onModuleInit();
    jwtService = new JwtService({ secret: 'test_jwt_secret_min32chars_pairup' });
    authService = new AuthService(jwtService, store);
  });

  it('records a new session upon user login and retrieves sessions', async () => {
    const loginRes = await authService.login('ananya.verma@example.com', 'Password123!');
    expect(loginRes.tokens).toBeDefined();

    const sessions = authService.getUserSessions(loginRes.user.id);
    expect(sessions.length).toBeGreaterThanOrEqual(1);
    expect(sessions[0].isRevoked).toBe(false);
    expect(sessions[0].ipAddress).toBe('127.0.0.1');
  });

  it('allows revoking an individual session', async () => {
    const loginRes = await authService.login('ananya.verma@example.com', 'Password123!');
    const sessions = authService.getUserSessions(loginRes.user.id);
    const sessionId = sessions[0].id;

    const revokeRes = authService.revokeSession(loginRes.user.id, sessionId);
    expect(revokeRes.revoked).toBe(true);

    const updatedSessions = authService.getUserSessions(loginRes.user.id);
    const target = updatedSessions.find((s) => s.id === sessionId);
    expect(target?.isRevoked).toBe(true);
  });

  it('rotates refresh tokens and rejects reuse of revoked tokens', async () => {
    const loginRes = await authService.login('ananya.verma@example.com', 'Password123!');
    const oldRefreshToken = loginRes.tokens.refreshToken;

    // First rotation succeeds
    const rotated = await authService.refreshToken(oldRefreshToken);
    expect(rotated.accessToken).toBeDefined();
    expect(rotated.refreshToken).toBeDefined();
    expect(rotated.refreshToken).not.toBe(oldRefreshToken);

    // Replay attack / reuse of revoked old token fails
    await expect(authService.refreshToken(oldRefreshToken)).rejects.toThrow(
      /revoked or already rotated/
    );
  });

  it('changes password successfully when old password is correct', async () => {
    const loginRes = await authService.login('ananya.verma@example.com', 'Password123!');
    const changeRes = await authService.changePassword(
      loginRes.user.id,
      'Password123!',
      'NewSecurePass2026!'
    );
    expect(changeRes.success).toBe(true);

    // Old password no longer works
    await expect(
      authService.login('ananya.verma@example.com', 'Password123!')
    ).rejects.toThrow(/Invalid email, phone, or password/);

    // New password authenticates
    const newLoginRes = await authService.login('ananya.verma@example.com', 'NewSecurePass2026!');
    expect(newLoginRes.user.id).toBe(loginRes.user.id);
  });

  it('rejects password change if current password is incorrect or new password is too short', async () => {
    const loginRes = await authService.login('ananya.verma@example.com', 'Password123!');

    await expect(
      authService.changePassword(loginRes.user.id, 'WrongOldPassword', 'ValidPass2026!')
    ).rejects.toThrow(/Incorrect current password/);

    await expect(
      authService.changePassword(loginRes.user.id, 'Password123!', 'short')
    ).rejects.toThrow(/at least 8 characters/);
  });

  it('deactivates account and prevents subsequent login attempts', async () => {
    const loginRes = await authService.login('ananya.verma@example.com', 'Password123!');
    const deactRes = authService.deactivateAccount(loginRes.user.id);
    expect(deactRes.deactivated).toBe(true);

    const user = store.users.get(loginRes.user.id);
    expect(user?.status).toBe(AccountStatus.DEACTIVATED);

    await expect(
      authService.login('ananya.verma@example.com', 'Password123!')
    ).rejects.toThrow(/deactivated or deleted/);
  });
});
