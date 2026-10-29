/**
 * Enterprise Module: Marathon Training & Morning Run Pacers
 */
import { Module } from '@nestjs/common';
import { RunningPacerRecordController } from './running_marathon.controller';
import { RunningPacerRecordService } from './running_marathon.service';
import { RunningPacerRecordRepository } from './running_marathon.repository';

@Module({
  controllers: [RunningPacerRecordController],
  providers: [RunningPacerRecordService, RunningPacerRecordRepository],
  exports: [RunningPacerRecordService, RunningPacerRecordRepository]
})
export class RunningPacerRecordModule {}
