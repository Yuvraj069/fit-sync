import { Text } from 'react-native';

import { typeScale, typographyColors, type TypographyColor, type TypeVariant } from '@/constants';

import type { ReactNode } from 'react';
import type { StyleProp, TextStyle } from 'react-native';


type TypographyProps = {
  children: ReactNode;
  color?: TypographyColor;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  variant?: TypeVariant;
};

export function Typography({
  children,
  color = 'primary',
  numberOfLines,
  style,
  variant = 'body',
}: TypographyProps): React.ReactElement {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[typeScale[variant], { color: typographyColors[color] }, style]}
    >
      {children}
    </Text>
  );
}
