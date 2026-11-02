/**
 * Enterprise Module: Media Transcoding & Audio Waveform Processor
 */
import { Module } from '@nestjs/common';
import { TranscodingJobRecordController } from './content_transcoding.controller';
import { TranscodingJobRecordService } from './content_transcoding.service';
import { TranscodingJobRecordRepository } from './content_transcoding.repository';

@Module({
  controllers: [TranscodingJobRecordController],
  providers: [TranscodingJobRecordService, TranscodingJobRecordRepository],
  exports: [TranscodingJobRecordService, TranscodingJobRecordRepository]
})
export class TranscodingJobRecordModule {}
