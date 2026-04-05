import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { colors } from "@/constants";
import { AppStateProvider } from "./providers/AppStateProvider";

export default function RootLayout() {
  const scheme = useColorScheme();
  const theme = colors[scheme ?? "light"];

  return (
    <SafeAreaProvider>
      <AppStateProvider>
        <StatusBar style={scheme === "dark" ? "light" : "dark"} />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.background },
            headerTintColor: theme.text,
            contentStyle: { backgroundColor: theme.background },
          }}
        />
      </AppStateProvider>
    </SafeAreaProvider>
  );
}
