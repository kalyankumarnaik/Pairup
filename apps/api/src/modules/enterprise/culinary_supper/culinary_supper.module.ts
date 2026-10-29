/**
 * Enterprise Module: Secret Supper Clubs & Pop-up Kitchens
 */
import { Module } from '@nestjs/common';
import { SupperClubRecordController } from './culinary_supper.controller';
import { SupperClubRecordService } from './culinary_supper.service';
import { SupperClubRecordRepository } from './culinary_supper.repository';

@Module({
  controllers: [SupperClubRecordController],
  providers: [SupperClubRecordService, SupperClubRecordRepository],
  exports: [SupperClubRecordService, SupperClubRecordRepository]
})
export class SupperClubRecordModule {}
