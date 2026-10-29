/**
 * Enterprise Module: Interactive Icebreaker & Quiz Engine
 */
import { Module } from '@nestjs/common';
import { IcebreakerQuizRecordController } from './icebreaker_games.controller';
import { IcebreakerQuizRecordService } from './icebreaker_games.service';
import { IcebreakerQuizRecordRepository } from './icebreaker_games.repository';

@Module({
  controllers: [IcebreakerQuizRecordController],
  providers: [IcebreakerQuizRecordService, IcebreakerQuizRecordRepository],
  exports: [IcebreakerQuizRecordService, IcebreakerQuizRecordRepository]
})
export class IcebreakerQuizRecordModule {}
