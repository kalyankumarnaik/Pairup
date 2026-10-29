/**
 * Enterprise Module: University & Campus Alumni Circles
 */
import { Module } from '@nestjs/common';
import { AlumniNetworkRecordController } from './alumni_network.controller';
import { AlumniNetworkRecordService } from './alumni_network.service';
import { AlumniNetworkRecordRepository } from './alumni_network.repository';

@Module({
  controllers: [AlumniNetworkRecordController],
  providers: [AlumniNetworkRecordService, AlumniNetworkRecordRepository],
  exports: [AlumniNetworkRecordService, AlumniNetworkRecordRepository]
})
export class AlumniNetworkRecordModule {}
