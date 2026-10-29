/**
 * Enterprise Module: Wellness, Yoga & Mindful Living
 */
import { Module } from '@nestjs/common';
import { MindfulnessPracticeRecordController } from './wellness_mindfulness.controller';
import { MindfulnessPracticeRecordService } from './wellness_mindfulness.service';
import { MindfulnessPracticeRecordRepository } from './wellness_mindfulness.repository';

@Module({
  controllers: [MindfulnessPracticeRecordController],
  providers: [MindfulnessPracticeRecordService, MindfulnessPracticeRecordRepository],
  exports: [MindfulnessPracticeRecordService, MindfulnessPracticeRecordRepository]
})
export class MindfulnessPracticeRecordModule {}
