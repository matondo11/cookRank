import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { useTheme } from "@/hooks/useTheme";
import { progressionStyles } from "./progression.styles";

const progressItems = [
  { label: "Nível", value: "Chef Iniciante" },
  { label: "Receitas", value: "24 concluídas" },
  { label: "Engajamento", value: "+18% este mês" },
];

export default function Progression() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ScreenContainer>
      <AnimatedScreen style={progressionStyles.container}>
        <View style={progressionStyles.header}>
          <Text style={[progressionStyles.title, { color: theme.text }]}>Seu progresso</Text>
          <Text style={[progressionStyles.subtitle, { color: theme.subText }]}>Monitore suas conquistas enquanto cozinha com inteligência.</Text>
        </View>

        <View style={[progressionStyles.summaryCard, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <Text style={[progressionStyles.summaryTitle, { color: theme.primary }]}>Evolução culinária</Text>
          <Text style={[progressionStyles.summaryDescription, { color: theme.text }]}>Veja como o CookRank transforma seus resultados em aprendizado contínuo.</Text>

          <View style={progressionStyles.metricGrid}>
            {progressItems.map((item) => (
              <View key={item.label} style={[progressionStyles.metricItem, { backgroundColor: theme.background }]}> 
                <Text style={[progressionStyles.metricLabel, { color: theme.subText }]}>{item.label}</Text>
                <Text style={[progressionStyles.metricValue, { color: theme.text }]}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>

        <Pressable style={[progressionStyles.primaryButton, { backgroundColor: theme.primary }]} onPress={() => router.push("/onboarding/aiFeedback" as any) }>
          <Text style={progressionStyles.buttonText}>Ver feedback da IA</Text>
        </Pressable>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
