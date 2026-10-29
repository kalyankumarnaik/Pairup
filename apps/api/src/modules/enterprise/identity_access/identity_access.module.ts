/**
 * Enterprise Module: Identity & Access Management
 */
import { Module } from '@nestjs/common';
import { UserIdentityController } from './identity_access.controller';
import { UserIdentityService } from './identity_access.service';
import { UserIdentityRepository } from './identity_access.repository';

@Module({
  controllers: [UserIdentityController],
  providers: [UserIdentityService, UserIdentityRepository],
  exports: [UserIdentityService, UserIdentityRepository]
})
export class UserIdentityModule {}
