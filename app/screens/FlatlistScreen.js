import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fruitData } from "../data/fruits";

const renderItem = ({ item }) => (
  <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
    <Text style={styles.emoji}>{item.emoji}</Text>
    <Text style={styles.itemName}>{item.name}</Text>
  </View>
);

const renderHeader = () => (
  <View style={styles.header}>
    <Text style={styles.title}>과일 목록</Text>
  </View>
);

const renderFooter = () => (
  <View style={styles.footerContainer}>
    <Text style={styles.footerText}>모두 불러왔습니다.</Text>
  </View>
);

const renderSeparator = () => <View style={styles.separator}></View>;

const FlatlistScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={fruitData}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FlatlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1a1a1a",
    letterSpacing: -0.5,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
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
  emoji: {
    fontSize: 28,
    marginRight: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2d3436",
  },
  separator: {
    height: 12, // 아이템 사이 간격
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
});
