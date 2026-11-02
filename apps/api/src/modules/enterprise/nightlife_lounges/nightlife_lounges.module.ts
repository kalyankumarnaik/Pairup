/**
 * Enterprise Module: Nightlife, Cocktails & Bar Trails
 */
import { Module } from '@nestjs/common';
import { NightlifeVenueRecordController } from './nightlife_lounges.controller';
import { NightlifeVenueRecordService } from './nightlife_lounges.service';
import { NightlifeVenueRecordRepository } from './nightlife_lounges.repository';

@Module({
  controllers: [NightlifeVenueRecordController],
  providers: [NightlifeVenueRecordService, NightlifeVenueRecordRepository],
  exports: [NightlifeVenueRecordService, NightlifeVenueRecordRepository]
})
export class NightlifeVenueRecordModule {}
