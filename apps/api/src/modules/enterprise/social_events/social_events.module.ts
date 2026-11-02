/**
 * Enterprise Module: Social Events & Gathering Discovery
 */
import { Module } from '@nestjs/common';
import { SocialEventRecordController } from './social_events.controller';
import { SocialEventRecordService } from './social_events.service';
import { SocialEventRecordRepository } from './social_events.repository';

@Module({
  controllers: [SocialEventRecordController],
  providers: [SocialEventRecordService, SocialEventRecordRepository],
  exports: [SocialEventRecordService, SocialEventRecordRepository]
})
export class SocialEventRecordModule {}
