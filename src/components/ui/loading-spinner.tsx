import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { colors, spacing } from '@/constants';

type LoadingSpinnerProps = {
  label?: string;
};

export function LoadingSpinner({ label = 'Loading' }: LoadingSpinnerProps): React.ReactElement {
  return (
    <View accessibilityLabel={label} accessibilityRole="progressbar" style={styles.container}>
      <ActivityIndicator color={colors.sage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
});
