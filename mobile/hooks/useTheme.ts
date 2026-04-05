import { useColorScheme } from 'react-native';
import { colors } from '../constants';

export const useTheme = () => {
  const scheme = useColorScheme();
  return colors[scheme ?? 'light'];
};