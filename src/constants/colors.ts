export const colors = {
  sage: '#7A9E7E',
  lightSage: '#B9CCB8',
  offWhite: '#FAF9F6',
  white: '#FFFFFF',
  softGray: '#E5E7EB',
  charcoal: '#1F1F1F',
  mutedText: '#6B7280',
  success: '#4C8C65',
  warning: '#B58A3B',
  danger: '#B85C5C',
  overlay: 'rgba(31, 31, 31, 0.08)',
  transparent: 'transparent',
} as const;

export type ColorToken = keyof typeof colors;
