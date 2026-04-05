import { StyleSheet, ViewStyle } from "react-native";

interface SignupStyles {
  background: ViewStyle;
  dimOverlay: ViewStyle;
  container: ViewStyle;
  header: ViewStyle;
  title: ViewStyle;
  subtitle: ViewStyle;
  glassCard: ViewStyle;
  input: ViewStyle;
  primaryButton: ViewStyle;
  primaryText: ViewStyle;
  footerRow: ViewStyle;
  footerText: ViewStyle;
  footerLink: ViewStyle;
}

export const signupStyles = StyleSheet.create<SignupStyles>({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  dimOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.28)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 8,
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "rgba(255,255,255,0.82)",
    marginBottom: 28,
  },
  glassCard: {
    borderRadius: 32,
    padding: 26,
    backgroundColor: "rgba(255,255,255,0.16)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 26,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    elevation: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  primaryButton: {
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 4,
  },
  primaryText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },
  footerText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.78)",
  },
  footerLink: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FF6B35",
    marginLeft: 6,
  },
});