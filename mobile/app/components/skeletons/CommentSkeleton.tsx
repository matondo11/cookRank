import { ScrollView, View } from "react-native";
import { ScreenContainer } from "../ScreenContainer";
import { AnimatedScreen } from "../AnimatedScreen";
import { Skeleton } from "../Skeleton";
import { useTheme } from "@/hooks/useTheme";

export function CommentSkeleton() {
  const theme = useTheme();

  return (
    <ScreenContainer>
      <AnimatedScreen style={{ flex: 1, paddingHorizontal: 24, paddingTop: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Skeleton width="50%" height={40} radius={18} style={{ marginBottom: 10 }} />
          <Skeleton width="40%" height={18} radius={12} style={{ marginBottom: 24 }} />

          {[...Array(5)].map((_, index) => (
            <View
              key={index}
              style={{
                borderRadius: 28,
                padding: 22,
                marginBottom: 14,
                backgroundColor: theme.card,
                borderWidth: 1,
                borderColor: theme.border,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 14 }}>
                <Skeleton width={42} height={42} radius={21} style={{ marginRight: 14 }} />
                <View style={{ flex: 1 }}>
                  <Skeleton width="45%" height={16} radius={12} style={{ marginBottom: 8 }} />
                  <Skeleton width="30%" height={14} radius={12} />
                </View>
              </View>
              <Skeleton width="100%" height={16} radius={12} style={{ marginBottom: 10 }} />
              <Skeleton width="90%" height={16} radius={12} style={{ marginBottom: 10 }} />
              <Skeleton width="60%" height={16} radius={12} />
            </View>
          ))}
        </ScrollView>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
