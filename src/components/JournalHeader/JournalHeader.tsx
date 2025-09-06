import { View, Text, Alert } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect } from "react";
import {
  registerForPushNotificationsAsync,
  schedulePushNotification,
} from "../../services/notificationService";
import { styles } from "./styles";

const JournalHeader = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const scheduleNotification = async () => {
      try {
        const content = {
          title: "Hi AstroCulture User!",
          body: "Write a journal entry",
        };
        await schedulePushNotification(content);
      } catch (error) {
        console.error("Error scheduling notification:", error);
      }
    };

    scheduleNotification();
  }, []); // Empty dependency array - runs only once on mount
  return (
    <View style={styles.container}>
      <TouchableScale
        activeScale={0.94}
        tension={800}
        friction={800}
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#924f28" />
      </TouchableScale>

      <Text style={styles.title}>My Journal</Text>

      <TouchableScale
        activeScale={0.94}
        tension={800}
        friction={800}
        style={styles.button}
        onPress={() => {
          registerForPushNotificationsAsync();
        }}
      >
        <Ionicons name="notifications-outline" size={24} color="#924f28" />
      </TouchableScale>
    </View>
  );
};

export default JournalHeader;
