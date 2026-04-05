import { StyleSheet } from "react-native";

export const stepStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 26,
    color: "rgba(255,255,255,0.9)",
  },
  stepCard: {
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    marginBottom: 26,
  },
  stepLabel: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    marginBottom: 10,
  },
  stepTitle: {
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 12,
  },
  stepDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  progressBarBackground: {
    flex: 1,
    height: 12,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.12)",
    overflow: "hidden",
    marginRight: 12,
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 10,
  },
  progressValue: {
    fontSize: 14,
    minWidth: 40,
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