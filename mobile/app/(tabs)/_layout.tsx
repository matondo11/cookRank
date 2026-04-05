import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { colors } from "@/constants";

export default function TabLayout() {
  const scheme = useColorScheme();
  const theme = colors[scheme ?? "light"];

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.icon,
        tabBarStyle: {
          backgroundColor: "rgba(30, 30, 30, 0.96)",
          borderTopColor: "transparent",
          height: 72,
          marginHorizontal: 18,
          marginBottom: 16,
          borderRadius: 28,
          position: "absolute",
          left: 12,
          right: 12,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 20,
          shadowOffset: { width: 0, height: 10 },
          elevation: 12,
        },
        tabBarItemStyle: {
          marginTop: 10,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof MaterialIcons.glyphMap = "home";

          if (route.name === "community") {
            iconName = "forum";
          } else if (route.name === "profile") {
            iconName = "person";
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    />
  );
}
