import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MemoContext } from "../context/MemoContext";

const renderSeparator = () => <View style={styles.separator} />;

const MemoListScreen = ({ navigation }) => {
  const { memos } = useContext(MemoContext); // 컨텍스트에서 실시간 메모 목록 가져오기

  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [showDeleted, setShowDeleted] = useState(false);

  // 메모나 검색어가 바뀔 때마다 필터링된 리스트를 보여줍니다 (삭제된 건 제외)
  useEffect(() => {
    const list = memos.filter((m) => {
      return (
        (showDeleted || !m.deletedAt) &&
        (m.title.toLowerCase().includes(searchText.toLowerCase()) ||
          m.content.toLowerCase().includes(searchText.toLowerCase()))
      );
    });
    setFilteredList(list);
  }, [memos, searchText, showDeleted]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate("Detail", { id: item.id });
      }}
    >
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPreview} numberOfLines={2}>
          {item.content}
        </Text>

        <Text style={styles.itemDate}>
          {"작성: " + item.createdAt}
          {item.updatedAt && " | 수정: " + item.updatedAt}
          {item.deletedAt && " | 삭제: " + item.deletedAt}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 고정 헤더 */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>나의 메모장</Text>
          <Text style={styles.memoCnt}>{filteredList.length} notes</Text>
        </View>

        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={18}
            color="#999"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search notes..."
            style={styles.textInput}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            returnKeyType="done"
          />
        </View>
      </View>

      <FlatList
        contentContainerStyle={styles.listContent}
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
      />

      {/* 플로팅 버튼 */}
      <TouchableOpacity
        style={[styles.fab1, showDeleted && styles.fab2on]}
        onPress={() => setShowDeleted(!showDeleted)}
      >
        <Ionicons name="trash" size={30} color="#fff" />
      </TouchableOpacity>
      {/* 플로팅 버튼 */}
      <TouchableOpacity
        style={styles.fab2}
        onPress={() => navigation.navigate("Form", { id: null })}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MemoListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1a1a1a",
  },
  memoCnt: {
    fontSize: 14,
    color: "#999",
    fontWeight: "500",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f7",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  listContent: {
    padding: 20,
    paddingBottom: 100,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  itemPreview: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  itemDate: {
    fontSize: 12,
    color: "#bbb",
  },
  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
  },
  fab1: {
    position: "absolute",
    bottom: 110,
    right: 25,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  fab2: {
    position: "absolute",
    bottom: 40,
    right: 25,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  fab2on: {
    backgroundColor: "#FF0000",
  },
});
