/**
 * Enterprise Module: Monetization, Tiers & Billing Engine
 */
import { Module } from '@nestjs/common';
import { SubscriptionBillingRecordController } from './monetization_billing.controller';
import { SubscriptionBillingRecordService } from './monetization_billing.service';
import { SubscriptionBillingRecordRepository } from './monetization_billing.repository';

@Module({
  controllers: [SubscriptionBillingRecordController],
  providers: [SubscriptionBillingRecordService, SubscriptionBillingRecordRepository],
  exports: [SubscriptionBillingRecordService, SubscriptionBillingRecordRepository]
})
export class SubscriptionBillingRecordModule {}
