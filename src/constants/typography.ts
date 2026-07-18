import { colors } from './colors';

import type { TextStyle } from 'react-native';


export const typeScale = {
  display: {
    fontSize: 36,
    lineHeight: 43,
    fontWeight: '600',
  },
  heading: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
} as const satisfies Record<string, TextStyle>;

export const typographyColors = {
  primary: colors.charcoal,
  secondary: colors.mutedText,
  accent: colors.sage,
  inverse: colors.white,
  danger: colors.danger,
} as const;

export type TypeVariant = keyof typeof typeScale;
export type TypographyColor = keyof typeof typographyColors;
