import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: theme.normalize(100),
    height: theme.normalize(100),
  },
  textContainer: {
    alignItems: "center",
    gap: theme.spacing.xs,
  },
  title: {
    fontSize: theme.typography.fontSize["2xl"],
  },
  date: {
    fontSize: theme.typography.fontSize.sm,
  },
});

export default styles;
