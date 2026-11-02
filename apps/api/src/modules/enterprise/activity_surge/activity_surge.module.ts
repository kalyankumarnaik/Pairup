/**
 * Enterprise Module: Real-Time Activity Surge & Geohash Radar
 */
import { Module } from '@nestjs/common';
import { SurgeClusterRecordController } from './activity_surge.controller';
import { SurgeClusterRecordService } from './activity_surge.service';
import { SurgeClusterRecordRepository } from './activity_surge.repository';

@Module({
  controllers: [SurgeClusterRecordController],
  providers: [SurgeClusterRecordService, SurgeClusterRecordRepository],
  exports: [SurgeClusterRecordService, SurgeClusterRecordRepository]
})
export class SurgeClusterRecordModule {}
