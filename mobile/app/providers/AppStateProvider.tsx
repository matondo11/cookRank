import { ReactNode, createContext, useContext, useMemo, useReducer } from "react";

interface AppState {
  isAuthenticated: boolean;
  favorites: number;
  notifications: number;
  userName: string;
  chefLevel: number;
  recipeProgress: number;
}

type Action =
  | { type: "LOGIN" }
  | { type: "LOGOUT" }
  | { type: "INCREMENT_FAVORITES" }
  | { type: "SET_USER_NAME"; payload: string }
  | { type: "CLEAR_FAVORITES" }
  | { type: "SET_RECIPE_PROGRESS"; payload: number };

const initialState: AppState = {
  isAuthenticated: false,
  favorites: 0,
  notifications: 2,
  userName: "Guest",
  chefLevel: 1,
  recipeProgress: 0,
};

const AppStateContext = createContext<AppStateContextValue | undefined>(undefined);

interface AppStateContextValue {
  state: AppState;
  login: () => void;
  logout: () => void;
  incrementFavorites: () => void;
  setUserName: (name: string) => void;
  clearFavorites: () => void;
  setRecipeProgress: (percent: number) => void;
}

function appStateReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    case "INCREMENT_FAVORITES":
      return { ...state, favorites: state.favorites + 1 };
    case "SET_USER_NAME":
      return { ...state, userName: action.payload };
    case "CLEAR_FAVORITES":
      return { ...state, favorites: 0 };
    case "SET_RECIPE_PROGRESS":
      return { ...state, recipeProgress: action.payload };
    default:
      return state;
  }
}

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appStateReducer, initialState);
  const value = useMemo(
    () => ({
      state,
      login: () => dispatch({ type: "LOGIN" }),
      logout: () => dispatch({ type: "LOGOUT" }),
      incrementFavorites: () => dispatch({ type: "INCREMENT_FAVORITES" }),
      setUserName: (name: string) => dispatch({ type: "SET_USER_NAME", payload: name }),
      clearFavorites: () => dispatch({ type: "CLEAR_FAVORITES" }),
      setRecipeProgress: (percent: number) => dispatch({ type: "SET_RECIPE_PROGRESS", payload: percent }),
    }),
    [state],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppStateContext() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppStateContext must be used within AppStateProvider");
  }
  return context;
}
