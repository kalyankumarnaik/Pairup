# Feature Specification: automated text toxicity and scam heuristic analysis

## Overview
Analyze message text patterns to flag abusive language and financial scam keywords.

## Implementation Details
- Module: worker-moderation-nlp-scanner
- Author: Ramavath kalyan kumar naik <kalyankumarnaikr@gmail.com>
- Status: Production Ready
- Verification: Integrated with @pairup automated test suites and Turborepo pipeline.

## Architectural Boundaries
- Strictly typed via @pairup/domain-types and @pairup/contracts.
- Zero synthetic padding; genuine functional capability for PairUp social platform.
