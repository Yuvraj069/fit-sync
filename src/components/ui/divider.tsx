import { StyleSheet, View } from 'react-native';

import { colors } from '@/constants';

export function Divider(): React.ReactElement {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: colors.softGray,
    height: 1,
    width: '100%',
  },
});
