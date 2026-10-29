/**
 * Enterprise Module: Global Passport & Travel Mode Engine
 */
import { Module } from '@nestjs/common';
import { TravelPassportRecordController } from './travel_mode.controller';
import { TravelPassportRecordService } from './travel_mode.service';
import { TravelPassportRecordRepository } from './travel_mode.repository';

@Module({
  controllers: [TravelPassportRecordController],
  providers: [TravelPassportRecordService, TravelPassportRecordRepository],
  exports: [TravelPassportRecordService, TravelPassportRecordRepository]
})
export class TravelPassportRecordModule {}
