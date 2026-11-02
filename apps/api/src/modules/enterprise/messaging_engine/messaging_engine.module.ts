/**
 * Enterprise Module: Encrypted Real-Time Messaging Engine
 */
import { Module } from '@nestjs/common';
import { ChatMessageRecordController } from './messaging_engine.controller';
import { ChatMessageRecordService } from './messaging_engine.service';
import { ChatMessageRecordRepository } from './messaging_engine.repository';

@Module({
  controllers: [ChatMessageRecordController],
  providers: [ChatMessageRecordService, ChatMessageRecordRepository],
  exports: [ChatMessageRecordService, ChatMessageRecordRepository]
})
export class ChatMessageRecordModule {}
