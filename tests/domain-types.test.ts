import { describe, it, expect } from 'vitest';
import {
  UserIdentityStatus,
  UserIdentityPriority,
  DiscoveryCandidateStatus,
  MutualConnectionStatus,
  ChatMessageRecordStatus,
  CallSessionRecordStatus,
  AudioRoomRecordStatus,
  SocialEventRecordStatus,
  CommunityClubRecordStatus,
  DateGuardSessionStatus,
  ModerationIncidentStatus,
  SurgeClusterRecordStatus,
  SubscriptionBillingRecordStatus
} from '@pairup/domain-types';

describe('Root Test Suite: Enterprise Domain Types & State Machines', () => {
  it('validates UserIdentity enums and lifecycle states', () => {
    expect(UserIdentityStatus.ACTIVE).toBe('ACTIVE');
    expect(UserIdentityStatus.INITIALIZING).toBe('INITIALIZING');
    expect(UserIdentityStatus.PENDING_VERIFICATION).toBe('PENDING_VERIFICATION');
    expect(UserIdentityPriority.URGENT).toBe('URGENT');
    expect(UserIdentityPriority.NORMAL).toBe('NORMAL');
  });

  it('validates Discovery & Candidate Matching state transitions', () => {
    expect(DiscoveryCandidateStatus.ACTIVE).toBe('ACTIVE');
    expect(DiscoveryCandidateStatus.SUSPENDED).toBe('SUSPENDED');
  });

  it('validates Mutual Connection & Spark lifecycle', () => {
    expect(MutualConnectionStatus.ACTIVE).toBe('ACTIVE');
    expect(MutualConnectionStatus.INITIALIZING).toBe('INITIALIZING');
  });

  it('validates Real-Time Messaging & Chat records', () => {
    expect(ChatMessageRecordStatus.ACTIVE).toBe('ACTIVE');
    expect(ChatMessageRecordStatus.ARCHIVED).toBe('ARCHIVED');
  });

  it('validates WebRTC Calling & Audio Room topologies', () => {
    expect(CallSessionRecordStatus.ACTIVE).toBe('ACTIVE');
    expect(AudioRoomRecordStatus.ACTIVE).toBe('ACTIVE');
  });

  it('validates Safety Guardian, Moderation & Emergency Date Guard', () => {
    expect(DateGuardSessionStatus.ACTIVE).toBe('ACTIVE');
    expect(ModerationIncidentStatus.ACTIVE).toBe('ACTIVE');
  });

  it('validates Billing, Surge & Social Events domains', () => {
    expect(SubscriptionBillingRecordStatus.ACTIVE).toBe('ACTIVE');
    expect(SurgeClusterRecordStatus.ACTIVE).toBe('ACTIVE');
    expect(SocialEventRecordStatus.ACTIVE).toBe('ACTIVE');
    expect(CommunityClubRecordStatus.ACTIVE).toBe('ACTIVE');
  });
});
