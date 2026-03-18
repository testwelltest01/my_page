import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { styles } from "../styles";
import { useState } from "react";

export default function Name() {
  const [realname, setrealname] = useState("최현석");
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>이름 입력</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setrealname(text)}
      ></TextInput>
      <Image
        source={{
          uri: `https://api.dicebear.com/9.x/adventurer/png?seed=${realname}&backgroundColor=dbeafe`,
        }} // seed 부분에 변수 넣기
        style={styles.image}
      />
    </View>
  );
}
