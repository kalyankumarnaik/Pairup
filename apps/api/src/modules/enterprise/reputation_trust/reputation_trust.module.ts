/**
 * Enterprise Module: Member Reputation & Trust Verification Graph
 */
import { Module } from '@nestjs/common';
import { TrustScoreRecordController } from './reputation_trust.controller';
import { TrustScoreRecordService } from './reputation_trust.service';
import { TrustScoreRecordRepository } from './reputation_trust.repository';

@Module({
  controllers: [TrustScoreRecordController],
  providers: [TrustScoreRecordService, TrustScoreRecordRepository],
  exports: [TrustScoreRecordService, TrustScoreRecordRepository]
})
export class TrustScoreRecordModule {}
