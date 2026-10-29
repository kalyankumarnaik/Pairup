/**
 * Enterprise Module: Fitness, Athletics & Workout Matching
 */
import { Module } from '@nestjs/common';
import { FitnessProfileRecordController } from './fitness_athletics.controller';
import { FitnessProfileRecordService } from './fitness_athletics.service';
import { FitnessProfileRecordRepository } from './fitness_athletics.repository';

@Module({
  controllers: [FitnessProfileRecordController],
  providers: [FitnessProfileRecordService, FitnessProfileRecordRepository],
  exports: [FitnessProfileRecordService, FitnessProfileRecordRepository]
})
export class FitnessProfileRecordModule {}
