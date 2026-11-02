/**
 * Enterprise Module: Privacy, Data Protection & DPDP Compliance
 */
import { Module } from '@nestjs/common';
import { PrivacyArchiveRecordController } from './privacy_compliance.controller';
import { PrivacyArchiveRecordService } from './privacy_compliance.service';
import { PrivacyArchiveRecordRepository } from './privacy_compliance.repository';

@Module({
  controllers: [PrivacyArchiveRecordController],
  providers: [PrivacyArchiveRecordService, PrivacyArchiveRecordRepository],
  exports: [PrivacyArchiveRecordService, PrivacyArchiveRecordRepository]
})
export class PrivacyArchiveRecordModule {}
