import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
const InputExampleScreen = () => {
  // 입력값을 관리할 상태 선언
  const [id, setId] = useState("");
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [search, setSearch] = useState("");
  const [bio, setBio] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* 바깥 누르면 키보드 내려가도록 */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/*  */}
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text style={styles.title}>자주 쓰는 TextInput 유형</Text>
          </View>
          {/* 1. 일반 텍스트  ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>아이디</Text>
            <TextInput
              style={styles.input}
              value={id}
              onChangeText={setId}
              placeholder="입력해주세요"
              maxLength={20}
              autoCapitalize="none"
              returnKeyType="next"
              autoComplete="city"
              onSubmitEditing={() => {
                console.log(search, "검색");
              }}
            />
          </View>
          {/* 2. 비밀번호 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>비밀번호</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassWord}
              placeholder="입력해주세요"
              maxLength={20}
              secureTextEntry={true}
              autoComplete={password}
            />
          </View>
          {/* 3. 이메일 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>이메일</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              autoComplete="email"
              placeholder="example@naver.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          {/* 4. 전화번호 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>전화번호</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="01012345678"
              placeholderTextColor="#c93636ff"
              maxLength={13}
              keyboardType="phone-pad"
              autoComplete="tel"
            />
          </View>
          {/* 5. 숫자 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>우편번호</Text>
            <TextInput
              style={styles.input}
              value={postalCode}
              onChangeText={setpostalCode}
              maxLength={5}
              keyboardType="numeric"
            />
          </View>
          {/* 7. 검색창 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>검색어</Text>
            <TextInput
              style={styles.input}
              value={search}
              onChangeText={setSearch}
              returnKeyType="search"
            />
          </View>
          {/* 8. 여러줄 입력 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>자기소개</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              value={bio}
              onChangeText={setBio}
              multiline={true}
            />
          </View>
          {/* 8. 여러줄 입력 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>자기소개</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              value={bio}
              onChangeText={setBio}
              multiline={true}
            />
          </View>
          {/* 8. 여러줄 입력 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>자기소개</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              value={bio}
              onChangeText={setBio}
              multiline={true}
            />
          </View>
          {/* 8. 여러줄 입력 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>자기소개</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              value={bio}
              onChangeText={setBio}
              multiline={true}
            />
          </View>
          {/* 10. 테스트 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>한번 넣어 보겠습니다.</Text>
            <TextInput style={styles.input} />
          </View>
          {/* 결과 ***********************************/}
          <View style={styles.inputContainer}>
            <Text style={styles.title}>
              뭐라고? 너의 아이디는 {id}라고? 정말 무섭다!🤣
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default InputExampleScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    flex: 1,
  },
  scrollContent: {
    paddingTop: 80,
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    width: "25%",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    width: "75%",
  },
  multiline: {
    height: 100,
  },
});
