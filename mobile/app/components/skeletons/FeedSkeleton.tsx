import { ScrollView, View } from "react-native";
import { ScreenContainer } from "../ScreenContainer";
import { AnimatedScreen } from "../AnimatedScreen";
import { Skeleton } from "../Skeleton";
import { useTheme } from "@/hooks/useTheme";

export function FeedSkeleton() {
  const theme = useTheme();

  return (
    <ScreenContainer>
      <AnimatedScreen style={{ flex: 1, paddingHorizontal: 24, paddingTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Skeleton width="60%" height={40} radius={18} style={{ marginBottom: 10 }} />
          <Skeleton width="45%" height={18} radius={12} style={{ marginBottom: 24 }} />

          <View style={{ borderRadius: 32, padding: 22, marginBottom: 22, borderWidth: 1, borderColor: theme.border, backgroundColor: theme.card }}>
            <Skeleton width="80%" height={22} radius={18} style={{ marginBottom: 12 }} />
            <Skeleton width="100%" height={16} radius={14} style={{ marginBottom: 16 }} />
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginLeft: -6, marginTop: -8 }}>
              {[1, 2, 3].map((item) => (
                <Skeleton key={item} width={90} height={34} radius={999} style={{ marginLeft: 6, marginTop: 8 }} />
              ))}
            </View>
          </View>

          {[1, 2, 3].map((item) => (
            <View key={item} style={{ borderRadius: 28, padding: 20, marginBottom: 14, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.border }}>
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
                <Skeleton width={48} height={48} radius={24} style={{ marginRight: 14 }} />
                <View style={{ flex: 1 }}>
                  <Skeleton width="70%" height={18} radius={14} style={{ marginBottom: 8 }} />
                  <Skeleton width="50%" height={14} radius={12} />
                </View>
              </View>
              <Skeleton width="100%" height={18} radius={14} style={{ marginBottom: 10 }} />
              <Skeleton width="55%" height={18} radius={14} style={{ marginBottom: 10 }} />
              <Skeleton width="30%" height={18} radius={14} />
            </View>
          ))}
        </ScrollView>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
