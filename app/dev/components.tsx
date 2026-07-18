import { Redirect } from 'expo-router';
import { Heart } from 'lucide-react-native';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Divider,
  EmptyState,
  Icon,
  LoadingSpinner,
  ProgressBar,
  ProgressRing,
  Screen,
  Skeleton,
  TextField,
  Toggle,
  Typography,
} from '@/components/ui';
import { colors, spacing } from '@/constants';

export default function ComponentsGalleryRoute(): React.ReactElement {
  const [checked, setChecked] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState('');

  if (!__DEV__) {
    return <Redirect href="/" />;
  }

  return (
    <Screen scroll>
      <View style={styles.content}>
        <View style={styles.section}>
          <Typography variant="display">FitSync UI</Typography>
          <Typography color="secondary">Development component gallery</Typography>
        </View>

        <Card style={styles.section}>
          <Typography variant="title">Typography</Typography>
          <Typography variant="heading">Calm, clear hierarchy</Typography>
          <Typography>Designed for a reassuring daily experience.</Typography>
          <Typography color="secondary" variant="caption">
            Supporting text stays quiet.
          </Typography>
        </Card>

        <View style={styles.section}>
          <Button onPress={() => undefined}>Primary action</Button>
          <Button onPress={() => undefined} variant="secondary">
            Secondary action
          </Button>
          <Button onPress={() => undefined} variant="ghost">
            Ghost action
          </Button>
        </View>

        <Card style={styles.section}>
          <TextField
            label="Example field"
            onChangeText={setValue}
            placeholder="Type something"
            value={value}
          />
          <Checkbox checked={checked} label="I understand the plan" onChange={setChecked} />
          <View style={styles.row}>
            <Typography>Gentle reminders</Typography>
            <Toggle accessibilityLabel="Gentle reminders" onChange={setEnabled} value={enabled} />
          </View>
        </Card>

        <Card style={styles.section}>
          <Typography variant="title">Progress</Typography>
          <ProgressRing label="Daily goal" progress={0.72} />
          <ProgressBar progress={0.72} />
        </Card>

        <Card style={styles.section}>
          <View style={styles.row}>
            <Avatar name="FitSync User" />
            <Badge>In progress</Badge>
          </View>
          <Divider />
          <Skeleton style={styles.skeleton} />
          <LoadingSpinner label="Loading component example" />
        </Card>

        <EmptyState
          actionLabel="Explore"
          description="Every primitive is built to make future screens feel calm and focused."
          icon={<Icon color={colors.sage} icon={Heart} size={spacing.xxl} />}
          onAction={() => undefined}
          title="A clean starting point"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.xl,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    gap: spacing.md,
  },
  skeleton: {
    width: '70%',
  },
});
