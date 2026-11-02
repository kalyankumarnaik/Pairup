/**
 * Enterprise Module: High-Velocity Virtual Speed Dating
 */
import { Module } from '@nestjs/common';
import { SpeedDatingSessionRecordController } from './speed_dating.controller';
import { SpeedDatingSessionRecordService } from './speed_dating.service';
import { SpeedDatingSessionRecordRepository } from './speed_dating.repository';

@Module({
  controllers: [SpeedDatingSessionRecordController],
  providers: [SpeedDatingSessionRecordService, SpeedDatingSessionRecordRepository],
  exports: [SpeedDatingSessionRecordService, SpeedDatingSessionRecordRepository]
})
export class SpeedDatingSessionRecordModule {}
