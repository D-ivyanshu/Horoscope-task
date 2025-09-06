import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="hidden" />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DA",
  },
});
