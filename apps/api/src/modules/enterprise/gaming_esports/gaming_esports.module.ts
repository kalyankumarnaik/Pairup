/**
 * Enterprise Module: Gaming, Esports & Board Game Lobbies
 */
import { Module } from '@nestjs/common';
import { GamerProfileRecordController } from './gaming_esports.controller';
import { GamerProfileRecordService } from './gaming_esports.service';
import { GamerProfileRecordRepository } from './gaming_esports.repository';

@Module({
  controllers: [GamerProfileRecordController],
  providers: [GamerProfileRecordService, GamerProfileRecordRepository],
  exports: [GamerProfileRecordService, GamerProfileRecordRepository]
})
export class GamerProfileRecordModule {}
