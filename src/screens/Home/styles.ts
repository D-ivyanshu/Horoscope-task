import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.xl,
    paddingVertical: theme.spacing["3xl"],
    backgroundColor: "#ECE5DA",
  },
  contentContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});

export default styles;
