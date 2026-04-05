import { useAppStateContext } from "@/app/providers/AppStateProvider";

export const useAppState = () => {
  return useAppStateContext();
};
