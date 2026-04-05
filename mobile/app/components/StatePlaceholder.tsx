import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@/hooks/useTheme";

interface ErrorStateProps {
  title?: string;
  message: string;
  actionText?: string;
  onRetry: () => void;
}

interface EmptyStateProps {
  title?: string;
  subtitle: string;
  buttonText?: string;
  onAction: () => void;
}

export function ErrorState({
  title = "Ops, algo deu errado",
  message,
  actionText = "Tentar novamente",
  onRetry,
}: ErrorStateProps) {
  const theme = useTheme();

  return (
    <View style={[styles.wrapper, { backgroundColor: theme.background }]}> 
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}> 
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
        <Text style={[styles.message, { color: theme.subText }]}>{message}</Text>
        <Pressable style={[styles.button, { backgroundColor: theme.primary }]} onPress={onRetry}>
          <Text style={styles.buttonText}>{actionText}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export function EmptyState({
  title = "Nada por aqui",
  subtitle,
  buttonText = "Atualizar",
  onAction,
}: EmptyStateProps) {
  const theme = useTheme();

  return (
    <View style={[styles.wrapper, { backgroundColor: theme.background }]}> 
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}> 
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
        <Text style={[styles.message, { color: theme.subText }]}>{subtitle}</Text>
        <Pressable style={[styles.button, { backgroundColor: theme.primary }]} onPress={onAction}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  card: {
    width: "100%",
    borderRadius: 32,
    padding: 28,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
