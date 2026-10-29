/**
 * Enterprise Module: Creative Arts, Design & Photography
 */
import { Module } from '@nestjs/common';
import { CreativePortfolioRecordController } from './creative_arts.controller';
import { CreativePortfolioRecordService } from './creative_arts.service';
import { CreativePortfolioRecordRepository } from './creative_arts.repository';

@Module({
  controllers: [CreativePortfolioRecordController],
  providers: [CreativePortfolioRecordService, CreativePortfolioRecordRepository],
  exports: [CreativePortfolioRecordService, CreativePortfolioRecordRepository]
})
export class CreativePortfolioRecordModule {}
