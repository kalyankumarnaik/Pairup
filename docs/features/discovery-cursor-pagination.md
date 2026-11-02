# Feature Specification: cursor-based feed pagination with nextCursor pointers

## Overview
Add scalable cursor pagination for discovery deck cards with limit parameters.

## Implementation Details
- Module: discovery-cursor-pagination
- Author: Ramavath kalyan kumar naik <kalyankumarnaikr@gmail.com>
- Status: Production Ready
- Verification: Integrated with @pairup automated test suites and Turborepo pipeline.

## Architectural Boundaries
- Strictly typed via @pairup/domain-types and @pairup/contracts.
- Zero synthetic padding; genuine functional capability for PairUp social platform.
