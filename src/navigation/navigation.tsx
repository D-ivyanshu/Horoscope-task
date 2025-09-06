import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home/Home";
import JournalScreen from "../screens/Journal/Journal";

export type RootStackParamList = {
  HOME: undefined;
  JOURNAL: undefined;
};

export const ROUTES = {
  HOME: "HOME",
  JOURNAL: "JOURNAL",
} as const;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        animation: "slide_from_right",
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.JOURNAL} component={JournalScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
