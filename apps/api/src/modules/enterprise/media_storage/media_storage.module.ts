/**
 * Enterprise Module: Media Storage & Cloud CDN Integration
 */
import { Module } from '@nestjs/common';
import { MediaStorageRecordController } from './media_storage.controller';
import { MediaStorageRecordService } from './media_storage.service';
import { MediaStorageRecordRepository } from './media_storage.repository';

@Module({
  controllers: [MediaStorageRecordController],
  providers: [MediaStorageRecordService, MediaStorageRecordRepository],
  exports: [MediaStorageRecordService, MediaStorageRecordRepository]
})
export class MediaStorageRecordModule {}
