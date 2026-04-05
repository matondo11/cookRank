import { useState } from "react";
import { useRouter } from "expo-router";
import { useAppState } from "@/hooks/useAppState";

export const useLogin = () => {
  const router = useRouter();
  const { login, setUserName } = useAppState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setUserName(email ? email.split("@")[0] : "Chef");
    login();
    router.push("/(tabs)/feed");
  };

  const handleSignupNavigation = () => {
    router.push("/auth/signup");
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    handleSignupNavigation,
  };
};