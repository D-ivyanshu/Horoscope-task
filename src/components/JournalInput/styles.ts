import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F0E8",
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: "600",
    color: "#924f28",
    marginBottom: theme.spacing.md,
    textAlign: "center",
  },
  textInput: {
    width: "100%",
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#D4C4B0",
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.white,
    fontSize: theme.typography.fontSize.base,
    color: "#333",
    textAlignVertical: "top",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.sm,
  },
  characterCount: {
    fontSize: theme.typography.fontSize.sm,
    color: "#666",
  },
  saveButton: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: theme.typography.fontSize.sm,
  },
});
