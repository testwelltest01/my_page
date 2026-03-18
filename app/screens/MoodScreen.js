import { Text, View } from "react-native";
// MoodScreen.js 상단에 추가 (예시)
import { Asset } from "expo-asset";
import First from "../components/first";
import Name from "../components/name";
import { styles } from "../styles";

// 컴포넌트 외부나 useEffect에서 실행
Asset.loadAsync([
  require("../assets/sunny.png"),
  require("../assets/cloudy.png"),
  require("../assets/rainy.png"),
]);

const MoodScreen = () => {
  return (
    <View style={styles.container}>
      <Name />
      <View style={styles.textContainer}>
        <Text style={styles.text}>오늘 기분이 어때요?</Text>
      </View>
      <First />
    </View>
  );
};

export default MoodScreen;
