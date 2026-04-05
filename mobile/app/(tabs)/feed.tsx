import { Pressable, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { ErrorState, EmptyState } from "../components/StatePlaceholder";
import { FeedSkeleton } from "../components/skeletons/FeedSkeleton";
import { useTheme } from "@/hooks/useTheme";
import { feedStyles } from "./feed.styles";
import { useFeed } from "./feed.hook";

const recipeCards = [
  { id: "1", title: "Frango ao curry cremoso", category: "Jantar", author: "Chef Lara" },
  { id: "2", title: "Risoto de cogumelos", category: "Vegetariano", author: "Chef Mateus" },
  { id: "3", title: "Brownie de chocolate", category: "Sobremesa", author: "Chef Ana" },
];

const categories = ["Jantar", "Vegetariano", "Sobremesa"];

export default function Feed() {
  const theme = useTheme();
  const { favorites, handleIncrementFavorites, handleRecipePress } = useFeed();
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (status !== "loading") {
      return;
    }

    const timer = setTimeout(() => setStatus("ready"), 500);
    return () => clearTimeout(timer);
  }, [status]);

  if (status === "loading") {
    return <FeedSkeleton />;
  }

  if (status === "error") {
    return (
      <ErrorState
        title="Não foi possível carregar"
        message="Algo deu errado ao buscar suas receitas."
        onRetry={() => setStatus("loading")}
      />
    );
  }

  if (!recipeCards.length) {
    return (
      <EmptyState
        title="Nenhuma receita encontrada"
        subtitle="Tente novamente mais tarde ou ajuste seus filtros."
        onAction={() => setStatus("loading")}
      />
    );
  }

  return (
    <ScreenContainer>
      <AnimatedScreen style={feedStyles.container}>
        <View style={feedStyles.header}>
          <Text style={[feedStyles.title, { color: theme.text }]}>Descubra receitas inteligentes</Text>
          <Text style={[feedStyles.subtitle, { color: theme.subText }]}>Sugestões selecionadas para o seu paladar e tempo.</Text>
        </View>

        <View style={[feedStyles.heroCard, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <Text style={[feedStyles.heroTitle, { color: theme.primary }]}>Destaque do dia</Text>
          <Text style={[feedStyles.heroMeta, { color: theme.text }]}>Frango ao curry cremoso com toque de coco e legumes caramelizados.</Text>
          <View style={feedStyles.chipRow}>
            {categories.map((category) => (
              <View key={category} style={[feedStyles.chip, { backgroundColor: theme.secondary }]}> 
                <Text style={{ color: "#fff", fontWeight: "700" }}>{category}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[feedStyles.card, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <Text style={[feedStyles.cardTitle, { color: theme.primary }]}>Favoritos</Text>
          <Text style={[feedStyles.cardText, { color: theme.text }]}>Receitas salvas: {favorites}</Text>
          <Pressable style={[feedStyles.primaryButton, { backgroundColor: theme.primary }]} onPress={handleIncrementFavorites}>
            <Text style={feedStyles.buttonText}>Adicionar favorito</Text>
          </Pressable>
        </View>

        {recipeCards.map((recipe) => (
          <Pressable key={recipe.id} style={[feedStyles.recipeCard, { backgroundColor: theme.card }]} onPress={handleRecipePress}>
            <View>
              <Text style={[feedStyles.recipeTitle, { color: theme.text }]}>{recipe.title}</Text>
              <Text style={[feedStyles.recipeMeta, { color: theme.subText }]}>{recipe.category} • {recipe.author}</Text>
            </View>
            <Text style={[feedStyles.viewLabel, { color: theme.primary }]}>Ver receita</Text>
          </Pressable>
        ))}
      </AnimatedScreen>
    </ScreenContainer>
  );
}
