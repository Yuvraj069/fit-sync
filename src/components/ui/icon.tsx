import { colors } from '@/constants';

import type { LucideIcon } from 'lucide-react-native';


type IconProps = {
  color?: string;
  icon: LucideIcon;
  size?: number;
};

const defaultIconSize = 20;
const defaultStrokeWidth = 1.75;

export function Icon({
  color = colors.charcoal,
  icon: Lucide,
  size = defaultIconSize,
}: IconProps): React.ReactElement {
  return <Lucide color={color} size={size} strokeWidth={defaultStrokeWidth} />;
}
