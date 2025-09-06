import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
  },
  button: {
    backgroundColor: "#E0D4C5",
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.sm,
  },
  title: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: "600",
    color: "#924f28",
  },
});
