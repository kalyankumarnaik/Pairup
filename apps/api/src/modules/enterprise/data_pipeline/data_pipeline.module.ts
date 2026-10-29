/**
 * Enterprise Module: Real-Time Analytics & Funnel Telemetry
 */
import { Module } from '@nestjs/common';
import { AnalyticsTelemetryBatchController } from './data_pipeline.controller';
import { AnalyticsTelemetryBatchService } from './data_pipeline.service';
import { AnalyticsTelemetryBatchRepository } from './data_pipeline.repository';

@Module({
  controllers: [AnalyticsTelemetryBatchController],
  providers: [AnalyticsTelemetryBatchService, AnalyticsTelemetryBatchRepository],
  exports: [AnalyticsTelemetryBatchService, AnalyticsTelemetryBatchRepository]
})
export class AnalyticsTelemetryBatchModule {}
