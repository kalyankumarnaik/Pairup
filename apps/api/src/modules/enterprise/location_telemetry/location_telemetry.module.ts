/**
 * Enterprise Module: Geospatial Location & Boundary Telemetry
 */
import { Module } from '@nestjs/common';
import { GeoLocationRecordController } from './location_telemetry.controller';
import { GeoLocationRecordService } from './location_telemetry.service';
import { GeoLocationRecordRepository } from './location_telemetry.repository';

@Module({
  controllers: [GeoLocationRecordController],
  providers: [GeoLocationRecordService, GeoLocationRecordRepository],
  exports: [GeoLocationRecordService, GeoLocationRecordRepository]
})
export class GeoLocationRecordModule {}
