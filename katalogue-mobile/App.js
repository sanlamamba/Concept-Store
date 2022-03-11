import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./src/components/General/Header/Header";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
