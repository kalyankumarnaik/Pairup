/**
 * Enterprise Module: Relationship Insights & Vibe Compatibility
 */
import { Module } from '@nestjs/common';
import { VibeCompatibilityReportController } from './relationship_insights.controller';
import { VibeCompatibilityReportService } from './relationship_insights.service';
import { VibeCompatibilityReportRepository } from './relationship_insights.repository';

@Module({
  controllers: [VibeCompatibilityReportController],
  providers: [VibeCompatibilityReportService, VibeCompatibilityReportRepository],
  exports: [VibeCompatibilityReportService, VibeCompatibilityReportRepository]
})
export class VibeCompatibilityReportModule {}
