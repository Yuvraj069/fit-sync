import { Pressable, StyleSheet, View } from 'react-native';

import { colors, layout, radius, spacing } from '@/constants';

type ToggleProps = {
  accessibilityLabel: string;
  onChange: (checked: boolean) => void;
  value: boolean;
};

export function Toggle({ accessibilityLabel, onChange, value }: ToggleProps): React.ReactElement {
  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
      onPress={() => onChange(!value)}
      style={[styles.track, value && styles.trackActive]}
    >
      <View style={[styles.thumb, value && styles.thumbActive]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  thumb: {
    backgroundColor: colors.white,
    borderRadius: radius.full,
    height: spacing.lg,
    margin: spacing.xxs,
    width: spacing.lg,
  },
  thumbActive: {
    alignSelf: 'flex-end',
  },
  track: {
    backgroundColor: colors.softGray,
    borderRadius: radius.full,
    justifyContent: 'center',
    minHeight: layout.minTouchTarget,
    paddingHorizontal: spacing.xxs,
    width: spacing.huge,
  },
  trackActive: {
    backgroundColor: colors.sage,
  },
});
