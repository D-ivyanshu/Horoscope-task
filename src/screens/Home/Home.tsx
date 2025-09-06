import { View } from "react-native";
import styles from "./styles";
import HoroScope from "../../components/HoroScope/HoroScope";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <HoroScope />
      <Footer />
    </View>
  );
}
