/**
 * Enterprise Module: Polyglot Language Exchange Tandems
 */
import { Module } from '@nestjs/common';
import { LanguageTandemRecordController } from './language_exchange.controller';
import { LanguageTandemRecordService } from './language_exchange.service';
import { LanguageTandemRecordRepository } from './language_exchange.repository';

@Module({
  controllers: [LanguageTandemRecordController],
  providers: [LanguageTandemRecordService, LanguageTandemRecordRepository],
  exports: [LanguageTandemRecordService, LanguageTandemRecordRepository]
})
export class LanguageTandemRecordModule {}
