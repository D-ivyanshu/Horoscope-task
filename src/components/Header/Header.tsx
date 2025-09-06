import { View, Image, Text } from "react-native";
import { formatDate } from "../../utils/common";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.mynaksh.com/static/media/logo-nav.3b85adb47713ebd0fba6.webp",
        }}
        style={styles.logo}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Your Daily Horoscope</Text>
        <Text style={styles.date}>
          {formatDate(new Date(), {
            includeWeekday: true,
          })}
        </Text>
      </View>
    </View>
  );
};

export default Header;
