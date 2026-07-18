import { StyleSheet, TextInput, View } from 'react-native';

import { colors, radius, spacing } from '@/constants';

import { Typography } from './typography';

import type { TextInputProps } from 'react-native';

type TextFieldProps = TextInputProps & {
  error?: string;
  label: string;
};

export function TextField({
  error,
  label,
  style,
  ...inputProps
}: TextFieldProps): React.ReactElement {
  return (
    <View style={styles.container}>
      <Typography style={styles.label} variant="label">
        {label}
      </Typography>
      <TextInput
        {...inputProps}
        accessibilityLabel={label}
        placeholderTextColor={colors.mutedText}
        style={[styles.input, Boolean(error) && styles.inputError, style]}
      />
      {error ? (
        <Typography color="danger" style={styles.error} variant="caption">
          {error}
        </Typography>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  error: {
    paddingHorizontal: spacing.xs,
  },
  input: {
    backgroundColor: colors.white,
    borderColor: colors.softGray,
    borderRadius: radius.md,
    borderWidth: 1,
    color: colors.charcoal,
    minHeight: 48,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  inputError: {
    borderColor: colors.danger,
  },
  label: {
    paddingHorizontal: spacing.xs,
  },
});
