import { StyleSheet } from "react-native";

export const submissionStyles = StyleSheet.create({
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
  previewCard: {
    borderRadius: 32,
    borderWidth: 1,
    padding: 0,
    marginBottom: 28,
    overflow: "hidden",
  },
  previewImage: {
    width: "100%",
    height: 220,
    justifyContent: "center",
    alignItems: "center",
  },
  previewImageInner: {
    borderRadius: 32,
  },
  previewOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  previewLoadingText: {
    marginTop: 16,
    fontSize: 15,
    fontWeight: "700",
  },
  previewText: {
    marginTop: 14,
    fontSize: 15,
    color: "rgba(255,255,255,0.85)",
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