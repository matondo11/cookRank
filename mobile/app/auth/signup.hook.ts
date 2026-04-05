import { useState } from "react";
import { useRouter } from "expo-router";
import { useAppState } from "@/hooks/useAppState";

export const useSignup = () => {
  const router = useRouter();
  const { login, setUserName } = useAppState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    setUserName(name || "Chef");
    login();
    router.push("/(tabs)/feed");
  };

  const handleLoginNavigation = () => {
    router.push("/auth/login");
  };

  return {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    handleSignup,
    handleLoginNavigation,
  };
};