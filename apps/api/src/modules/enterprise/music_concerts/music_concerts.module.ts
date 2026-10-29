/**
 * Enterprise Module: Music Synastry & Concert Discovery
 */
import { Module } from '@nestjs/common';
import { MusicAffinitiesRecordController } from './music_concerts.controller';
import { MusicAffinitiesRecordService } from './music_concerts.service';
import { MusicAffinitiesRecordRepository } from './music_concerts.repository';

@Module({
  controllers: [MusicAffinitiesRecordController],
  providers: [MusicAffinitiesRecordService, MusicAffinitiesRecordRepository],
  exports: [MusicAffinitiesRecordService, MusicAffinitiesRecordRepository]
})
export class MusicAffinitiesRecordModule {}
