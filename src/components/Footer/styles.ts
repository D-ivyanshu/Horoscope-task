import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

const styles = StyleSheet.create({
  journalButton: {
    backgroundColor: "#924f28",
    width: "100%",
    flexDirection: "row",
    gap: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  journalButtonText: {
    color: theme.colors.white,
  },
});

export default styles;
