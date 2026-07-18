# FitSync Architecture

- `app/` contains Expo Router routes only. Routes stay thin and delegate UI and
  business logic to `src/features/`.
- `src/components/` contains shared, generic design-system primitives.
- `src/features/` contains feature modules: `auth`, `onboarding`, `workouts`,
  `nutrition`, `dashboard`, `brief`, `wearables`, and `settings`. Each feature
  owns its components, hooks, and `api.ts`.
- `src/lib/` is for cross-cutting utilities, including the future Supabase client.
- `src/store/`, `src/types/`, `src/hooks/`, and `src/constants/` hold shared code.

Use strict TypeScript. Never use `any`. Do not hard-code colors, spacing, or type
sizes in components. Supabase calls must live in a feature's `api.ts`; every table
with `user_id` requires Row Level Security.
