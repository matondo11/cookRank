import { StyleSheet } from "react-native";

export const aiFeedbackStyles = StyleSheet.create({
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
  card: {
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
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 22,
  },
  metricRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metricBlock: {
    flex: 1,
    borderRadius: 22,
    padding: 18,
    marginRight: 12,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 6,
  },
  metricLabel: {
    fontSize: 14,
    lineHeight: 20,
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
