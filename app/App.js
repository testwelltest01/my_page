import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MoodScreen from "./screens/MoodScreen";
import InputExampleScreen from "./screens/InputExampleScreen";
import UpdownScreen from "./screens/NumberMatch";
import FlatlistScreen from "./screens/FlatlistScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MemoListScreen from "./screens/MemoListScreen";
import MemoDetailScreen from "./screens/MemoDetailScreen";
import MemoFormScreen from "./screens/MemoFormScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <MemoListScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
