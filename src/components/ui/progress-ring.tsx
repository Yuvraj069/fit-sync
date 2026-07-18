import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/constants';

import { Typography } from './typography';

type ProgressRingProps = {
  label: string;
  progress: number;
};

function toPercentage(progress: number): number {
  return Math.round(Math.min(Math.max(progress, 0), 1) * 100);
}

export function ProgressRing({ label, progress }: ProgressRingProps): React.ReactElement {
  const percentage = toPercentage(progress);

  return (
    <View
      accessibilityLabel={`${label}: ${percentage}%`}
      accessibilityRole="progressbar"
      style={styles.container}
    >
      <View style={styles.ring}>
        <Typography variant="title">{percentage}%</Typography>
      </View>
      <Typography color="secondary" style={styles.label} variant="caption">
        {label}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing.xs,
  },
  label: {
    textAlign: 'center',
  },
  ring: {
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    borderColor: colors.sage,
    borderRadius: radius.full,
    borderWidth: spacing.xxs,
    height: spacing.massive,
    justifyContent: 'center',
    width: spacing.massive,
  },
});
