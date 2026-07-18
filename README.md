# FitSync

FitSync is a calm, premium cross-platform wellness companion for iOS and Android.
This repository currently contains **Phase 1: project foundation and tooling**.

## Prerequisites

- Node.js 20 or later
- npm 10 or later
- An [Expo account](https://expo.dev) for development builds
- Android Studio (Android) and/or Xcode (iOS) when creating a custom development build

## Setup

1. Copy the environment template: `cp .env.example .env`.
2. Add the public Supabase project URL and anon key when Supabase is introduced in a later phase.
3. Install dependencies: `npm install`.
4. Create a custom development build with EAS when native capabilities are needed.
5. Start Metro for that development build: `npx expo start --dev-client`.

Expo Go is intentionally not the development target. FitSync will require native
modules for Apple/Google sign-in, HealthKit, and Health Connect in later phases.

## Commands

| Command                | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `npm run start`        | Start Expo for the custom development client |
| `npm run lint`         | Run ESLint with zero warnings allowed        |
| `npm run format`       | Format supported source files with Prettier  |
| `npm run format:check` | Verify formatting without changes            |
| `npm run typecheck`    | Run strict TypeScript checks                 |

## Folder structure

```text
app/                 Expo Router routes only
src/
  components/        Shared generic UI primitives
  constants/         Design tokens
  features/          Feature modules and their API boundaries
  hooks/             Shared hooks
  lib/               Cross-cutting utilities
  store/             Zustand stores
  types/             Shared and generated types
```

No app features, authentication, or Supabase calls are included in this phase.
