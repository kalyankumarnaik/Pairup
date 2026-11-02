/**
 * Enterprise Module: Outdoor Adventures & Trekking Expeditions
 */
import { Module } from '@nestjs/common';
import { AdventureExpeditionRecordController } from './outdoor_adventure.controller';
import { AdventureExpeditionRecordService } from './outdoor_adventure.service';
import { AdventureExpeditionRecordRepository } from './outdoor_adventure.repository';

@Module({
  controllers: [AdventureExpeditionRecordController],
  providers: [AdventureExpeditionRecordService, AdventureExpeditionRecordRepository],
  exports: [AdventureExpeditionRecordService, AdventureExpeditionRecordRepository]
})
export class AdventureExpeditionRecordModule {}
