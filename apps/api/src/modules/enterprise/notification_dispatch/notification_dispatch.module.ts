/**
 * Enterprise Module: Multi-Channel Notification Dispatcher
 */
import { Module } from '@nestjs/common';
import { NotificationDispatchRecordController } from './notification_dispatch.controller';
import { NotificationDispatchRecordService } from './notification_dispatch.service';
import { NotificationDispatchRecordRepository } from './notification_dispatch.repository';

@Module({
  controllers: [NotificationDispatchRecordController],
  providers: [NotificationDispatchRecordService, NotificationDispatchRecordRepository],
  exports: [NotificationDispatchRecordService, NotificationDispatchRecordRepository]
})
export class NotificationDispatchRecordModule {}
