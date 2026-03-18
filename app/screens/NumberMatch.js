import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from "react-native";
import LottieView from "lottie-react-native";

const UpdownScreen = () => {
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);

  const [correct, setCorrect] = useState("");

  const handleCheck = () => {
    console.log(answer);
    if (answer === Number(userInput)) {
      setCorrect("correct");
      Alert.alert("정답", "정답입니다", [{ text: "예" }, { text: "아니오" }]);
    } else if (answer > userInput) {
      setCorrect("up");
    } else {
      setCorrect("down");
    }
  };

  const [userInput, setUserInput] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>UpDown 숫자 맞추기 게임</Text>
        <Text style={styles.subTitle}>1-100 사이의 숫자를 입력하세요</Text>
        {/* 숫자 입력받기 */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={3}
            value={userInput}
            onChangeText={setUserInput}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleCheck();
              Keyboard.dismiss();
            }}
          >
            <Text style={styles.buttonText}>확인</Text>
          </TouchableOpacity>
        </View>
        {/* 결과 출력 */}
        <View style={styles.resultBox}>
          <Text>{correct}</Text>
          {correct === "correct" ? (
            <LottieView
              source={require("../assets/Verification Badge.json")} // require를 씁니다!
              autoPlay // 컴포넌트가 마운트될 때 자동으로 재생할지 여부.
              loop // 반복 재생 여부.
              style={{ width: 200, height: 200 }} // 스타일 필수!
            />
          ) : (
            <LottieView
              source={require("../assets/error.json")} // require를 씁니다!
              autoPlay // 컴포넌트가 마운트될 때 자동으로 재생할지 여부.
              loop // 반복 재생 여부.
              style={{ width: 200, height: 200 }} // 스타일 필수!
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UpdownScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  subTitle: {
    fontSize: 20,
  },
  inputContainer: { flexDirection: "row", padding: 30 },
  input: {
    borderWidth: 1,
    width: 150,
    height: 100,
    textAlign: "center",
    fontSize: 30,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "blue",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontSize: 30, color: "#fff" },
  resultBox: {
    backgroundColor: "#fff",
    width: "80%",
    height: 300,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // 그림자효과 (아이폰)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // 그림자효과 (안드로이드)
    elevation: 4,
  },
});
