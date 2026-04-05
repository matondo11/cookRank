import { ScrollView, View } from "react-native";
import { ScreenContainer } from "../ScreenContainer";
import { AnimatedScreen } from "../AnimatedScreen";
import { Skeleton } from "../Skeleton";
import { useTheme } from "@/hooks/useTheme";

export function RecipeSkeleton() {
  const theme = useTheme();

  return (
    <ScreenContainer>
      <AnimatedScreen style={{ flex: 1, paddingHorizontal: 24, paddingTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: 18 }}>
            <Skeleton width="55%" height={40} radius={18} style={{ marginBottom: 10 }} />
            <Skeleton width="45%" height={18} radius={12} />
          </View>

          <View style={{ borderRadius: 32, padding: 22, marginBottom: 24, borderWidth: 1, borderColor: theme.border, backgroundColor: theme.card }}>
            <Skeleton width="100%" height={180} radius={24} style={{ marginBottom: 18 }} />
            <Skeleton width="65%" height={24} radius={18} style={{ marginBottom: 10 }} />
            <Skeleton width="45%" height={16} radius={14} />
          </View>

          <View style={{ marginBottom: 26 }}>
            <Skeleton width="40%" height={20} radius={14} style={{ marginBottom: 12 }} />
            {[...Array(5)].map((_, index) => (
              <Skeleton key={index} width="100%" height={16} radius={12} style={{ marginBottom: 10 }} />
            ))}
          </View>

          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Skeleton width="48%" height={50} radius={22} style={{ marginRight: 12 }} />
            <Skeleton width="48%" height={50} radius={22} />
          </View>
        </ScrollView>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
