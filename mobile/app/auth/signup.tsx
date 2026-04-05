import { ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { ScreenContainer } from "../components/ScreenContainer";
import { AnimatedScreen } from "../components/AnimatedScreen";
import { signupStyles } from "./signup.styles";
import { useSignup } from "./signup.hook";

const bgLogin = require("../../assets/images/bg-login.png");

export default function Signup() {
  const theme = useTheme();
  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    handleSignup,
    handleLoginNavigation,
  } = useSignup();

  return (
    <ScreenContainer>
      <ImageBackground source={bgLogin} style={signupStyles.background} resizeMode="cover" blurRadius={16}>
        <View style={signupStyles.dimOverlay} />
        <AnimatedScreen style={signupStyles.container}>
          <View style={signupStyles.header}>
            <Text style={signupStyles.title}>Crie sua conta</Text>
            <Text style={signupStyles.subtitle}>Comece a salvar receitas e acompanhar seu progresso.</Text>
          </View>

          <View style={signupStyles.glassCard}>
            <TextInput
              style={[signupStyles.input, { color: theme.text, borderColor: "rgba(255,255,255,0.32)" }]}
              placeholder="Seu nome"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={[signupStyles.input, { color: theme.text, borderColor: "rgba(255,255,255,0.32)" }]}
              placeholder="E-mail"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={[signupStyles.input, { color: theme.text, borderColor: "rgba(255,255,255,0.32)" }]}
              placeholder="Senha"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Pressable style={[signupStyles.primaryButton, { backgroundColor: theme.primary }]} onPress={handleSignup}>
              <Text style={signupStyles.primaryText}>Criar conta</Text>
            </Pressable>
          </View>

          <View style={signupStyles.footerRow}>
            <Text style={signupStyles.footerText}>Já tem conta?</Text>
            <Pressable onPress={handleLoginNavigation}>
              <Text style={signupStyles.footerLink}>Entrar</Text>
            </Pressable>
          </View>
        </AnimatedScreen>
      </ImageBackground>
    </ScreenContainer>
  );
}
