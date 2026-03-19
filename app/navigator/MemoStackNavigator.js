import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import MemoListScreen from "../screens/MemoListScreen";
import MemoDetailScreen from "../screens/MemoDetailScreen";
import MemoFormScreen from "../screens/MemoFormScreen";

// Stack Navigator 생성
const Stack = createNativeStackNavigator();

const MemoStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="List" component={MemoListScreen} />
        <Stack.Screen name="Detail" component={MemoDetailScreen} />
        <Stack.Screen name="Form" component={MemoFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MemoStackNavigator;
