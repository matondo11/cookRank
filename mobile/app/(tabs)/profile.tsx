import { Pressable, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { ScreenContainer } from "../components/ScreenContainer";
import { ErrorState, EmptyState } from "../components/StatePlaceholder";
import { ProfileSkeleton } from "../components/skeletons/ProfileSkeleton";
import { useAppState } from "@/hooks/useAppState";
import { useTheme } from "@/hooks/useTheme";
import { profileStyles } from "./profile.styles";

export default function Profile() {
  const theme = useTheme();
  const { state, setUserName, clearFavorites } = useAppState();
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (status !== "loading") {
      return;
    }

    const timer = setTimeout(() => setStatus("ready"), 500);
    return () => clearTimeout(timer);
  }, [status]);

  if (status === "loading") {
    return <ProfileSkeleton />;
  }

  if (status === "error") {
    return (
      <ErrorState
        title="Não foi possível carregar"
        message="Falha ao buscar os dados do perfil."
        onRetry={() => setStatus("loading")}
      />
    );
  }

  if (!state.userName) {
    return (
      <EmptyState
        title="Perfil incompleto"
        subtitle="Adicione seu nome para ver o perfil completo."
        onAction={() => setStatus("loading")}
      />
    );
  }

  return (
    <ScreenContainer>
      <View style={profileStyles.wrapper}>
        <View style={profileStyles.header}>
          <Text style={[profileStyles.title, { color: theme.text }]}>Perfil</Text>
          <Text style={profileStyles.subtitle}>Olá, {state.userName}. Veja seu progresso culinário.</Text>
        </View>

        <View style={[profileStyles.statsCard, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <Text style={[profileStyles.statLabel, { color: theme.subText }]}>Nível de Chef</Text>
          <Text style={[profileStyles.statValue, { color: theme.primary }]}>{state.chefLevel}</Text>
          <View style={profileStyles.progressRow}>
            <View style={[profileStyles.progressFill, { width: `${state.recipeProgress}%`, backgroundColor: theme.primary }]} />
          </View>
          <Text style={[profileStyles.progressText, { color: theme.text }]}>{state.recipeProgress}% concluído</Text>
        </View>

        <View style={profileStyles.actionsRow}>
          <Pressable style={[profileStyles.actionButton, { backgroundColor: theme.primary }]} onPress={() => setUserName("Chef Explorer") }>
            <Text style={[profileStyles.actionText, { color: "#fff" }]}>Atualizar</Text>
          </Pressable>
          <Pressable style={[profileStyles.actionButton, profileStyles.lastActionButton, { borderColor: theme.primary, borderWidth: 1 }]} onPress={clearFavorites}>
            <Text style={[profileStyles.actionText, { color: theme.primary }]}>Limpar favoritos</Text>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
}
