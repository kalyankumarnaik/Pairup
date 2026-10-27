import { ExecutionContext, HttpStatus, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../constants/system.constant';
import { RedisService } from '../../redis/redis.service';
import { DomainErrorCode, DomainException } from '../exceptions/domain.exception';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly reflector: Reflector,
    private readonly redisService: RedisService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const isBlacklisted = await this.redisService.isTokenBlacklisted(token);
      if (isBlacklisted) {
        throw new DomainException(
          'Access token has been revoked',
          DomainErrorCode.SESSION_REVOKED,
          HttpStatus.UNAUTHORIZED,
        );
      }
    }

    return (await super.canActivate(context)) as boolean;
  }

  handleRequest(err: any, user: any, info: any) {
    if (info instanceof Error) {
      if (info.name === 'TokenExpiredError') {
        throw new DomainException(
          'Access token has expired. Please refresh your session via /api/v1/auth/refresh or log in again.',
          DomainErrorCode.TOKEN_EXPIRED,
          HttpStatus.UNAUTHORIZED,
        );
      }
      if (info.name === 'JsonWebTokenError') {
        throw new DomainException(
          'Invalid or malformed access token',
          DomainErrorCode.TOKEN_INVALID,
          HttpStatus.UNAUTHORIZED,
        );
      }
    }

    if (err || !user) {
      throw (
        err ||
        new DomainException(
          'Authentication bearer token is required to access this resource',
          DomainErrorCode.TOKEN_INVALID,
          HttpStatus.UNAUTHORIZED,
        )
      );
    }

    return user;
  }
}
