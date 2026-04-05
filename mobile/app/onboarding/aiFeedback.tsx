import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { useTheme } from "@/hooks/useTheme";
import { aiFeedbackStyles } from "./aiFeedback.styles";

export default function AiFeedback() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ScreenContainer>
      <AnimatedScreen style={aiFeedbackStyles.container}>
        <View style={aiFeedbackStyles.header}>
          <Text style={[aiFeedbackStyles.title, { color: theme.text }]}>Feedback da IA</Text>
          <Text style={[aiFeedbackStyles.subtitle, { color: theme.subText }]}>Sua experiência é analisada para ajudar a melhorar cada receita.</Text>
        </View>

        <View style={[aiFeedbackStyles.card, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <Text style={[aiFeedbackStyles.cardTitle, { color: theme.primary }]}>Sua última tentativa</Text>
          <Text style={[aiFeedbackStyles.cardText, { color: theme.text }]}>A IA apontou sabor e textura muito próximos ao ideal. Continue usando sugestões para chegar ao nível chef.</Text>
          <View style={aiFeedbackStyles.metricRow}>
            <View style={aiFeedbackStyles.metricBlock}>
              <Text style={[aiFeedbackStyles.metricValue, { color: theme.text }]}>92%</Text>
              <Text style={[aiFeedbackStyles.metricLabel, { color: theme.subText }]}>Precisão</Text>
            </View>
            <View style={aiFeedbackStyles.metricBlock}>
              <Text style={[aiFeedbackStyles.metricValue, { color: theme.text }]}>Excelente</Text>
              <Text style={[aiFeedbackStyles.metricLabel, { color: theme.subText }]}>Textura</Text>
            </View>
          </View>
        </View>

        <Pressable style={[aiFeedbackStyles.primaryButton, { backgroundColor: theme.primary }]} onPress={() => router.push("/auth/login" as const) }>
          <Text style={aiFeedbackStyles.buttonText}>Ir para login</Text>
        </Pressable>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
