/**
 * Below are the fonts that are used in the app. The fonts are defined for different platforms.
 */

import { Platform } from "react-native";

export const Fonts = Platform.select({
  ios: {
    sans: 'System',
    serif: 'Georgia',
    rounded: 'System',
    mono: 'Courier',
  },
  android: {
    sans: 'sans-serif',
    serif: 'serif',
    rounded: 'sans-serif',
    mono: 'monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, Segoe UI, Roboto",
    serif: "Georgia, serif",
    rounded: "system-ui",
    mono: "monospace",
  },
});

export const FONT_SIZES = {
  title: 28,
  subtitle: 20,
  body: 16,
  small: 14,
  label: 12,
};