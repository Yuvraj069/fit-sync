import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { motion } from '@/constants';

export function usePressFeedback(): {
  animatedStyle: ReturnType<typeof useAnimatedStyle>;
  onPressIn: () => void;
  onPressOut: () => void;
} {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return {
    animatedStyle,
    onPressIn: () => {
      scale.value = withTiming(motion.pressScale, { duration: motion.fast });
    },
    onPressOut: () => {
      scale.value = withTiming(1, { duration: motion.standard });
    },
  };
}
