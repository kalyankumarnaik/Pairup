/**
 * Enterprise Module: Virtual Gifts & Experience Vouchers
 */
import { Module } from '@nestjs/common';
import { GiftVoucherTransactionController } from './gift_store.controller';
import { GiftVoucherTransactionService } from './gift_store.service';
import { GiftVoucherTransactionRepository } from './gift_store.repository';

@Module({
  controllers: [GiftVoucherTransactionController],
  providers: [GiftVoucherTransactionService, GiftVoucherTransactionRepository],
  exports: [GiftVoucherTransactionService, GiftVoucherTransactionRepository]
})
export class GiftVoucherTransactionModule {}
