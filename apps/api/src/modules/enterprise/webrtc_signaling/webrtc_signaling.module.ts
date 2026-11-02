/**
 * Enterprise Module: WebRTC Signaling & Media Relay
 */
import { Module } from '@nestjs/common';
import { CallSessionRecordController } from './webrtc_signaling.controller';
import { CallSessionRecordService } from './webrtc_signaling.service';
import { CallSessionRecordRepository } from './webrtc_signaling.repository';

@Module({
  controllers: [CallSessionRecordController],
  providers: [CallSessionRecordService, CallSessionRecordRepository],
  exports: [CallSessionRecordService, CallSessionRecordRepository]
})
export class CallSessionRecordModule {}
