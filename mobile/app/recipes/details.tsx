import { Pressable, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { ErrorState, EmptyState } from "../components/StatePlaceholder";
import { RecipeSkeleton } from "../components/skeletons/RecipeSkeleton";
import { useAppState } from "@/hooks/useAppState";
import { useTheme } from "@/hooks/useTheme";
import { detailsStyles } from "./details.styles";

const ingredients = [
  "500g de peito de frango",
  "1 cebola média picada",
  "2 colheres de sopa de curry",
  "200ml de leite de coco",
  "1 cenoura em rodelas",
];

export default function Details() {
  const router = useRouter();
  const theme = useTheme();
  const { state } = useAppState();
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (status !== "loading") {
      return;
    }

    const timer = setTimeout(() => setStatus("ready"), 500);
    return () => clearTimeout(timer);
  }, [status]);

  if (status === "loading") {
    return <RecipeSkeleton />;
  }

  if (status === "error") {
    return (
      <ErrorState
        title="Erro ao carregar receita"
        message="Não foi possível carregar os detalhes da receita."
        onRetry={() => setStatus("loading")}
      />
    );
  }

  if (!ingredients.length) {
    return (
      <EmptyState
        title="Ingredientes indisponíveis"
        subtitle="A receita não trouxe ingredientes ainda."
        onAction={() => setStatus("loading")}
      />
    );
  }

  return (
    <ScreenContainer>
      <AnimatedScreen style={detailsStyles.container}>
        <View style={detailsStyles.header}>
          <Text style={[detailsStyles.title, { color: theme.text }]}>Detalhe da Receita</Text>
          <Text style={[detailsStyles.subtitle, { color: theme.subText }]}>Siga os passos, veja ingredientes e compare seu resultado.</Text>
        </View>

        <View style={[detailsStyles.heroCard, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <View style={{ height: 180, borderRadius: 24, backgroundColor: theme.background, marginBottom: 18 }} />
          <Text style={[detailsStyles.heroTitle, { color: theme.text }]}>Frango ao curry cremoso</Text>
          <Text style={[detailsStyles.heroMeta, { color: theme.subText }]}>Ingredientes, preparo e dicas de finalização para um prato suculento.</Text>
        </View>

        <View style={detailsStyles.ingredientsSection}>
          <Text style={[detailsStyles.sectionTitle, { color: theme.text }]}>Ingredientes</Text>
          {ingredients.map((item) => (
            <Text key={item} style={[detailsStyles.ingredientItem, { color: theme.subText }]}>{`• ${item}`}</Text>
          ))}
        </View>

        <View style={detailsStyles.buttonRow}>
          <Pressable style={[detailsStyles.primaryButton, { backgroundColor: theme.primary }]} onPress={() => router.push("/recipes/step-by-step") }>
            <Text style={detailsStyles.primaryText}>Passo a passo</Text>
          </Pressable>
          <View style={detailsStyles.buttonSpacer} />
          <Pressable style={[detailsStyles.secondaryButton, { borderColor: theme.primary }]} onPress={() => router.push("/recipes/submission") }>
            <Text style={[detailsStyles.secondaryText, { color: theme.primary }]}>Enviar foto</Text>
          </Pressable>
        </View>

        <Text style={[detailsStyles.footerText, { color: theme.subText }]}>Progresso atual: {state.recipeProgress}%</Text>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
