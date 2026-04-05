import { StyleSheet } from "react-native";

export const detailsStyles = StyleSheet.create({
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
    color: "rgba(255,255,255,0.9)",
    marginBottom: 18,
  },
  heroCard: {
    borderRadius: 32,
    padding: 22,
    marginBottom: 24,
    borderWidth: 1,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 8,
  },
  heroMeta: {
    fontSize: 15,
    lineHeight: 22,
  },
  ingredientsSection: {
    marginBottom: 26,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  ingredientItem: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
  },
  buttonSpacer: {
    width: 12,
  },
  primaryButton: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: "center",
  },
  secondaryButton: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: "center",
    borderWidth: 1,
  },
  primaryText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  secondaryText: {
    fontSize: 16,
    fontWeight: "700",
  },
  footerText: {
    marginTop: 20,
    fontSize: 15,
  },
});