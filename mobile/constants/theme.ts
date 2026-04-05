import { colors } from './colors';
import { spacing } from './spacing';
import { radius } from './radius';

export const getTheme = (mode: keyof typeof colors = 'dark') => {
  return {
    colors: colors[mode],
    primary: colors[mode].primary,
    secondary: colors[mode].secondary,
    spacing: spacing,
    radius: radius,
  };
};