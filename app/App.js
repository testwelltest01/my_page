import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MoodScreen from "./screens/MoodScreen";
import InputExampleScreen from "./screens/InputExampleScreen";
import UpdownScreen from "./screens/NumberMatch";
import FlatlistScreen from "./screens/FlatlistScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <FlatlistScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
