/**
 * Enterprise Module: Staff Administration & Role Governance
 */
import { Module } from '@nestjs/common';
import { StaffAdministrationRecordController } from './staff_administration.controller';
import { StaffAdministrationRecordService } from './staff_administration.service';
import { StaffAdministrationRecordRepository } from './staff_administration.repository';

@Module({
  controllers: [StaffAdministrationRecordController],
  providers: [StaffAdministrationRecordService, StaffAdministrationRecordRepository],
  exports: [StaffAdministrationRecordService, StaffAdministrationRecordRepository]
})
export class StaffAdministrationRecordModule {}
