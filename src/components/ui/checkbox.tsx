import { Check } from 'lucide-react-native';
import { Pressable, StyleSheet, View } from 'react-native';

import { colors, layout, radius, spacing } from '@/constants';

import { Icon } from './icon';
import { Typography } from './typography';

type CheckboxProps = {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

export function Checkbox({ checked, label, onChange }: CheckboxProps): React.ReactElement {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={label}
      onPress={() => onChange(!checked)}
      style={styles.pressable}
    >
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked ? <Icon color={colors.white} icon={Check} size={spacing.md} /> : null}
      </View>
      <Typography style={styles.label}>{label}</Typography>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    borderColor: colors.softGray,
    borderRadius: radius.sm,
    borderWidth: 1,
    height: spacing.xl,
    justifyContent: 'center',
    width: spacing.xl,
  },
  boxChecked: {
    backgroundColor: colors.sage,
    borderColor: colors.sage,
  },
  label: {
    flex: 1,
  },
  pressable: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    minHeight: layout.minTouchTarget,
  },
});
