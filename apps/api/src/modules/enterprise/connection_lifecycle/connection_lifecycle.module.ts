/**
 * Enterprise Module: Connection & Mutual Match Lifecycle
 */
import { Module } from '@nestjs/common';
import { MutualConnectionController } from './connection_lifecycle.controller';
import { MutualConnectionService } from './connection_lifecycle.service';
import { MutualConnectionRepository } from './connection_lifecycle.repository';

@Module({
  controllers: [MutualConnectionController],
  providers: [MutualConnectionService, MutualConnectionRepository],
  exports: [MutualConnectionService, MutualConnectionRepository]
})
export class MutualConnectionModule {}
