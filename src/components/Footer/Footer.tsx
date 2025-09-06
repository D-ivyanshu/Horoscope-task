import { Text } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, ROUTES } from "../../navigation/navigation";
import styles from "./styles";
import { colors } from "../../utils/theme";

const Footer = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableScale
      activeScale={0.94}
      tension={800}
      friction={800}
      style={styles.journalButton}
      onPress={() => navigation.navigate(ROUTES.JOURNAL)}
    >
      <Text style={styles.journalButtonText}>Write a Journal</Text>
      <Ionicons name="arrow-forward-outline" size={24} color={colors.white} />
    </TouchableScale>
  );
};

export default Footer;
