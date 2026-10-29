/**
 * Enterprise Module: Culinary Crawls & Tasting Circles
 */
import { Module } from '@nestjs/common';
import { CulinaryDiscoveryRecordController } from './culinary_foodies.controller';
import { CulinaryDiscoveryRecordService } from './culinary_foodies.service';
import { CulinaryDiscoveryRecordRepository } from './culinary_foodies.repository';

@Module({
  controllers: [CulinaryDiscoveryRecordController],
  providers: [CulinaryDiscoveryRecordService, CulinaryDiscoveryRecordRepository],
  exports: [CulinaryDiscoveryRecordService, CulinaryDiscoveryRecordRepository]
})
export class CulinaryDiscoveryRecordModule {}
