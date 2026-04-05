import { ReactNode } from "react";
import { type StyleProp, type ViewStyle } from "react-native";
import { MotiView } from "moti";

interface AnimatedScreenProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  delay?: number;
}

export function AnimatedScreen({ children, style, delay = 80 }: AnimatedScreenProps) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 24 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 420, delay }}
      style={style}
    >
      {children}
    </MotiView>
  );
}
