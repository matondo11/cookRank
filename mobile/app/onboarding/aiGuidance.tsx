import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { useTheme } from "@/hooks/useTheme";
import { aiGuidanceStyles } from "./aiGuidance.styles";

const guidanceItems = [
  { title: "Ajuda passo a passo", description: "Receba sugestões inteligentes enquanto cozinha." },
  { title: "Ajustes inteligente", description: "A IA sugere correções em tempo real para suas receitas." },
  { title: "Resultados consistentes", description: "Melhore seus pratos com feedback gastronômico." },
];

export default function AiGuidance() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ScreenContainer>
      <AnimatedScreen style={aiGuidanceStyles.container}>
        <View style={aiGuidanceStyles.header}>
          <Text style={[aiGuidanceStyles.title, { color: theme.text }]}>Cozinhando com IA</Text>
          <Text style={[aiGuidanceStyles.subtitle, { color: theme.subText }]}>Descubra o novo modo inteligente do CookRank.</Text>
        </View>

        <View style={[aiGuidanceStyles.card, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <Text style={[aiGuidanceStyles.cardTitle, { color: theme.primary }]}>Guia AI</Text>
          <Text style={[aiGuidanceStyles.cardDescription, { color: theme.text }]}>Acompanhe cada etapa da receita com sugestões personalizadas e ajustes em tempo real.</Text>
          {guidanceItems.map((item) => (
            <View key={item.title} style={aiGuidanceStyles.featureRow}>
              <View style={[aiGuidanceStyles.featureDot, { backgroundColor: theme.primary }]} />
              <View style={aiGuidanceStyles.featureText}>
                <Text style={[aiGuidanceStyles.featureTitle, { color: theme.text }]}>{item.title}</Text>
                <Text style={[aiGuidanceStyles.featureDescription, { color: theme.subText }]}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <Pressable style={[aiGuidanceStyles.primaryButton, { backgroundColor: theme.primary }]} onPress={() => router.push("/onboarding/progression" as const) }>
          <Text style={aiGuidanceStyles.buttonText}>Vamos começar</Text>
        </Pressable>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
