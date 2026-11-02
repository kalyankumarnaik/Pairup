import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  Optional
} from '@nestjs/common';
import {
  CompatibilityBreakdown,
  ConnectionMode,
  DiscoveryCard,
  DiscoveryFilter,
  MatchStatus,
  MatchSummary,
  MessageType,
  PaginatedDiscoveryResponse,
  SwipeAction,
  SwipeDecisionResponse
} from '@pairup/domain-types';
import { MemoryStoreService } from '../../common/database/memory-store.service';
import { LocationService } from '../location/location.service';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class DiscoveryService {
  private readonly logger = new Logger(DiscoveryService.name);
  private userDecisionHistory: Map<string, { targetUserId: string; action: SwipeAction; mode: string }[]> = new Map();

  constructor(
    private readonly store: MemoryStoreService,
    private readonly locationService: LocationService,
    @Optional() private readonly notificationsService?: NotificationsService
  ) {}

  getDiscoveryFeed(
    userId: string,
    filters?: DiscoveryFilter
  ): DiscoveryCard[] {
    const nearby = this.locationService.findNearbyProfiles(
      userId,
      filters?.maxDistanceKm || 50
    );

    // Filter out already decided profiles
    const decidedTargets = new Set<string>();
    for (const [, dec] of this.store.swipes.entries()) {
      if (dec.userId === userId) {
        decidedTargets.add(dec.targetUserId);
      }
    }

    const filtered = nearby.filter((card) => {
      if (decidedTargets.has(card.userId)) return false;

      if (filters?.minAge && card.age < filters.minAge) return false;
      if (filters?.maxAge && card.age > filters.maxAge) return false;

      if (filters?.connectionMode && filters.connectionMode !== 'BOTH') {
        if (card.connectionMode !== 'BOTH' && card.connectionMode !== filters.connectionMode) {
          return false;
        }
      }

      return true;
    });

    return filtered.map((card) => this.enrichWithCompatibility(userId, card));
  }

  getPaginatedDiscoveryFeed(
    userId: string,
    filters?: DiscoveryFilter
  ): PaginatedDiscoveryResponse {
    const all = this.getDiscoveryFeed(userId, filters);
    const limit = filters?.limit && filters.limit > 0 ? filters.limit : 20;

    let startIndex = 0;
    if (filters?.cursor) {
      const foundIdx = all.findIndex((c) => c.id === filters.cursor);
      if (foundIdx !== -1) {
        startIndex = foundIdx + 1;
      }
    }

    const items = all.slice(startIndex, startIndex + limit);
    const hasMore = startIndex + limit < all.length;
    const nextCursor = hasMore && items.length > 0 ? items[items.length - 1].id : null;

    return {
      items,
      nextCursor,
      totalAvailable: all.length,
      hasMore
    };
  }

  private enrichWithCompatibility(myUserId: string, card: DiscoveryCard): DiscoveryCard {
    const myProfile = this.store.profiles.get(myUserId);
    if (!myProfile) return card;

    const myInterestNames = new Set((myProfile.interests || []).map((i) => i.name.toLowerCase()));
    const sharedInterests = (card.interests || [])
      .filter((i) => myInterestNames.has(i.name.toLowerCase()))
      .map((i) => i.name);

    // Intention alignment
    let intentionAlignment = 70;
    if (myProfile.relationshipIntention === card.relationshipIntention) {
      intentionAlignment = 95;
    } else if (
      (myProfile.relationshipIntention as string) === 'NOT_SURE_YET' ||
      (card.relationshipIntention as string) === 'NOT_SURE_YET'
    ) {
      intentionAlignment = 80;
    }

    // Interest score based on overlap
    const interestScore = Math.min(100, Math.round(50 + sharedInterests.length * 15));

    // Lifestyle score
    const lifestyleScore = card.city === myProfile.city ? 90 : 75;

    // Overall weighted score
    const overallScore = Math.round(0.4 * intentionAlignment + 0.35 * interestScore + 0.25 * lifestyleScore);

    const breakdown: CompatibilityBreakdown = {
      overallPercentage: overallScore,
      sharedInterests,
      valuesAlignmentPercentage: intentionAlignment,
      lifestyleMatchPercentage: lifestyleScore,
      vibeSummary:
        sharedInterests.length > 0
          ? `Mutual affinity for ${sharedInterests.slice(0, 2).join(' & ')} with ${overallScore}% vibe alignment`
          : `${overallScore}% values compatibility based on relationship intention and social energy`
    };

    return {
      ...card,
      compatibilityScore: overallScore,
      compatibilityReasons: [
        sharedInterests.length > 0
          ? `Shared interests in ${sharedInterests.join(', ')}`
          : 'High lifestyle compatibility',
        card.city ? `Both located in ${card.city}` : 'Nearby discovery radius'
      ],
      compatibilityBreakdown: breakdown
    };
  }

  processSwipe(
    userId: string,
    targetUserId: string,
    action: SwipeAction,
    connectionMode: string = 'DATING'
  ): SwipeDecisionResponse {
    if (userId === targetUserId) {
      throw new BadRequestException('You cannot swipe on your own profile');
    }

    const targetProfile = this.store.profiles.get(targetUserId);
    if (!targetProfile) {
      throw new NotFoundException('Target user profile not found');
    }

    // Save decision
    const decisionKey = `${userId}_${targetUserId}_${connectionMode}`;
    this.store.swipes.set(decisionKey, {
      userId,
      targetUserId,
      action,
      mode: connectionMode,
      createdAt: new Date()
    });

    // Track history for rewind
    const history = this.userDecisionHistory.get(userId) || [];
    history.push({ targetUserId, action, mode: connectionMode });
    this.userDecisionHistory.set(userId, history);

    // If PASS, no match check needed
    if (action === SwipeAction.PASS) {
      return { isMatch: false };
    }

    // Check if target user previously liked current user
    const reverseDecisionKey = `${targetUserId}_${userId}_${connectionMode}`;
    const reverseDecision = this.store.swipes.get(reverseDecisionKey);

    const isMutualLike =
      reverseDecision &&
      (reverseDecision.action === SwipeAction.LIKE || reverseDecision.action === SwipeAction.SUPER_LIKE);

    if (isMutualLike) {
      // Check if match already exists
      let matchId: string | null = null;
      for (const [id, m] of this.store.matches.entries()) {
        if (
          ((m.user1Id === userId && m.user2Id === targetUserId) ||
            (m.user1Id === targetUserId && m.user2Id === userId)) &&
          m.status === MatchStatus.ACTIVE
        ) {
          matchId = id;
          break;
        }
      }

      if (!matchId) {
        matchId = `match_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        const convId = `conv_${matchId}`;

        // Create mutual match
        this.store.matches.set(matchId, {
          id: matchId,
          user1Id: userId,
          user2Id: targetUserId,
          mode: connectionMode,
          status: MatchStatus.ACTIVE,
          conversationId: convId,
          createdAt: new Date()
        });

        // Create conversation
        const myProfile = this.store.profiles.get(userId);
        this.store.conversations.set(convId, {
          id: convId,
          matchId: matchId,
          participants: [
            {
              userId: userId,
              displayName: myProfile?.displayName || 'User',
              primaryPhotoUrl: myProfile?.photos[0]?.url || null,
              isOnline: true,
              lastSeenAt: new Date().toISOString()
            },
            {
              userId: targetUserId,
              displayName: targetProfile.displayName,
              primaryPhotoUrl: targetProfile.photos[0]?.url || null,
              isOnline: true,
              lastSeenAt: new Date().toISOString()
            }
          ],
          unreadCount: 0,
          isMuted: false,
          updatedAt: new Date().toISOString()
        });

        this.store.messages.set(convId, []);

        this.logger.log(`🎉 IT'S A MATCH! Users ${userId} & ${targetUserId} (Match ID: ${matchId})`);

        if (this.notificationsService) {
          this.notificationsService.pushNotification(
            targetUserId,
            'New Match Alert! 💖',
            `${myProfile?.displayName || 'Someone'} swiped right on you! Start the conversation before the spark cools down.`,
            'MATCH',
            '💖',
            '/messages'
          );
          this.notificationsService.pushNotification(
            userId,
            'New Match Alert! 💖',
            `You and ${targetProfile.displayName} matched! Send an icebreaker now.`,
            'MATCH',
            '💖',
            '/messages'
          );
        }
      }

      return {
        isMatch: true,
        matchId,
        matchedProfile: {
          id: targetProfile.id,
          userId: targetProfile.userId,
          displayName: targetProfile.displayName,
          age: targetProfile.age,
          bio: targetProfile.bio,
          gender: targetProfile.gender,
          relationshipIntention: targetProfile.relationshipIntention,
          connectionMode: targetProfile.connectionMode,
          city: targetProfile.city,
          interests: targetProfile.interests,
          photos: targetProfile.photos,
          prompts: targetProfile.prompts,
          verificationStatus: targetProfile.verificationStatus
        }
      };
    }

    return {
      isMatch: false,
      remainingLikesToday: 95
    };
  }

  rewindLastDecision(userId: string): { rewound: boolean; targetUserId?: string } {
    const history = this.userDecisionHistory.get(userId) || [];
    if (history.length === 0) {
      throw new BadRequestException('No previous decision available to rewind');
    }

    const last = history.pop()!;
    const key = `${userId}_${last.targetUserId}_${last.mode}`;
    this.store.swipes.delete(key);

    return { rewound: true, targetUserId: last.targetUserId };
  }

  getMatches(userId: string): MatchSummary[] {
    const results: MatchSummary[] = [];

    for (const [, match] of this.store.matches.entries()) {
      if (match.status !== MatchStatus.ACTIVE) continue;

      if (match.user1Id === userId || match.user2Id === userId) {
        const otherUserId = match.user1Id === userId ? match.user2Id : match.user1Id;
        const otherProfile = this.store.profiles.get(otherUserId);
        const conv = this.store.conversations.get(match.conversationId);
        const messages = this.store.messages.get(match.conversationId) || [];
        const lastMsg = messages[messages.length - 1];

        if (otherProfile) {
          results.push({
            id: match.id,
            conversationId: match.conversationId,
            matchedUserId: otherUserId,
            matchedProfile: {
              displayName: otherProfile.displayName,
              age: otherProfile.age,
              primaryPhotoUrl: otherProfile.photos[0]?.url || null,
              city: otherProfile.city,
              isVerified: otherProfile.verificationStatus === 'VERIFIED'
            },
            connectionMode: match.mode as any,
            status: match.status,
            lastMessageSnippet: lastMsg ? lastMsg.content : 'New match! Say hello ✨',
            lastMessageAt: lastMsg ? lastMsg.createdAt : match.createdAt.toISOString(),
            unreadCount: conv?.unreadCount || 0,
            createdAt: match.createdAt.toISOString()
          });
        }
      }
    }

    return results.sort((a, b) => new Date(b.lastMessageAt || 0).getTime() - new Date(a.lastMessageAt || 0).getTime());
  }

  unmatch(userId: string, matchId: string): { unmatched: boolean } {
    const match = this.store.matches.get(matchId);
    if (!match || (match.user1Id !== userId && match.user2Id !== userId)) {
      throw new NotFoundException('Match not found');
    }

    match.status = MatchStatus.UNMATCHED;
    this.store.matches.set(matchId, match);
    return { unmatched: true };
  }

  getLikesReceived(userId: string) {
    const likes: any[] = [];
    for (const [, dec] of this.store.swipes.entries()) {
      if (
        dec.targetUserId === userId &&
        (dec.action === SwipeAction.LIKE || dec.action === SwipeAction.SUPER_LIKE)
      ) {
        const sender = this.store.profiles.get(dec.userId);
        if (sender) {
          likes.push({
            id: sender.userId,
            name: sender.displayName,
            age: sender.age,
            city: sender.city,
            distanceKm: 3.5,
            photoUrl: sender.photos?.[0]?.url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600',
            isSuperLike: dec.action === SwipeAction.SUPER_LIKE,
            timeAgo: 'Recently',
            interests: sender.interests?.map((i) => `${i.emoji || '✨'} ${i.name}`) || []
          });
        }
      }
    }

    if (likes.length === 0) {
      // Default curated profiles for rich demonstration
      for (const [id, prof] of this.store.profiles.entries()) {
        if (id !== userId && likes.length < 5) {
          likes.push({
            id: prof.userId,
            name: prof.displayName,
            age: prof.age,
            city: prof.city,
            distanceKm: Math.floor(Math.random() * 5 + 2),
            photoUrl: prof.photos?.[0]?.url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600',
            isSuperLike: likes.length % 2 === 0,
            timeAgo: '12m ago',
            interests: prof.interests?.map((i) => `${i.emoji || '✨'} ${i.name}`) || []
          });
        }
      }
    }

    return likes;
  }
}
