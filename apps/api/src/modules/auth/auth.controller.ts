import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginInput, SignupInput } from '@pairup/validation';
import { User } from '@pairup/domain-types';
import { MemoryStoreService } from '../../common/database/memory-store.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly store: MemoryStoreService
  ) {}

  @Post('signup')
  @ApiOperation({ summary: 'Register a new adult member (18+ verified)' })
  async signup(@Body() body: SignupInput) {
    return this.authService.signup(body);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Log in with email or phone and password' })
  async login(@Body() body: LoginInput) {
    return this.authService.login(body.identifier, body.password);
  }

  @Post('otp/request')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Request OTP verification code (SMS/Email)' })
  async requestOtp(@Body('identifier') identifier: string) {
    return this.authService.requestOtp(identifier);
  }

  @Post('otp/verify')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verify 6-digit OTP code' })
  async verifyOtp(
    @Body('identifier') identifier: string,
    @Body('otp') otp: string
  ) {
    return this.authService.verifyOtp(identifier, otp);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh expired access token' })
  async refresh(@Body('refreshToken') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current authenticated user profile and status' })
  async getMe(@CurrentUser() user: User) {
    const profile = this.store.profiles.get(user.id);
    return {
      user,
      profile: profile || null
    };
  }

  @Delete('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Deactivate current authenticated account' })
  async deactivateMe(@CurrentUser('id') userId: string) {
    return this.authService.deactivateAccount(userId);
  }

  @Get('sessions')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List active login sessions and devices' })
  async getSessions(@CurrentUser('id') userId: string) {
    return this.authService.getUserSessions(userId);
  }

  @Delete('sessions/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Revoke an active login session' })
  async revokeSession(
    @CurrentUser('id') userId: string,
    @Param('id') sessionId: string
  ) {
    return this.authService.revokeSession(userId, sessionId);
  }

  @Post('password/change')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Change user account password' })
  async changePassword(
    @CurrentUser('id') userId: string,
    @Body('oldPassword') oldPass: string,
    @Body('newPassword') newPass: string
  ) {
    return this.authService.changePassword(userId, oldPass, newPass);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Logout and terminate active session' })
  async logout(
    @CurrentUser('id') userId: string,
    @Body('refreshToken') refreshToken?: string
  ) {
    return this.authService.logout(userId, refreshToken);
  }
}
