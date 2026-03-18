import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";

const MemoFormScreen = () => {
  return (
    <View style={styles.container} edges={["bottom"]}>
      {/* 입력 영역 */}
      <View style={styles.content}>
        <TextInput
          style={styles.titleInput}
          placeholder="제목"
          placeholderTextColor="#999"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.contentInput}
          placeholder="내용을 입력하세요..."
          placeholderTextColor="#999"
          multiline={true}
          textAlignVertical="top"
        />
        <View style={styles.buttonArea}>
          <TouchableOpacity>
            <Text style={styles.cancelButton}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.saveButton}>저장</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MemoFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
    padding: 20,
  },
  titleInput: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 15,
  },
  contentInput: {
    flex: 0.3,
    fontSize: 16,
    color: "#333",
    lineHeight: 10,
    backgroundColor: "#f5f5f5",
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    fontSize: 16,
    color: "#666",
  },
  saveButton: {
    fontSize: 16,
    color: "#4A90D9",
    fontWeight: "600",
  },
});
