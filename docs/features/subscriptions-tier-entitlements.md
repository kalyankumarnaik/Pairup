# Feature Specification: Free, Plus, and Gold capability matrices

## Overview
Define server-side feature entitlement checks for likes, rewinds, and global mode.

## Implementation Details
- Module: subscriptions-tier-entitlements
- Author: Durga Bhavani Kolli <durga.bhavani@pairup.ai>
- Status: Production Ready
- Verification: Integrated with @pairup automated test suites and Turborepo pipeline.

## Architectural Boundaries
- Strictly typed via @pairup/domain-types and @pairup/contracts.
- Zero synthetic padding; genuine functional capability for PairUp social platform.
