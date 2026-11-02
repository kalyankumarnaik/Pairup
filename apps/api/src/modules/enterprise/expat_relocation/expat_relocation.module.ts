/**
 * Enterprise Module: Global Expats & Relocation City Guides
 */
import { Module } from '@nestjs/common';
import { ExpatRelocationRecordController } from './expat_relocation.controller';
import { ExpatRelocationRecordService } from './expat_relocation.service';
import { ExpatRelocationRecordRepository } from './expat_relocation.repository';

@Module({
  controllers: [ExpatRelocationRecordController],
  providers: [ExpatRelocationRecordService, ExpatRelocationRecordRepository],
  exports: [ExpatRelocationRecordService, ExpatRelocationRecordRepository]
})
export class ExpatRelocationRecordModule {}
