/**
 * Enterprise Module: Tech Startup Co-Founders & Brainstorming
 */
import { Module } from '@nestjs/common';
import { FounderSynergyRecordController } from './startup_founders.controller';
import { FounderSynergyRecordService } from './startup_founders.service';
import { FounderSynergyRecordRepository } from './startup_founders.repository';

@Module({
  controllers: [FounderSynergyRecordController],
  providers: [FounderSynergyRecordService, FounderSynergyRecordRepository],
  exports: [FounderSynergyRecordService, FounderSynergyRecordRepository]
})
export class FounderSynergyRecordModule {}
