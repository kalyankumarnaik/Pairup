/**
 * Enterprise Module: Motorcycle Touring & Weekend Cruisers
 */
import { Module } from '@nestjs/common';
import { MotoTouringRecordController } from './motorcycle_touring.controller';
import { MotoTouringRecordService } from './motorcycle_touring.service';
import { MotoTouringRecordRepository } from './motorcycle_touring.repository';

@Module({
  controllers: [MotoTouringRecordController],
  providers: [MotoTouringRecordService, MotoTouringRecordRepository],
  exports: [MotoTouringRecordService, MotoTouringRecordRepository]
})
export class MotoTouringRecordModule {}
