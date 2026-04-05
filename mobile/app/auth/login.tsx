import { ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { loginStyles } from "./login.styles";
import { useLogin } from "./login.hook";

const bgLogin = require("../../assets/images/bg-login.png");

export default function Login() {
  const theme = useTheme();
  const { email, password, setEmail, setPassword, handleLogin, handleSignupNavigation } = useLogin();

  return (
    <ScreenContainer>
      <ImageBackground source={bgLogin} style={loginStyles.background} resizeMode="cover" blurRadius={16}>
        <View style={loginStyles.dimOverlay} />
        <AnimatedScreen style={loginStyles.container}>
          <View style={loginStyles.header}>
            <Text style={loginStyles.title}>Bem vindo de volta</Text>
            <Text style={loginStyles.subtitle}>Faça login para continuar a sua jornada culinária.</Text>
          </View>

          <View style={loginStyles.glassCard}>
            <TextInput
              style={[loginStyles.input, { color: theme.text, borderColor: "rgba(255,255,255,0.32)" }]}
              placeholder="E-mail"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={[loginStyles.input, { color: theme.text, borderColor: "rgba(255,255,255,0.32)" }]}
              placeholder="Senha"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Pressable style={[loginStyles.primaryButton, { backgroundColor: theme.primary }]} onPress={handleLogin}>
              <Text style={loginStyles.primaryText}>Entrar</Text>
            </Pressable>
          </View>

          <View style={loginStyles.footerRow}>
            <Text style={loginStyles.footerText}>Não tem conta?</Text>
            <Pressable onPress={handleSignupNavigation}>
              <Text style={loginStyles.footerLink}>Criar agora</Text>
            </Pressable>
          </View>
        </AnimatedScreen>
      </ImageBackground>
    </ScreenContainer>
  );
}
