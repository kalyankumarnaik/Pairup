/**
 * Enterprise Module: Verified Date Venue Concierge & Booking
 */
import { Module } from '@nestjs/common';
import { VenueReservationRecordController } from './venue_concierge.controller';
import { VenueReservationRecordService } from './venue_concierge.service';
import { VenueReservationRecordRepository } from './venue_concierge.repository';

@Module({
  controllers: [VenueReservationRecordController],
  providers: [VenueReservationRecordService, VenueReservationRecordRepository],
  exports: [VenueReservationRecordService, VenueReservationRecordRepository]
})
export class VenueReservationRecordModule {}
