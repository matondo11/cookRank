import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { useTheme } from "@/hooks/useTheme";
import { evaluationStyles } from "./evaluation.styles";

export default function Evaluation() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <ScreenContainer>
      <AnimatedScreen style={evaluationStyles.container}>
        <View style={evaluationStyles.header}>
          <Text style={[evaluationStyles.title, { color: theme.text }]}>Avaliação IA</Text>
          <Text style={[evaluationStyles.subtitle, { color: theme.subText }]}>A inteligência artificial compara seu resultado com a receita original.</Text>
        </View>

        <View style={[evaluationStyles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <Text style={[evaluationStyles.statLabel, { color: theme.subText }]}>Precisão da receita</Text>
          <Text style={[evaluationStyles.statValue, { color: theme.primary }]}>92%</Text>
          <Text style={[evaluationStyles.statText, { color: theme.text }]}>Seu prato está muito próximo ao resultado ideal. Ajuste o tempero final para brilhar.</Text>
        </View>

        <View style={[evaluationStyles.statCard, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <Text style={[evaluationStyles.statLabel, { color: theme.subText }]}>Textura</Text>
          <Text style={[evaluationStyles.statValue, { color: theme.primary }]}>Excelente</Text>
          <Text style={[evaluationStyles.statText, { color: theme.text }]}>A consistência está equilibrada e macia, com leve cremosidade.</Text>
        </View>

        <Pressable style={[evaluationStyles.button, { backgroundColor: theme.primary }]} onPress={() => router.push("/(tabs)/profile") }>
          <Text style={evaluationStyles.buttonText}>Ver progresso</Text>
        </Pressable>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
