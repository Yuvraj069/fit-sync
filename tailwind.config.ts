import { colors, radius, spacing } from './src/constants';

import type { Config } from 'tailwindcss';


const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        sage: colors.sage,
        'light-sage': colors.lightSage,
        'off-white': colors.offWhite,
        white: colors.white,
        'soft-gray': colors.softGray,
        charcoal: colors.charcoal,
      },
      borderRadius: Object.fromEntries(Object.entries(radius).map(([k, v]) => [k, `${v}px`])),
      spacing: Object.fromEntries(Object.entries(spacing).map(([k, v]) => [k, `${v}px`])),
    },
  },
  plugins: [],
};

export default config;
