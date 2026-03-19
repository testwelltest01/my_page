import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useContext, useState } from "react";
import { MemoContext } from "../context/MemoContext";
import { SafeAreaView } from "react-native-safe-area-context";

const MemoFormScreen = ({ route, navigation }) => {
  const { id } = route.params; // ID가 있으면 수정, 없으면 생성입니다.
  const { memos, addMemo, updateMemo } = useContext(MemoContext);

  // 수정인 경우 기존 데이터를 찾아둡니다.
  const item = memos.find((m) => m.id === id);

  const [title, setTitle] = useState(item ? item.title : "");
  const [content, setContent] = useState(item ? item.content : "");

  const handleCancel = () => navigation.goBack();

  const handleSave = () => {
    if (id) {
      // 기존 메모가 있으면 업데이트
      updateMemo(id, title, content);
    } else {
      // 신규 작성이면 추가
      addMemo(title, content);
    }
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container} edges={["bottom"]}>
          {/* 입력 영역 */}
          <View style={styles.content}>
            {/* 제목 영역 */}
            <View style={styles.titleSection}>
              <Text style={styles.title}>You are Transcribing ... 🎯</Text>
            </View>

            <TextInput
              style={styles.titleInput}
              placeholder="제목"
              value={title}
              placeholderTextColor="#999"
              onChangeText={(e) => setTitle(e)}
            />
            <View style={styles.divider} />
            <TextInput
              style={styles.contentInput}
              placeholder="내용을 입력하세요..."
              placeholderTextColor="#999"
              value={content}
              multiline={true}
              textAlignVertical="top"
              onChangeText={(e) => setContent(e)}
            />
            <View style={styles.buttonArea}>
              <TouchableOpacity
                style={styles.cancelButtonContainer}
                onPress={handleCancel}
              >
                <Text style={styles.cancelButton}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButtonContainer}
                onPress={handleSave}
              >
                <Text style={styles.saveButton}>저장</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default MemoFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  // 제목 영역
  titleSection: {
    padding: 20,
    paddingBottom: 15,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginVertical: 20,
  },
  contentInput: {
    flex: 1, // 상자를 꽉 채우도록 변경
    fontSize: 17,
    color: "#333",
    lineHeight: 24,
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 16,
    marginBottom: 20,
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  cancelButtonContainer: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: "#f2f2f7",
    alignItems: "center",
  },
  cancelButton: {
    fontSize: 16,
    color: "#666",
    fontWeight: "600",
  },
  saveButtonContainer: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: "#000",
    alignItems: "center",
  },
  saveButton: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});
