/**
 * Enterprise Module: Discovery & Algorithmic Matching
 */
import { Module } from '@nestjs/common';
import { DiscoveryCandidateController } from './discovery_matching.controller';
import { DiscoveryCandidateService } from './discovery_matching.service';
import { DiscoveryCandidateRepository } from './discovery_matching.repository';

@Module({
  controllers: [DiscoveryCandidateController],
  providers: [DiscoveryCandidateService, DiscoveryCandidateRepository],
  exports: [DiscoveryCandidateService, DiscoveryCandidateRepository]
})
export class DiscoveryCandidateModule {}
