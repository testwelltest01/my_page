import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MemoDetailScreen = () => {
  return (
    <View style={styles.container} edges={["bottom"]}>
      {/* 제목 영역 */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>제목</Text>
        <Text style={styles.date}>📅 2026-01-01</Text>
      </View>

      {/* 구분선 */}
      <View style={styles.divider} />

      {/* 내용 영역 */}
      <View style={styles.contentSection}>
        <Text style={styles.content}>내용내용내용내용내용내용</Text>
      </View>

      {/* 하단 버튼 영역 */}
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>✏️ 수정</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>🗑️ 삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MemoDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  // 제목 영역
  titleSection: {
    padding: 20,
    paddingBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
  },
  date: {
    fontSize: 13,
    color: "#999",
  },
  // 구분선
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginHorizontal: 20,
  },
  // 내용 영역
  contentSection: {
    padding: 20,
  },
  content: {
    fontSize: 16,
    color: "#555",
    lineHeight: 26,
  },
  // 하단 버튼
  buttonArea: {
    flexDirection: "row",
    padding: 15,
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  editButton: {
    flex: 1,
    backgroundColor: "#4A90D9",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FF3B30",
  },
  deleteButtonText: {
    color: "#FF3B30",
    fontSize: 16,
    fontWeight: "600",
  },
});
