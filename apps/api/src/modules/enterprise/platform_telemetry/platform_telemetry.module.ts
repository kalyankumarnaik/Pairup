/**
 * Enterprise Module: Distributed Observability & APM Metrics
 */
import { Module } from '@nestjs/common';
import { SystemTelemetryBatchRecordController } from './platform_telemetry.controller';
import { SystemTelemetryBatchRecordService } from './platform_telemetry.service';
import { SystemTelemetryBatchRecordRepository } from './platform_telemetry.repository';

@Module({
  controllers: [SystemTelemetryBatchRecordController],
  providers: [SystemTelemetryBatchRecordService, SystemTelemetryBatchRecordRepository],
  exports: [SystemTelemetryBatchRecordService, SystemTelemetryBatchRecordRepository]
})
export class SystemTelemetryBatchRecordModule {}
