/**
 * Enterprise Module: Double Dates & Quad Social Discovery
 */
import { Module } from '@nestjs/common';
import { DoubleDateGroupRecordController } from './double_dates.controller';
import { DoubleDateGroupRecordService } from './double_dates.service';
import { DoubleDateGroupRecordRepository } from './double_dates.repository';

@Module({
  controllers: [DoubleDateGroupRecordController],
  providers: [DoubleDateGroupRecordService, DoubleDateGroupRecordRepository],
  exports: [DoubleDateGroupRecordService, DoubleDateGroupRecordRepository]
})
export class DoubleDateGroupRecordModule {}
