/**
 * Enterprise Module: Safe Ride Hailing & Emergency Transit
 */
import { Module } from '@nestjs/common';
import { TransitSafetyDispatchRecordController } from './safe_taxi_dispatch.controller';
import { TransitSafetyDispatchRecordService } from './safe_taxi_dispatch.service';
import { TransitSafetyDispatchRecordRepository } from './safe_taxi_dispatch.repository';

@Module({
  controllers: [TransitSafetyDispatchRecordController],
  providers: [TransitSafetyDispatchRecordService, TransitSafetyDispatchRecordRepository],
  exports: [TransitSafetyDispatchRecordService, TransitSafetyDispatchRecordRepository]
})
export class TransitSafetyDispatchRecordModule {}
