// MemoListScreen.js
import { SafeAreaView } from "react-native-safe-area-context";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { memoData } from "../data/memoData";
import { memo, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const renderItem = ({ item }) => (
  <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
    <Text style={styles.emoji}>{item.title}</Text>
    <Text style={styles.itemName}>{item.content}</Text>
  </View>
);

const renderHeader = () => (
  <View style={styles.header}>
    <Text style={styles.memoCnt}>총 {memoData.length}개의 메모</Text>
  </View>
);

const renderSeparator = () => <View style={styles.separator}></View>;

const MemoListScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [memoList, setMemoList] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Memo</Text>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="메모 검색..."
            style={styles.textInput}
            value={searchText}
            onPress={(e) => setSearchText(e)}
          />
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="search" size={20} color="#888" />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        contentContainerStyle={styles.listContent}
        data={memoData}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
      />
      {/* 플로팅 버튼 */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MemoListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    marginTop: 0,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 20,
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    // Android Elevation
    elevation: 3,
  },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  footerContainer: {
    paddingVertical: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#a0a0a0",
    fontWeight: "500",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 10,
  },
  searchBtn: {
    padding: 8,
  },
  memoCnt: {
    color: "#333",
  },
  // 플로팅 버튼 스타일
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#4A90D9",
    justifyContent: "center",
    alignItems: "center",
    // 그림자 (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // 그림자 (Android)
    elevation: 8,
  },
  fabText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "300",
    marginTop: -2, // 시각적 중앙 보정
  },
});
