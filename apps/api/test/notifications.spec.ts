import { describe, it, expect, beforeEach } from 'vitest';
import { NotificationsService } from '../src/modules/notifications/notifications.service';
import { MemoryStoreService } from '../src/common/database/memory-store.service';
import { DiscoveryService } from '../src/modules/discovery/discovery.service';
import { LocationService } from '../src/modules/location/location.service';
import { ConnectionMode, SwipeAction } from '@pairup/domain-types';

describe('NotificationsService - Push, In-App Delivery & Match Alerting', () => {
  let notificationsService: NotificationsService;
  let store: MemoryStoreService;
  let locationService: LocationService;
  let discoveryService: DiscoveryService;

  beforeEach(() => {
    store = new MemoryStoreService();
    store.onModuleInit();
    notificationsService = new NotificationsService(store);
    locationService = new LocationService(store);
    discoveryService = new DiscoveryService(store, locationService, notificationsService);
  });

  it('retrieves default notifications and calculates unread count correctly', () => {
    const { items, unreadCount } = notificationsService.getNotifications('usr_demo_1');
    expect(items.length).toBeGreaterThan(0);
    expect(unreadCount).toBe(items.filter((i) => !i.isRead).length);
  });

  it('pushes a new notification and prepends it to the user inbox', () => {
    const created = notificationsService.pushNotification(
      'usr_demo_1',
      'Test Alert Title',
      'This is a sample test push message',
      'SURGE',
      '⚡',
      '/nearby'
    );

    expect(created.id).toBeDefined();
    expect(created.category).toBe('SURGE');
    expect(created.isRead).toBe(false);

    const { items } = notificationsService.getNotifications('usr_demo_1');
    expect(items[0].id).toBe(created.id);
  });

  it('marks a single notification as read', () => {
    const notif = notificationsService.pushNotification(
      'usr_demo_2',
      'New Message',
      'Hey there!',
      'MESSAGE',
      '💬'
    );

    expect(notif.isRead).toBe(false);

    const res = notificationsService.markAsRead('usr_demo_2', notif.id);
    expect(res.success).toBe(true);

    const { items, unreadCount } = notificationsService.getNotifications('usr_demo_2');
    const updated = items.find((i) => i.id === notif.id);
    expect(updated?.isRead).toBe(true);
    expect(unreadCount).toBe(0);
  });

  it('marks all unread notifications as read', () => {
    notificationsService.pushNotification('usr_batch', 'Alert 1', 'Content 1', 'SAFETY');
    notificationsService.pushNotification('usr_batch', 'Alert 2', 'Content 2', 'EVENT');

    const before = notificationsService.getNotifications('usr_batch');
    expect(before.unreadCount).toBe(2);

    const res = notificationsService.markAllAsRead('usr_batch');
    expect(res.markedCount).toBe(2);

    const after = notificationsService.getNotifications('usr_batch');
    expect(after.unreadCount).toBe(0);
  });

  it('automatically dispatches notifications to both users upon mutual match creation', () => {
    // User 3 likes User 4
    discoveryService.processSwipe('usr_demo_3', 'usr_demo_4', SwipeAction.LIKE, 'DATING');

    // User 4 reciprocates like with User 3 -> Mutual Match!
    const matchRes = discoveryService.processSwipe('usr_demo_4', 'usr_demo_3', SwipeAction.LIKE, 'DATING');

    expect(matchRes.isMatch).toBe(true);

    // Verify User 3 received mutual match notification
    const user3Notifs = notificationsService.getNotifications('usr_demo_3');
    const user3MatchNotif = user3Notifs.items.find((n) => n.category === 'MATCH');
    expect(user3MatchNotif).toBeDefined();
    expect(user3MatchNotif?.title).toContain('Match Alert');

    // Verify User 4 received mutual match notification
    const user4Notifs = notificationsService.getNotifications('usr_demo_4');
    const user4MatchNotif = user4Notifs.items.find((n) => n.category === 'MATCH');
    expect(user4MatchNotif).toBeDefined();
    expect(user4MatchNotif?.title).toContain('Match Alert');
  });
});
