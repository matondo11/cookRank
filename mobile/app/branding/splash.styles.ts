import { StyleSheet } from "react-native";

export const splashStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  glowWrap: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  glow: {
    width: 360,
    height: 360,
    borderRadius: 180,
    opacity: 0.12,
  },
  card: {
    width: "100%",
    borderRadius: 32,
    paddingVertical: 40,
    paddingHorizontal: 28,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 24,
    elevation: 8,
  },
  badge: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    marginBottom: 28,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 0.8,
  },
  iconWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 6,
  },
  icon: {
    width: 46,
    height: 46,
  },
  title: {
    fontSize: 42,
    fontWeight: "800",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    letterSpacing: 2,
    marginBottom: 26,
  },
  quote: {
    fontSize: 17,
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  progressRow: {
    width: "40%",
    height: 6,
    borderRadius: 999,
    backgroundColor: "#EDEDED",
    marginBottom: 28,
  },
  progressFill: {
    width: "40%",
    height: "100%",
    borderRadius: 999,
  },
  ctaRow: {
    marginBottom: 28,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
  },
  footerIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  footerText: {
    fontSize: 13,
  },
});