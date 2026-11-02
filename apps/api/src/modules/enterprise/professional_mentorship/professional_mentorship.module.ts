/**
 * Enterprise Module: Professional Synergy & Mentorship
 */
import { Module } from '@nestjs/common';
import { CareerSynergyRecordController } from './professional_mentorship.controller';
import { CareerSynergyRecordService } from './professional_mentorship.service';
import { CareerSynergyRecordRepository } from './professional_mentorship.repository';

@Module({
  controllers: [CareerSynergyRecordController],
  providers: [CareerSynergyRecordService, CareerSynergyRecordRepository],
  exports: [CareerSynergyRecordService, CareerSynergyRecordRepository]
})
export class CareerSynergyRecordModule {}
