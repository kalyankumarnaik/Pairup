/**
 * Enterprise Module: Astrological Natal Charts & Synastry
 */
import { Module } from '@nestjs/common';
import { AstrologyProfileRecordController } from './astrology_zodiac.controller';
import { AstrologyProfileRecordService } from './astrology_zodiac.service';
import { AstrologyProfileRecordRepository } from './astrology_zodiac.repository';

@Module({
  controllers: [AstrologyProfileRecordController],
  providers: [AstrologyProfileRecordService, AstrologyProfileRecordRepository],
  exports: [AstrologyProfileRecordService, AstrologyProfileRecordRepository]
})
export class AstrologyProfileRecordModule {}
