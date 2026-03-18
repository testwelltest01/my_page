import { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { moodData } from "../data/moodData";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styles } from "../styles";

export default function First() {
  const [moodStatus, setMoodStatus] = useState(moodData[0]);

  return (
    <>
      {moodData.map((mood) => (
        <TouchableOpacity
          key={mood.id}
          style={[
            styles.button,
            mood.id === moodStatus.id && styles.selected,
            { backgroundColor: mood.color },
          ]}
          onPress={() => setMoodStatus(mood)}
        >
          <MaterialIcons name={mood.icon} size={40} color="black" />
          <Text style={styles.buttonText}>{mood.label}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.messageBox}>
        <Text style={styles.message}>{moodStatus.message}</Text>
        <Image source={moodStatus.image} style={styles.image} />
      </View>
    </>
  );
}
