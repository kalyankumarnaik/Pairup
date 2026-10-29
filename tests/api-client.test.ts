import { describe, it, expect } from 'vitest';
import { PairUpApiClient } from '@pairup/api-client';

describe('Root Test Suite: PairUp API Client SDK', () => {
  it('instantiates client with custom configuration and base url', () => {
    let mockToken = 'mock_jwt_token';
    const client = new PairUpApiClient({
      baseUrl: 'http://localhost:4000',
      getAccessToken: () => mockToken,
      setAccessToken: (t) => { mockToken = t || ''; }
    });

    expect(client).toBeDefined();
    expect(typeof client.login).toBe('function');
    expect(typeof client.signup).toBe('function');
    expect(typeof client.getDiscoveryFeed).toBe('function');
    expect(typeof client.swipe).toBe('function');
    expect(typeof client.updateLocation).toBe('function');
    expect(typeof client.getMyProfile).toBe('function');
  });
});
