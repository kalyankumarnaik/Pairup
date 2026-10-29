# PairUp — Full-Stack Dating, Friendship & Social Discovery Platform

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://pairup.internal/ci)
[![Tests](https://img.shields.io/badge/tests-63%20passed-success.svg)](https://pairup.internal/tests)
[![License](https://img.shields.io/badge/license-Proprietary-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6.svg)](https://www.typescriptlang.org/)

**PairUp** is a production-grade, privacy-first social discovery platform combining real-time swipe matching, location-based activity surge detection, interactive audio rooms, WebRTC video calling, in-person date safety guards, and DPDP/GDPR-compliant security controls.

---

## Architecture Overview

PairUp is architected as a high-performance TypeScript monorepo powered by **Turborepo** and **pnpm**:

- **`apps/api`**: NestJS backend providing RESTful APIs, WebSocket gateways, JWT auth with refresh rotation, and safety watchdog pipelines.
- **`apps/web`**: React 18, Vite, and Tailwind CSS responsive web portal for swiping, messaging, safety monitoring, onboarding, and admin moderation.
- **`apps/mobile`**: React Native & Expo mobile application targeting iOS and Android.
- **`apps/worker`**: Background queue consumer processing asynchronous moderation, safety check-in escalations, push notifications, and surge recalculations.
- **`packages/*`**: Shared domain types, contracts, client SDKs, validation schemas, design tokens, and testing utilities.

---

## Dependencies

Before running or building PairUp, ensure the following tools and dependencies are installed:

- **Node.js**: `v20.0.0` or higher (Recommended: `v22.x` or `v24.x`)
- **pnpm**: `v9.x` or `v10.x` (`npm install -g pnpm`)
- **Docker & Docker Compose**: For local PostgreSQL (PostGIS) and Redis services
- **PostgreSQL**: `v15+` with PostGIS extension (optional if using Docker)
- **Redis**: `v7+` for caching, rate limiting, and queues (optional if using Docker)
- **Git**: `v2.40+`

---

## Installation

### 1. Clone Repository & Install Packages

Clone the repository and install all monorepo workspace dependencies:

```bash
git clone https://github.com/pairup/pairup.git
cd PairUp
pnpm install
```

*(Alternatively, you may run `npm install` across workspaces).*

### 2. Configure Environment Variables

Copy the example environment configuration into the active local environments:

```bash
cp example.env .env
cp example.env apps/api/.env
cp example.env apps/web/.env
```

Review `.env` to configure your database connection string, JWT secrets, and port allocations:

```env
PORT=4000
NODE_ENV=development
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/pairup?schema=public
REDIS_URL=redis://localhost:6379
JWT_ACCESS_SECRET=your_jwt_access_secret_development_key
JWT_REFRESH_SECRET=your_jwt_refresh_secret_development_key
VITE_API_URL=http://localhost:4000
```

### 3. Start Database & Infrastructure Services

Start PostgreSQL and Redis backing containers with Docker Compose:

```bash
docker compose up -d
```

Initialize database schemas and seed default profiles:

```bash
pnpm db:generate
pnpm db:push
pnpm db:seed
```

---

## Build

Compile and build all packages and applications across the monorepo:

### Monorepo Build via Turborepo

```bash
pnpm build
```

*(This triggers `turbo run build`, compiling `@pairup/contracts`, `@pairup/domain-types`, `@pairup/api-client`, `@pairup/validation`, `@pairup/api`, and `@pairup/web`).*

### Individual Package Builds

```bash
# Build the NestJS backend API
pnpm --filter @pairup/api build

# Build the Vite React frontend
pnpm --filter @pairup/web build

# Build shared contracts and domain types
pnpm --filter @pairup/contracts build
pnpm --filter @pairup/domain-types build
```

### Containerized Docker Build

Build production-ready Docker containers for deployment:

```bash
# Build backend container
docker build -t pairup-api -f Dockerfile .

# Build web application container
docker build -t pairup-web -f apps/web/Dockerfile .
```

---

## Run

### Run Local Development Servers

Start all applications simultaneously with hot module reloading (HMR):

```bash
pnpm dev
```

Or run individual services independently:

```bash
# Start backend API (runs at http://localhost:4000)
pnpm dev:api

# Start frontend web app (runs at http://localhost:5173)
pnpm dev:web

# Start asynchronous background worker
pnpm dev:worker
```

### Production Execution

To run the pre-built applications in production mode:

```bash
# Run API in production
pnpm --filter @pairup/api start:prod

# Preview production web build
pnpm --filter @pairup/web preview
```

---

## Testing

PairUp includes an extensive test suite covering unit logic, security rotation, discovery algorithms, and safety workflows:

```bash
# Run all workspace test suites
pnpm test

# Run API unit and integration tests with Vitest
pnpm --filter @pairup/api test

# Run tests in watch mode
pnpm --filter @pairup/api test:watch

# Generate code coverage reports
pnpm --filter @pairup/api test:cov
```

All 63 automated tests verify:
- Multi-device auth session revocation & JWT token rotation
- Mutual matching transaction safety & discovery cursor pagination
- Real-time in-app notification center dispatch
- Date Guard emergency SOS & watchdog overdue escalation
- Due process appeals submission and moderator review

---

## Usage

### 1. Web Portal & Onboarding
- Navigate to `http://localhost:5173` to access the responsive web application.
- Create an account or use instant demo accounts (`ananya.verma@example.com` / `Password123!`).
- Complete the 4-step onboarding wizard at `/onboarding` to configure your profile photos, passions, and relationship intentions.

### 2. Swiping & Matching Deck
- Visit `/discover` to swipe through candidates with privacy-safe approximate distances.
- Inspect the **Compatibility Breakdown** to see shared interests, values alignment, and social vibe summaries.

### 3. Date Guard & Meetup Safety
- Visit `/safety` before an in-person meetup to activate a scheduled check-in timer.
- If a check-in is missed, the background watchdog automatically flags the session as `OVERDUE` and dispatches alerts to designated emergency guardians.

### 4. Interactive API Documentation
- Open `http://localhost:4000/api/docs` in your browser to explore the interactive Swagger/OpenAPI specification.

---

## Security & Compliance

- **DPDP Act (India) & GDPR Ready**: Granular consent switches, location radius masking, session revocation, and personal data archive export.
- **Due Process Appeals**: Suspended or restricted users can file formal appeals with statements of truth, reviewed via the admin moderation queue (`/admin`).
- **Cryptographic Session Control**: Token rotation backed by unique cryptographic nonces (`jti`), preventing token reuse attacks.

---

## License

Proprietary and confidential. All rights reserved.
