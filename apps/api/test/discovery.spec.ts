import { describe, expect, it, beforeEach } from 'vitest';
import { DiscoveryService } from '../src/modules/discovery/discovery.service';
import { LocationService } from '../src/modules/location/location.service';
import { MemoryStoreService } from '../src/common/database/memory-store.service';
import { SwipeAction } from '@pairup/domain-types';

describe('DiscoveryService & Mutual Matching Engine', () => {
  let discoveryService: DiscoveryService;
  let locationService: LocationService;
  let store: MemoryStoreService;

  beforeEach(() => {
    store = new MemoryStoreService();
    store.onModuleInit();
    locationService = new LocationService(store);
    discoveryService = new DiscoveryService(store, locationService);
  });

  it('records swipe decisions properly', () => {
    const res = discoveryService.processSwipe('usr_demo_1', 'usr_demo_3', SwipeAction.LIKE, 'DATING');
    expect(res.isMatch).toBe(false);
  });

  it('generates a mutual match when two users like each other', () => {
    // User 3 likes User 4
    const firstSwipe = discoveryService.processSwipe('usr_demo_3', 'usr_demo_4', SwipeAction.LIKE, 'DATING');
    expect(firstSwipe.isMatch).toBe(false);

    // User 4 likes User 3 back
    const secondSwipe = discoveryService.processSwipe('usr_demo_4', 'usr_demo_3', SwipeAction.LIKE, 'DATING');
    expect(secondSwipe.isMatch).toBe(true);
    expect(secondSwipe.matchId).toBeDefined();
    expect(secondSwipe.matchedProfile).toBeDefined();
  });

  it('allows rewinding the previous decision', () => {
    discoveryService.processSwipe('usr_demo_1', 'usr_demo_5', SwipeAction.PASS, 'DATING');
    const rewindRes = discoveryService.rewindLastDecision('usr_demo_1');
    expect(rewindRes.rewound).toBe(true);
    expect(rewindRes.targetUserId).toBe('usr_demo_5');
  });

  it('prevents self swiping', () => {
    expect(() => {
      discoveryService.processSwipe('usr_demo_1', 'usr_demo_1', SwipeAction.LIKE, 'DATING');
    }).toThrow(/cannot swipe on your own/);
  });

  it('retrieves likes received by a user', () => {
    // usr_demo_2 likes usr_demo_1
    discoveryService.processSwipe('usr_demo_2', 'usr_demo_1', SwipeAction.LIKE, 'DATING');
    const likes = discoveryService.getLikesReceived('usr_demo_1');
    expect(likes.length).toBeGreaterThan(0);
    const likeFromUser2 = likes.find((l) => l.id === 'usr_demo_2');
    expect(likeFromUser2).toBeDefined();
    expect(likeFromUser2?.name).toBe('Aarav Sharma');
  });

  it('enriches discovery feed cards with compatibility score and breakdown', () => {
    const feed = discoveryService.getDiscoveryFeed('usr_demo_1');
    expect(feed.length).toBeGreaterThan(0);
    const firstCard = feed[0];
    expect(firstCard.compatibilityScore).toBeGreaterThan(0);
    expect(firstCard.compatibilityBreakdown).toBeDefined();
    expect(firstCard.compatibilityBreakdown?.overallPercentage).toBe(firstCard.compatibilityScore);
    expect(firstCard.compatibilityBreakdown?.vibeSummary).toBeDefined();
  });

  it('supports cursor-based pagination with limit and nextCursor', () => {
    const page1 = discoveryService.getPaginatedDiscoveryFeed('usr_demo_1', { limit: 2 });
    expect(page1.items.length).toBeLessThanOrEqual(2);

    if (page1.hasMore && page1.nextCursor) {
      const page2 = discoveryService.getPaginatedDiscoveryFeed('usr_demo_1', {
        cursor: page1.nextCursor,
        limit: 2
      });
      expect(page2.items.length).toBeGreaterThan(0);
      expect(page2.items[0].id).not.toBe(page1.items[0].id);
    }
  });
});
