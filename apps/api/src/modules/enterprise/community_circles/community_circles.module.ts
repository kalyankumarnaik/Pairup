/**
 * Enterprise Module: Community Circles & Hobby Clubs
 */
import { Module } from '@nestjs/common';
import { CommunityClubRecordController } from './community_circles.controller';
import { CommunityClubRecordService } from './community_circles.service';
import { CommunityClubRecordRepository } from './community_circles.repository';

@Module({
  controllers: [CommunityClubRecordController],
  providers: [CommunityClubRecordService, CommunityClubRecordRepository],
  exports: [CommunityClubRecordService, CommunityClubRecordRepository]
})
export class CommunityClubRecordModule {}
