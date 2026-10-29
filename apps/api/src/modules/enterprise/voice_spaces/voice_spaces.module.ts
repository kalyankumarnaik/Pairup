/**
 * Enterprise Module: Interactive Voice Spaces & Audio Rooms
 */
import { Module } from '@nestjs/common';
import { AudioRoomRecordController } from './voice_spaces.controller';
import { AudioRoomRecordService } from './voice_spaces.service';
import { AudioRoomRecordRepository } from './voice_spaces.repository';

@Module({
  controllers: [AudioRoomRecordController],
  providers: [AudioRoomRecordService, AudioRoomRecordRepository],
  exports: [AudioRoomRecordService, AudioRoomRecordRepository]
})
export class AudioRoomRecordModule {}
