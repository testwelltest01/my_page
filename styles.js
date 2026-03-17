import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginBottom: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
  },
  button: {
    width: "80%",
    height: 70,
    margin: 5,
    borderRadius: 10,
    // justifyContent: "start",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 80,
    gap: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  messageBox: {
    backgroundColor: "#fff",
    marginTop: 30,
    width: "80%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    // 그림자효과 (아이폰)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // 그림자효과 (안드로이드)
    elevation: 4,
  },
  message: {
    fontSize: 24,
  },
  selected: {
    borderWidth: 5,
    borderColor: "#111",
  },
  image: {
    height: 100,
    width: 100,
  },

  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#fff",
  },
});
