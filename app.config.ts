import type { ConfigContext, ExpoConfig } from 'expo/config';

type PublicEnvironmentVariable = 'EXPO_PUBLIC_SUPABASE_URL' | 'EXPO_PUBLIC_SUPABASE_ANON_KEY';

function getOptionalEnvironmentValue(name: PublicEnvironmentVariable): string | undefined {
  return process.env[name];
}

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'FitSync',
  slug: 'fitsync',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  scheme: 'fitsync',
  plugins: ['expo-router', 'expo-dev-client'],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    supabaseUrl: getOptionalEnvironmentValue('EXPO_PUBLIC_SUPABASE_URL'),
    supabaseAnonKey: getOptionalEnvironmentValue('EXPO_PUBLIC_SUPABASE_ANON_KEY'),
  },
});
