/**
 * Enterprise Module: Moderation, Sanctions & Due Process Appeals
 */
import { Module } from '@nestjs/common';
import { ModerationIncidentController } from './moderation_appeals.controller';
import { ModerationIncidentService } from './moderation_appeals.service';
import { ModerationIncidentRepository } from './moderation_appeals.repository';

@Module({
  controllers: [ModerationIncidentController],
  providers: [ModerationIncidentService, ModerationIncidentRepository],
  exports: [ModerationIncidentService, ModerationIncidentRepository]
})
export class ModerationIncidentModule {}
