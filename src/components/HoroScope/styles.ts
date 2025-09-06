import { StyleSheet } from "react-native";
import theme from "../../utils/theme";
import { colors } from "../../utils/theme";

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
    marginTop: theme.spacing.lg,
    padding: theme.spacing.md,
  },
  loadingText: {
    marginTop: theme.spacing.sm,
    fontSize: theme.typography.fontSize.sm,
    color: colors.neutral[600],
  },
  errorContainer: {
    marginTop: theme.spacing.lg,
    padding: theme.spacing.md,
    backgroundColor: colors.error[50],
    borderRadius: theme.borderRadius.md,
    borderWidth: theme.normalize(1),
    borderColor: colors.error[200],
  },
  errorText: {
    fontSize: theme.typography.fontSize.sm,
    color: colors.error[600],
  },
  horoscopeContainer: {
    padding: theme.spacing.lg,
    backgroundColor: "#E0D4C5",
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.md,
  },
  horoscopeTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: "#813200",
    marginBottom: theme.spacing.sm,
  },
  horoscopeText: {
    fontSize: theme.typography.fontSize.base,
    color: colors.neutral[700],
    lineHeight:
      theme.typography.lineHeight.relaxed * theme.typography.fontSize.base,
  },
  horoscopeImage: { height: theme.normalize(300), width: theme.normalize(300) },
});

export default styles;
