/**
 * Enterprise Module: Book Clubs & Literary Companions
 */
import { Module } from '@nestjs/common';
import { LiteraryProfileRecordController } from './book_literature.controller';
import { LiteraryProfileRecordService } from './book_literature.service';
import { LiteraryProfileRecordRepository } from './book_literature.repository';

@Module({
  controllers: [LiteraryProfileRecordController],
  providers: [LiteraryProfileRecordService, LiteraryProfileRecordRepository],
  exports: [LiteraryProfileRecordService, LiteraryProfileRecordRepository]
})
export class LiteraryProfileRecordModule {}
