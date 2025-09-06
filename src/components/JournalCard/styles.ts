import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: "600",
    color: "#924f28",
    marginBottom: theme.spacing.md,
  },
  emptyStateContainer: {
    backgroundColor: "#F5F0E8",
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    alignItems: "center",
  },
  emptyStateIcon: {
    color: "#D4C4B0",
  },
  emptyStateText: {
    fontSize: theme.typography.fontSize.sm,
    color: "#666",
    textAlign: "center",
    marginTop: theme.spacing.md,
  },
  journalEntryContainer: {
    backgroundColor: "#F5F0E8",
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: theme.spacing.sm,
  },
  entryDate: {
    fontSize: theme.typography.fontSize.sm,
    color: "#924f28",
    fontWeight: "600",
  },
  deleteButton: {
    padding: theme.spacing.xs,
  },
  deleteIcon: {
    color: "#999",
  },
  entryContent: {
    fontSize: theme.typography.fontSize.sm,
    color: "#333",
    lineHeight: theme.normalize(22),
  },
});

export default styles;
