/**
 * Enterprise Module: Date Guard & Meetup Safety Guardian
 */
import { Module } from '@nestjs/common';
import { DateGuardSessionController } from './safety_guardian.controller';
import { DateGuardSessionService } from './safety_guardian.service';
import { DateGuardSessionRepository } from './safety_guardian.repository';

@Module({
  controllers: [DateGuardSessionController],
  providers: [DateGuardSessionService, DateGuardSessionRepository],
  exports: [DateGuardSessionService, DateGuardSessionRepository]
})
export class DateGuardSessionModule {}
