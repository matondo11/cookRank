import { StyleSheet, type StyleProp, type ViewStyle } from "react-native";
import { MotiView } from "moti";
import { useTheme } from "@/hooks/useTheme";

interface SkeletonProps {
  width?: string | number;
  height?: number;
  radius?: number;
  style?: StyleProp<ViewStyle>;
}

export function Skeleton({
  width = "100%",
  height = 18,
  radius = 14,
  style,
}: SkeletonProps) {
  const theme = useTheme();

  return (
    <MotiView
      from={{ opacity: 0.4, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "timing", duration: 400 }}
      style={[styles.base, { width, height, borderRadius: radius, backgroundColor: theme.skeleton }, style]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    marginBottom: 12,
    overflow: "hidden",
  },
});
