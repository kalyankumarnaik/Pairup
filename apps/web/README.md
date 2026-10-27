# PairUp — Frontend Web Application (Member 2)

Welcome to the **PairUp** user-facing frontend application built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start Guide (VS Code)

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+ (Node v20.x or higher recommended)
- **npm**: v9+ / v10+ / v11+

### 2. Open Project in VS Code
1. Extract this zip archive.
2. Open the folder in **Visual Studio Code** (`File` > `Open Folder...`).
3. Open a terminal (`Ctrl + ~` or ``Ctrl + ` ``).

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

---

## 🧪 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Start Dev Server** | `npm run dev` | Starts local Next.js dev server on `http://localhost:3001` |
| **Run Unit Tests** | `npm run test` | Executes Vitest + React Testing Library test suite |
| **Run E2E Tests** | `npm run test:e2e` | Runs Playwright integration tests |
| **Production Build**| `npm run build` | Compiles and optimizes for production (Static HTML + Chunks) |
| **Start Production**| `npm run start` | Serves compiled production build on port 3001 |

---

## 🌟 Application Features & Routes

- **Landing Page** (`/`): High-conversion hero, live AI compatibility preview, statistics & safety badges.
- **Authentication**:
  - Register (`/auth/register`): 18+ verified registration flow with live password meter.
  - Login (`/auth/login`): Clean credential login with **Fast Review Demo Accounts** (1-click autofill for Member & Admin).
  - Email Verification (`/auth/verify-email`): Token validation screen.
  - Password Recovery (`/auth/forgot-password`).
- **Onboarding Wizard** (`/onboarding`): 6-step progress wizard (Identity, Photo Gallery, Prompts, Interests, Preferences, Review).
- **Discovery & Swiping** (`/discovery`):
  - Interactive swipe cards with tactile Like/Pass/Superlike controls and keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `ArrowUp`, `Space`).
  - Compatibility breakdown drawer (neural vector match reasons).
  - **Real-Time Match Modal**: Confetti celebration, mutual avatar reveal, and instant icebreaker prompt.
  - Preference filters popover (Age, Distance, Intent).
- **User Dashboard** (`/dashboard`): Profile completion meter, mutual matches strip, recent chats, daily curated picks.
- **Profile Editor** (`/profiles/me`): Drag/reorder photos, set primary avatar, edit bio, prompts, and passion tags.
- **Real-Time Chat** (`/messages`): Split-pane messaging, typing indicators, read receipts, emoji reactions, instant block & report actions.
- **AI Date Concierge** (`/date-planner`): Multi-vibe, multi-budget date itinerary generator with suggested venue and icebreaker topics.
- **Events & Mixers** (`/events`): Singles mixers, speed dating, and virtual events with RSVP status.
- **Premium Plans** (`/premium`): Free, Gold, and VIP Platinum comparisons with checkout initiation.
- **Settings & Privacy** (`/settings`): Account details, incognito mode, distance/age visibility toggles, notification channels, blocked accounts.
- **Admin Portal** (`/admin`): Role-protected AI moderation queue (dismiss/warn/suspend), user directory, and telemetry.
- **Trust & Safety Center** (`/safety`), Community Guidelines (`/guidelines`), Terms (`/terms`), and Help Desk (`/help`).

---

## 🔌 API & Backend Configuration

The frontend connects to Member 1's NestJS backend and Member 3's Socket.IO gateway. Configuration is stored in `.env.local`:

```env
# Backend REST API (Member 1)
NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1

# Real-time WebSocket Gateway (Member 3)
NEXT_PUBLIC_WS_URL=http://localhost:3000/chat

# Enable mock data fallback if backend is offline
NEXT_PUBLIC_ENABLE_MOCK_FALLBACK=true
```

When `NEXT_PUBLIC_ENABLE_MOCK_FALLBACK=true`, all screens, discovery decks, chats, and onboarding workflows run seamlessly even without a running backend server!
