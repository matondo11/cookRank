import { useRouter } from "expo-router";
import { useAppState } from "@/hooks/useAppState";

export const useFeed = () => {
  const router = useRouter();
  const { state, incrementFavorites } = useAppState();

  const handleIncrementFavorites = () => {
    incrementFavorites();
  };

  const handleRecipePress = () => {
    router.push("/recipes/details");
  };

  return {
    favorites: state.favorites,
    handleIncrementFavorites,
    handleRecipePress,
  };
};