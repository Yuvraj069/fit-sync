import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, layout, spacing } from '@/constants';

import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

type ScreenProps = {
  children: ReactNode;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function Screen({ children, scroll = false, style }: ScreenProps): React.ReactElement {
  if (scroll) {
    return (
      <SafeAreaView edges={['top']} style={[styles.safeArea, style]}>
        <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={['top']} style={[styles.safeArea, style]}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingHorizontal: layout.screenHorizontal,
    paddingVertical: spacing.xl,
  },
  safeArea: {
    backgroundColor: colors.offWhite,
    flex: 1,
  },
});
