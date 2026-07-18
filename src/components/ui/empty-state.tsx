import { StyleSheet, View } from 'react-native';

import { spacing } from '@/constants';

import { Button } from './button';
import { Typography } from './typography';

import type { ReactNode } from 'react';

type EmptyStateProps = {
  actionLabel?: string;
  description: string;
  icon?: ReactNode;
  onAction?: () => void;
  title: string;
};

export function EmptyState({
  actionLabel,
  description,
  icon,
  onAction,
  title,
}: EmptyStateProps): React.ReactElement {
  return (
    <View style={styles.container}>
      {icon}
      <Typography style={styles.title} variant="title">
        {title}
      </Typography>
      <Typography color="secondary" style={styles.description}>
        {description}
      </Typography>
      {actionLabel && onAction ? <Button onPress={onAction}>{actionLabel}</Button> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.xxxl,
  },
  description: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
  },
});
