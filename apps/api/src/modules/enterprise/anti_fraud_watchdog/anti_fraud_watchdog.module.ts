/**
 * Enterprise Module: Anti-Fraud & Synthetic Account Watchdog
 */
import { Module } from '@nestjs/common';
import { FraudSignalRecordController } from './anti_fraud_watchdog.controller';
import { FraudSignalRecordService } from './anti_fraud_watchdog.service';
import { FraudSignalRecordRepository } from './anti_fraud_watchdog.repository';

@Module({
  controllers: [FraudSignalRecordController],
  providers: [FraudSignalRecordService, FraudSignalRecordRepository],
  exports: [FraudSignalRecordService, FraudSignalRecordRepository]
})
export class FraudSignalRecordModule {}
