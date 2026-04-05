import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { ErrorState, EmptyState } from "../components/StatePlaceholder";
import { CommentSkeleton } from "../components/skeletons/CommentSkeleton";
import { useTheme } from "@/hooks/useTheme";
import { communityStyles } from "./community.styles";

const communityFeedback = [
  { id: "1", author: "Marta", comment: "A receita ficou perfeita! Usei o modo passo a passo e seguiu bem." },
  { id: "2", author: "Lucas", comment: "Adorei o toque de curry, ficou como no restaurante." },
  { id: "3", author: "Paula", comment: "A IA me ajudou a ajustar o resultado final. Super útil!" },
];

export default function Community() {
  const theme = useTheme();
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    if (status !== "loading") {
      return;
    }

    const timer = setTimeout(() => setStatus("ready"), 500);
    return () => clearTimeout(timer);
  }, [status]);

  if (status === "loading") {
    return <CommentSkeleton />;
  }

  if (status === "error") {
    return (
      <ErrorState
        title="Falha na comunidade"
        message="Não foi possível carregar os comentários agora."
        onRetry={() => setStatus("loading")}
      />
    );
  }

  if (!communityFeedback.length) {
    return (
      <EmptyState
        title="Nenhum comentário ainda"
        subtitle="Seja o primeiro a compartilhar feedback sobre essa receita."
        onAction={() => setStatus("loading")}
      />
    );
  }

  return (
    <ScreenContainer>
      <AnimatedScreen style={communityStyles.container}>
        <View style={communityStyles.header}>
          <Text style={[communityStyles.title, { color: theme.text }]}>Comunidade</Text>
          <Text style={[communityStyles.subtitle, { color: theme.subText }]}>Feedback real de quem já fez a receita.</Text>
        </View>

        <View style={communityStyles.board}>
          {communityFeedback.map((item) => (
            <View key={item.id} style={[communityStyles.commentCard, { backgroundColor: theme.card, borderColor: theme.border }]}> 
              <Text style={[communityStyles.commentAuthor, { color: theme.primary }]}>{item.author}</Text>
              <Text style={[communityStyles.commentText, { color: theme.text }]}>{item.comment}</Text>
            </View>
          ))}
        </View>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
