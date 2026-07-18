import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/constants';

import type { StyleProp, ViewStyle } from 'react-native';

type SkeletonProps = {
  style?: StyleProp<ViewStyle>;
};

export function Skeleton({ style }: SkeletonProps): React.ReactElement {
  return <View accessibilityLabel="Loading content" style={[styles.skeleton, style]} />;
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: colors.lightSage,
    borderRadius: radius.md,
    height: spacing.xl,
    opacity: 0.55,
  },
});
