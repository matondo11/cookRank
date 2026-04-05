import { Pressable, Text, View } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { useAppState } from "@/hooks/useAppState";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { stepStyles } from "./step-by-step.styles";

const steps = [
  "Aqueça a frigideira com óleo de coco.",
  "Refogue cebola e alho até dourar.",
  "Adicione frango e curry, misture bem.",
  "Despeje o leite de coco e deixe cozinhar.",
  "Finalize com cebolinha e sirva quente.",
];

export default function StepByStep() {
  const theme = useTheme();
  const { state, setRecipeProgress } = useAppState();

  const nextStep = () => {
    setRecipeProgress(Math.min(100, state.recipeProgress + 20));
  };

  return (
    <ScreenContainer>
      <AnimatedScreen style={stepStyles.container}>
        <Text style={[stepStyles.title, { color: theme.text }]}>Passo a passo</Text>
        <Text style={[stepStyles.subtitle, { color: theme.subText }]}>Acompanhe cada etapa da receita em tempo real.</Text>

        <View style={[stepStyles.stepCard, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <Text style={[stepStyles.stepLabel, { color: theme.subText }]}>Etapa atual</Text>
          <Text style={[stepStyles.stepTitle, { color: theme.text }]}>{steps[Math.min(4, Math.floor(state.recipeProgress / 20))]}</Text>
          <Text style={[stepStyles.stepDescription, { color: theme.subText }]}>Complete a etapa antes de ir para a próxima.</Text>

          <View style={stepStyles.progressRow}>
            <View style={stepStyles.progressBarBackground}>
              <View style={[stepStyles.progressBarFill, { width: `${state.recipeProgress}%`, backgroundColor: theme.primary }]} />
            </View>
            <Text style={[stepStyles.progressValue, { color: theme.text }]}>{state.recipeProgress}%</Text>
          </View>
        </View>

        <Pressable style={[stepStyles.button, { backgroundColor: theme.primary }]} onPress={nextStep}>
          <Text style={stepStyles.buttonText}>Próximo passo</Text>
        </Pressable>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
