import { Image, Pressable, Text, View } from "react-native";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { useTheme } from "@/hooks/useTheme";
import { splashStyles } from "./splash.styles";
import { useSplash } from "./splash.hook";

const splashIcon = require("../assets/images/splash-icon.png");

export default function Splash() {
  const theme = useTheme();
  const { handleGetStarted } = useSplash();

  return (
    <ScreenContainer>
      <AnimatedScreen style={splashStyles.wrapper}>
        <View style={splashStyles.glowWrap}>
          <View style={[splashStyles.glow, { backgroundColor: theme.primary }]} />
        </View>

        <View style={[splashStyles.card, { backgroundColor: theme.card }]}> 
          <View style={[splashStyles.badge, { backgroundColor: theme.secondary }]}> 
            <Text style={splashStyles.badgeText}> AI RANKED</Text>
          </View>

          <View style={[splashStyles.iconWrapper, { backgroundColor: theme.background }]}> 
            <Image source={splashIcon} style={[splashStyles.icon, { tintColor: theme.primary }]} resizeMode="contain" />
          </View>

          <Text style={[splashStyles.title, { color: theme.tertiary }]}>CookRank</Text>
          <Text style={[splashStyles.subtitle, { color: theme.subText }]}>THE DIGITAL GASTRONOME</Text>

          <Text style={[splashStyles.quote, { color: theme.subText }]}>Where artificial intelligence meets the art of the table.</Text>

          <View style={splashStyles.progressRow}>
            <View style={[splashStyles.progressFill, { backgroundColor: theme.primary }]} />
          </View>

          <Pressable style={splashStyles.ctaRow} onPress={handleGetStarted}>
            <Text style={[splashStyles.ctaText, { color: theme.primary }]}>Personalizing your menu </Text>
          </Pressable>

          <View style={[splashStyles.footer, { backgroundColor: theme.background, borderColor: theme.border }]}> 
            <Image source={require("../assets/images/award-icon.png")} style={[splashStyles.footerIcon, { tintColor: theme.primary }]} resizeMode="contain" />
            <Text style={[splashStyles.footerText, { color: theme.subText }]}>Trusted by 50k+ culinary experts</Text>
          </View>
        </View>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
