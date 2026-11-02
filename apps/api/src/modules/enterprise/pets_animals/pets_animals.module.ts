/**
 * Enterprise Module: Pet Lovers & Animal Companion Spaces
 */
import { Module } from '@nestjs/common';
import { PetCompanionRecordController } from './pets_animals.controller';
import { PetCompanionRecordService } from './pets_animals.service';
import { PetCompanionRecordRepository } from './pets_animals.repository';

@Module({
  controllers: [PetCompanionRecordController],
  providers: [PetCompanionRecordService, PetCompanionRecordRepository],
  exports: [PetCompanionRecordService, PetCompanionRecordRepository]
})
export class PetCompanionRecordModule {}
