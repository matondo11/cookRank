import { StyleSheet } from "react-native";

export const feedStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22,
  },
  heroCard: {
    borderRadius: 32,
    padding: 22,
    marginBottom: 22,
    borderWidth: 1,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 8,
  },
  heroMeta: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -8,
    marginHorizontal: -6,
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginTop: 8,
    marginHorizontal: 6,
  },
  skeletonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  card: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 14,
  },
  primaryButton: {
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  recipeCard: {
    borderRadius: 28,
    padding: 20,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 6,
  },
  recipeMeta: {
    fontSize: 14,
  },
  viewLabel: {
    fontWeight: "700",
  },
});