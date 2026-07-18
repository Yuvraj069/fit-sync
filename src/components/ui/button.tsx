import { Pressable, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { colors, layout, radius, spacing } from '@/constants';
import { usePressFeedback } from '@/hooks/use-press-feedback';

import { Typography } from './typography';

import type { ReactNode } from 'react';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = Omit<PressableProps, 'children' | 'style'> & {
  children: ReactNode;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, ViewStyle> = {
  primary: { backgroundColor: colors.sage },
  secondary: { backgroundColor: colors.white, borderColor: colors.softGray, borderWidth: 1 },
  ghost: { backgroundColor: colors.transparent },
};

const labelColors: Record<ButtonVariant, 'inverse' | 'primary' | 'accent'> = {
  primary: 'inverse',
  secondary: 'primary',
  ghost: 'accent',
};

export function Button({
  children,
  disabled,
  fullWidth = true,
  onPressIn,
  onPressOut,
  style,
  variant = 'primary',
  ...pressableProps
}: ButtonProps): React.ReactElement {
  const feedback = usePressFeedback();

  return (
    <Animated.View style={[fullWidth && styles.fullWidth, feedback.animatedStyle as StyleProp<ViewStyle>]}>
      <Pressable
        {...pressableProps}
        accessibilityRole="button"
        disabled={disabled}
        onPressIn={(event) => {
          feedback.onPressIn();
          onPressIn?.(event);
        }}
        onPressOut={(event) => {
          feedback.onPressOut();
          onPressOut?.(event);
        }}
        style={[styles.base, variantStyles[variant], disabled && styles.disabled, style]}
      >
        <Typography color={labelColors[variant]} style={styles.label} variant="label">
          {children}
        </Typography>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: radius.lg,
    justifyContent: 'center',
    minHeight: layout.minTouchTarget,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  disabled: {
    opacity: 0.5,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  label: {
    textAlign: 'center',
  },
});
