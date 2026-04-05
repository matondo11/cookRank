import { StyleSheet } from "react-native";

export const evaluationStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  header: {
    marginBottom: 18,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
    color: "rgba(255,255,255,0.9)",
  },
  statCard: {
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    marginBottom: 18,
  },
  statLabel: {
    fontSize: 14,
    color: "rgba(255,255,255,0.78)",
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 6,
  },
  statText: {
    fontSize: 15,
    lineHeight: 22,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});