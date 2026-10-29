/**
 * Enterprise Module: Immutable Audit Logging & Regulatory Reporting
 */
import { Module } from '@nestjs/common';
import { RegulatoryAuditRecordController } from './audit_compliance.controller';
import { RegulatoryAuditRecordService } from './audit_compliance.service';
import { RegulatoryAuditRecordRepository } from './audit_compliance.repository';

@Module({
  controllers: [RegulatoryAuditRecordController],
  providers: [RegulatoryAuditRecordService, RegulatoryAuditRecordRepository],
  exports: [RegulatoryAuditRecordService, RegulatoryAuditRecordRepository]
})
export class RegulatoryAuditRecordModule {}
