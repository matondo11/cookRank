
/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */


const tintColorLight = '#FF6B35';
const tintColorDark = '#FF6B35';

export const colors = {
  light: {
    text: '#1A1A1A',
    background: '#FAFAFA',
    card: '#FFFFFF',

    primary: '#FF6B35',
    secondary: '#E84A55',
    tertiary: '#2D3436',

    tint: tintColorLight,

    icon: '#666666',
    tabIconDefault: '#999999',
    tabIconSelected: '#FF6B35',

    border: '#E5E5E5',
    skeleton: '#E1E9EE',

    subText: '#666666',
    surface: '#FFFFFF',
    error: '#FF4444',
    success: '#4CAF50',
    warning: '#FF9800',
    info: '#2196F3',
  },

  dark: {
    text: '#ECEDEE',
    background: '#121212',
    card: '#1E1E1E',

    primary: '#FF6B35',
    secondary: '#E84A55',
    tertiary: '#2D3436',

    tint: tintColorDark,

    icon: '#9BA1A6',
    tabIconDefault: '#6B7280',
    tabIconSelected: '#FF6B35',

    border: '#2A2A2A',
    skeleton: '#2A2A2A',

    subText: '#B0B0B0',
    surface: '#1E1E1E',
    error: '#FF4444',
    success: '#4CAF50',
    warning: '#FF9800',
    info: '#2196F3',
  },
};

export const StateColors = {
  success: '#22C55E',
  error: '#EF4444',
  warning: '#F59E0B',
};