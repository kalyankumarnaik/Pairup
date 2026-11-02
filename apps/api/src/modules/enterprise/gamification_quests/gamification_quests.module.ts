/**
 * Enterprise Module: Gamification, Streaks & Quest Engine
 */
import { Module } from '@nestjs/common';
import { GamificationQuestRecordController } from './gamification_quests.controller';
import { GamificationQuestRecordService } from './gamification_quests.service';
import { GamificationQuestRecordRepository } from './gamification_quests.repository';

@Module({
  controllers: [GamificationQuestRecordController],
  providers: [GamificationQuestRecordService, GamificationQuestRecordRepository],
  exports: [GamificationQuestRecordService, GamificationQuestRecordRepository]
})
export class GamificationQuestRecordModule {}
