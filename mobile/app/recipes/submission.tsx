import { ActivityIndicator, ImageBackground, Pressable, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { useTheme } from "@/hooks/useTheme";
import { submissionStyles } from "./submission.styles";

const uploadedPhoto = require("../../assets/images/plate-food-1.png");

export default function Submission() {
  const router = useRouter();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ScreenContainer>
      <AnimatedScreen style={submissionStyles.container}>
        <View style={submissionStyles.header}>
          <Text style={[submissionStyles.title, { color: theme.text }]}>Envie sua foto final</Text>
          <Text style={[submissionStyles.subtitle, { color: theme.subText }]}>Mostre como ficou a receita e compare com o resultado ideal.</Text>
        </View>

        <View style={[submissionStyles.previewCard, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <ImageBackground source={uploadedPhoto} resizeMode="cover" blurRadius={loading ? 10 : 0} style={submissionStyles.previewImage} imageStyle={submissionStyles.previewImageInner}>
            {loading && (
              <View style={[submissionStyles.previewOverlay, { backgroundColor: theme.overlay }]}> 
                <ActivityIndicator size="large" color={theme.primary} />
                <Text style={[submissionStyles.previewLoadingText, { color: theme.text }]}>Analisando sua foto...</Text>
              </View>
            )}
          </ImageBackground>
          <Text style={[submissionStyles.previewText, { color: theme.subText }]}>Foto de pré-visualização</Text>
        </View>

        <Pressable
          style={[submissionStyles.button, { backgroundColor: loading ? theme.border : theme.primary }]}
          onPress={() => router.push("/recipes/evaluation") }
          disabled={loading}
        >
          <Text style={submissionStyles.buttonText}>{loading ? "Aguardando análise" : "Enviar resultado"}</Text>
        </Pressable>
      </AnimatedScreen>
    </ScreenContainer>
  );
}
