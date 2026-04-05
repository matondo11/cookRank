import { ScrollView, View } from "react-native";
import { ScreenContainer } from "../ScreenContainer";
import { AnimatedScreen } from "../AnimatedScreen";
import { Skeleton } from "../Skeleton";
import { useTheme } from "@/hooks/useTheme";

export function NotificationSkeleton() {
  const theme = useTheme();

  return (
    <ScreenContainer>
      <AnimatedScreen style={{ flex: 1, paddingHorizontal: 24, paddingTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Skeleton width="50%" height={40} radius={18} style={{ marginBottom: 10 }} />
          <Skeleton width="35%" height={18} radius={12} style={{ marginBottom: 24 }} />

          {[...Array(4)].map((_, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 24,
                padding: 18,
                marginBottom: 14,
                backgroundColor: theme.card,
                borderWidth: 1,
                borderColor: theme.border,
              }}
            >
              <Skeleton width={44} height={44} radius={22} style={{ marginRight: 14 }} />
              <View style={{ flex: 1 }}>
                <Skeleton width="70%" height={16} radius={12} style={{ marginBottom: 10 }} />
                <Skeleton width="45%" height={14} radius={12} />
              </View>
            </View>
          ))}
        </ScrollView>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
