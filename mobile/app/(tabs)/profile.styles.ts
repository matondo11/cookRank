import { StyleSheet } from "react-native";

export const profileStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 22,
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
    color: "rgba(255,255,255,0.8)",
    marginBottom: 28,
  },
  statsCard: {
    borderRadius: 32,
    padding: 24,
    borderWidth: 1,
    marginBottom: 24,
  },
  statLabel: {
    fontSize: 15,
    marginBottom: 10,
  },
  statValue: {
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 18,
  },
  progressRow: {
    width: "100%",
    height: 14,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.12)",
    overflow: "hidden",
    marginBottom: 10,
  },
  progressFill: {
    height: "100%",
  },
  progressText: {
    fontSize: 14,
    marginBottom: 22,
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: "center",
    marginRight: 12,
  },
  lastActionButton: {
    marginRight: 0,
  },
  actionText: {
    fontSize: 15,
    fontWeight: "700",
  },
});