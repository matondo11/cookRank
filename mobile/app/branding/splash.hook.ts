import { useRouter } from "expo-router";

export const useSplash = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/onboarding/aiGuidance");
  };

  return {
    handleGetStarted,
  };
};