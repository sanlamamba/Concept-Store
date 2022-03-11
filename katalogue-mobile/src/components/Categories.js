import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Categories() {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.categoryScroll}
    >
      <CategorieBox title="Yes" />
      <CategorieBox title="No" />
      <CategorieBox title="No" />
      <CategorieBox title="No" />
      <CategorieBox title="No" />
      <CategorieBox title="No" />
      <CategorieBox title="No" />
    </ScrollView>
  );
}

function CategorieBox(props) {
  return (
    <TouchableOpacity style={styles.categoryBox}>
      <View style={styles.categoryBoxImage}></View>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryScroll: {},
  categoryBox: {
    padding: 5,
    alignItems: "center",
  },
  categoryBoxImage: {
    marginBottom: 5,
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
});
