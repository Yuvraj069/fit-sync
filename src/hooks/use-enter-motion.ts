import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { motion } from '@/constants';

export function useEnterMotion(delay = 0): {
  animatedStyle: ReturnType<typeof useAnimatedStyle>;
  enter: () => void;
} {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue<number>(motion.slideDistance);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return {
    animatedStyle,
    enter: () => {
      opacity.value = withTiming(1, { duration: motion.gentle });
      translateY.value = withTiming(0, { duration: motion.gentle + delay });
    },
  };
}
