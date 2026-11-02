/**
 * Enterprise Module: Dietary Lifestyles & Dining Discovery
 */
import { Module } from '@nestjs/common';
import { DietaryPreferenceRecordController } from './dietary_lifestyle.controller';
import { DietaryPreferenceRecordService } from './dietary_lifestyle.service';
import { DietaryPreferenceRecordRepository } from './dietary_lifestyle.repository';

@Module({
  controllers: [DietaryPreferenceRecordController],
  providers: [DietaryPreferenceRecordService, DietaryPreferenceRecordRepository],
  exports: [DietaryPreferenceRecordService, DietaryPreferenceRecordRepository]
})
export class DietaryPreferenceRecordModule {}
