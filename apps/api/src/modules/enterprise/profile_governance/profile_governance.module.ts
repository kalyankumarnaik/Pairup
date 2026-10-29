/**
 * Enterprise Module: Profile Governance & Curation
 */
import { Module } from '@nestjs/common';
import { UserProfileRecordController } from './profile_governance.controller';
import { UserProfileRecordService } from './profile_governance.service';
import { UserProfileRecordRepository } from './profile_governance.repository';

@Module({
  controllers: [UserProfileRecordController],
  providers: [UserProfileRecordService, UserProfileRecordRepository],
  exports: [UserProfileRecordService, UserProfileRecordRepository]
})
export class UserProfileRecordModule {}
