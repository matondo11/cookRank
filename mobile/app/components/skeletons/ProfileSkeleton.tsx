import { View } from "react-native";
import { ScreenContainer } from "../ScreenContainer";
import { AnimatedScreen } from "../AnimatedScreen";
import { Skeleton } from "../Skeleton";

export function ProfileSkeleton() {
  return (
    <ScreenContainer>
      <AnimatedScreen style={{ flex: 1, paddingHorizontal: 24, paddingTop: 22 }}>
        <View style={{ marginBottom: 18 }}>
          <Skeleton width="55%" height={40} radius={18} style={{ marginBottom: 10 }} />
          <Skeleton width="45%" height={18} radius={12} />
        </View>

        <View style={{ borderRadius: 32, padding: 24, borderWidth: 1, borderColor: "rgba(255,255,255,0.16)", backgroundColor: "rgba(255,255,255,0.04)", marginBottom: 24 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
            <Skeleton width={72} height={72} radius={36} style={{ marginRight: 16 }} />
            <View style={{ flex: 1 }}>
              <Skeleton width="70%" height={18} radius={14} style={{ marginBottom: 10 }} />
              <Skeleton width="45%" height={14} radius={12} />
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Skeleton width="30%" height={16} radius={12} />
            <Skeleton width="30%" height={16} radius={12} />
            <Skeleton width="30%" height={16} radius={12} />
          </View>
        </View>

        <Skeleton width="100%" height={50} radius={24} style={{ marginBottom: 14 }} />
        <Skeleton width="100%" height={50} radius={24} />
      </AnimatedScreen>
    </ScreenContainer>
  );
}
