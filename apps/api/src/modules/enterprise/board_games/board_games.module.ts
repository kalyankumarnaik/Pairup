/**
 * Enterprise Module: Tabletop RPG & Board Gaming Lobbies
 */
import { Module } from '@nestjs/common';
import { TabletopLobbyRecordController } from './board_games.controller';
import { TabletopLobbyRecordService } from './board_games.service';
import { TabletopLobbyRecordRepository } from './board_games.repository';

@Module({
  controllers: [TabletopLobbyRecordController],
  providers: [TabletopLobbyRecordService, TabletopLobbyRecordRepository],
  exports: [TabletopLobbyRecordService, TabletopLobbyRecordRepository]
})
export class TabletopLobbyRecordModule {}
