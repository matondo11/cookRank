import { StyleSheet } from "react-native";

export const communityStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  header: {
    marginBottom: 18,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22,
  },
  board: {
    marginBottom: 4,
  },
  commentCard: {
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 6,
  },
  commentAuthor: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10,
  },
  commentText: {
    fontSize: 15,
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    borderRadius: 22,
    padding: 18,
    marginRight: 12,
  },
  statTitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "800",
  },
});