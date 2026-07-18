import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/constants';

import type { DimensionValue, StyleProp, ViewStyle } from 'react-native';

type ProgressBarProps = {
  progress: number;
  style?: StyleProp<ViewStyle>;
};

function clampProgress(progress: number): number {
  return Math.min(Math.max(progress, 0), 1);
}

export function ProgressBar({ progress, style }: ProgressBarProps): React.ReactElement {
  const width = `${clampProgress(progress) * 100}%` as DimensionValue;

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ now: clampProgress(progress) * 100 }}
      style={[styles.track, style]}
    >
      <View style={[styles.fill, { width }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    backgroundColor: colors.sage,
    borderRadius: radius.full,
    height: '100%',
  },
  track: {
    backgroundColor: colors.lightSage,
    borderRadius: radius.full,
    height: spacing.xs,
    overflow: 'hidden',
    width: '100%',
  },
});
