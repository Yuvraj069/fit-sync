import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/constants';

import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';


type CardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Card({ children, style }: CardProps): React.ReactElement {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderColor: colors.softGray,
    borderRadius: radius.xl,
    borderWidth: 1,
    padding: spacing.xl,
  },
});
