import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/constants';

import { Typography } from './typography';

type AvatarProps = {
  name: string;
  size?: 'small' | 'medium';
};

function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');
}

export function Avatar({ name, size = 'medium' }: AvatarProps): React.ReactElement {
  return (
    <View
      accessibilityLabel={`${name}'s avatar`}
      style={[styles.avatar, size === 'small' ? styles.small : styles.medium]}
    >
      <Typography color="inverse" variant={size === 'small' ? 'caption' : 'label'}>
        {initials(name)}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.sage,
    borderRadius: radius.full,
    justifyContent: 'center',
  },
  medium: {
    height: spacing.xxxl,
    width: spacing.xxxl,
  },
  small: {
    height: spacing.xxl,
    width: spacing.xxl,
  },
});
