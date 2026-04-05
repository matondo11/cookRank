import { StyleSheet } from "react-native";

export const progressionStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  header: {
    marginBottom: 22,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  summaryCard: {
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    marginBottom: 26,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 10,
  },
  summaryDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  metricGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  metricItem: {
    flexBasis: "48%",
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
  },
  metricLabel: {
    fontSize: 13,
    marginBottom: 6,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: "800",
  },
  primaryButton: {
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
