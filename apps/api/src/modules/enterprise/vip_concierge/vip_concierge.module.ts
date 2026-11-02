/**
 * Enterprise Module: VIP Concierge & Bespoke Matchmaking
 */
import { Module } from '@nestjs/common';
import { VipConciergeRecordController } from './vip_concierge.controller';
import { VipConciergeRecordService } from './vip_concierge.service';
import { VipConciergeRecordRepository } from './vip_concierge.repository';

@Module({
  controllers: [VipConciergeRecordController],
  providers: [VipConciergeRecordService, VipConciergeRecordRepository],
  exports: [VipConciergeRecordService, VipConciergeRecordRepository]
})
export class VipConciergeRecordModule {}
