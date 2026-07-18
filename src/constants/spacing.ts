export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  huge: 48,
  massive: 64,
} as const;

export const layout = {
  screenHorizontal: spacing.xl,
  contentMaxWidth: 720,
  minTouchTarget: 44,
} as const;
