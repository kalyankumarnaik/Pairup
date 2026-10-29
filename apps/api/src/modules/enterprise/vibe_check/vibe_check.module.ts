/**
 * Enterprise Module: Spontaneous Video & Audio Vibe Check
 */
import { Module } from '@nestjs/common';
import { VibeCheckPromptRecordController } from './vibe_check.controller';
import { VibeCheckPromptRecordService } from './vibe_check.service';
import { VibeCheckPromptRecordRepository } from './vibe_check.repository';

@Module({
  controllers: [VibeCheckPromptRecordController],
  providers: [VibeCheckPromptRecordService, VibeCheckPromptRecordRepository],
  exports: [VibeCheckPromptRecordService, VibeCheckPromptRecordRepository]
})
export class VibeCheckPromptRecordModule {}
