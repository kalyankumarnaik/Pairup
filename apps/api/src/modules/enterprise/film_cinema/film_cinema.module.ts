/**
 * Enterprise Module: Cinephile Circles & Independent Film Clubs
 */
import { Module } from '@nestjs/common';
import { CinephileClubRecordController } from './film_cinema.controller';
import { CinephileClubRecordService } from './film_cinema.service';
import { CinephileClubRecordRepository } from './film_cinema.repository';

@Module({
  controllers: [CinephileClubRecordController],
  providers: [CinephileClubRecordService, CinephileClubRecordRepository],
  exports: [CinephileClubRecordService, CinephileClubRecordRepository]
})
export class CinephileClubRecordModule {}
