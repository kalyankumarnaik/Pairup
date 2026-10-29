/**
 * Enterprise Module: Microbrewery Crawls & Vineyard Tastings
 */
import { Module } from '@nestjs/common';
import { SommelierTastingRecordController } from './craft_beer_wine.controller';
import { SommelierTastingRecordService } from './craft_beer_wine.service';
import { SommelierTastingRecordRepository } from './craft_beer_wine.repository';

@Module({
  controllers: [SommelierTastingRecordController],
  providers: [SommelierTastingRecordService, SommelierTastingRecordRepository],
  exports: [SommelierTastingRecordService, SommelierTastingRecordRepository]
})
export class SommelierTastingRecordModule {}
