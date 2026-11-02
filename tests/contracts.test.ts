import { describe, it, expect } from 'vitest';
import {
  API_IAM_PREFIX,
  API_IAM_ROUTES,
  API_DISCOVERY_PREFIX,
  API_DISCOVERY_ROUTES,
  API_CHAT_PREFIX,
  API_CHAT_ROUTES,
  API_SAFETY_PREFIX,
  API_SAFETY_ROUTES
} from '@pairup/contracts';

describe('Root Test Suite: Enterprise Contracts & API Endpoints', () => {
  it('validates Identity & Access Management route registry', () => {
    expect(API_IAM_PREFIX).toBe('/api/v1/identity-access');
    expect(API_IAM_ROUTES.CREATE).toBe('/api/v1/identity-access');
    expect(API_IAM_ROUTES.LIST).toBe('/api/v1/identity-access');
    expect(API_IAM_ROUTES.GET_BY_ID('ent_123')).toBe('/api/v1/identity-access/ent_123');
    expect(API_IAM_ROUTES.UPDATE('ent_123')).toBe('/api/v1/identity-access/ent_123');
    expect(API_IAM_ROUTES.DELETE('ent_123')).toBe('/api/v1/identity-access/ent_123');
  });

  it('validates Discovery & Algorithmic Matching route registry', () => {
    expect(API_DISCOVERY_PREFIX).toBe('/api/v1/discovery-matching');
    expect(API_DISCOVERY_ROUTES.CREATE).toBe('/api/v1/discovery-matching');
    expect(API_DISCOVERY_ROUTES.GET_BY_ID('candidate_456')).toBe('/api/v1/discovery-matching/candidate_456');
  });

  it('validates Chat Messaging route registry', () => {
    expect(API_CHAT_PREFIX).toBe('/api/v1/messaging-engine');
    expect(API_CHAT_ROUTES.CREATE).toBe('/api/v1/messaging-engine');
    expect(API_CHAT_ROUTES.SUB_OPERATION_1('msg_1')).toBe('/api/v1/messaging-engine/msg_1/operation-1');
  });

  it('validates Date Guard & Safety route registry', () => {
    expect(API_SAFETY_PREFIX).toBe('/api/v1/safety-guardian');
    expect(API_SAFETY_ROUTES.METRICS_SUMMARY).toBe('/api/v1/safety-guardian/metrics-summary');
    expect(API_SAFETY_ROUTES.VERIFY_INTEGRITY('guard_1')).toBe('/api/v1/safety-guardian/guard_1/verify');
  });
});
