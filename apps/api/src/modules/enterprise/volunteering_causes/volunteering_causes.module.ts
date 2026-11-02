/**
 * Enterprise Module: Social Impact & Cause Volunteering
 */
import { Module } from '@nestjs/common';
import { CauseVolunteeringRecordController } from './volunteering_causes.controller';
import { CauseVolunteeringRecordService } from './volunteering_causes.service';
import { CauseVolunteeringRecordRepository } from './volunteering_causes.repository';

@Module({
  controllers: [CauseVolunteeringRecordController],
  providers: [CauseVolunteeringRecordService, CauseVolunteeringRecordRepository],
  exports: [CauseVolunteeringRecordService, CauseVolunteeringRecordRepository]
})
export class CauseVolunteeringRecordModule {}
