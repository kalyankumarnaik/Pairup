/**
 * Enterprise Module: Music & Cultural Festival Companion Radar
 */
import { Module } from '@nestjs/common';
import { FestivalCompanionRecordController } from './festival_radar.controller';
import { FestivalCompanionRecordService } from './festival_radar.service';
import { FestivalCompanionRecordRepository } from './festival_radar.repository';

@Module({
  controllers: [FestivalCompanionRecordController],
  providers: [FestivalCompanionRecordService, FestivalCompanionRecordRepository],
  exports: [FestivalCompanionRecordService, FestivalCompanionRecordRepository]
})
export class FestivalCompanionRecordModule {}
