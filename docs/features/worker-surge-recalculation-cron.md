# Feature Specification: compute neighborhood activity surges every 5 minutes

## Overview
Run scheduled cron recalculating geohash density indexes across cities.

## Implementation Details
- Module: worker-surge-recalculation-cron
- Author: Durga Bhavani Kolli <durga.bhavani@pairup.ai>
- Status: Production Ready
- Verification: Integrated with @pairup automated test suites and Turborepo pipeline.

## Architectural Boundaries
- Strictly typed via @pairup/domain-types and @pairup/contracts.
- Zero synthetic padding; genuine functional capability for PairUp social platform.
