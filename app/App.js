import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MoodScreen from "./screens/MoodScreen";
import InputExampleScreen from "./screens/InputExampleScreen";
import UpdownScreen from "./screens/NumberMatch";

export default function App() {
  return <UpdownScreen />;
}

const styles = StyleSheet.create({});
