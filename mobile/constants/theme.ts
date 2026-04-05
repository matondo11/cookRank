import { colors } from './colors';
import { spacing } from './spacing';
import { radius } from './radius';

export const getTheme = (mode: keyof typeof colors = 'dark') => {
  return {
    ...colors[mode],
    spacing: spacing,
    radius: radius,
  };
};