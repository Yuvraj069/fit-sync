import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/constants';

import { Typography } from './typography';

import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  tone?: 'neutral' | 'sage';
};

export function Badge({ children, tone = 'sage' }: BadgeProps): React.ReactElement {
  return (
    <View style={[styles.badge, tone === 'neutral' ? styles.neutral : styles.sage]}>
      <Typography color={tone === 'neutral' ? 'secondary' : 'accent'} variant="caption">
        {children}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
  },
  neutral: {
    backgroundColor: colors.softGray,
  },
  sage: {
    backgroundColor: colors.lightSage,
  },
});
