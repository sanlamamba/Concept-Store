import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import color, { colors } from "../../../variables/colors";
export default function Header() {
  return (
    <View style={styles.Header}>
      <View>
        <Text>Logo</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "red",
    width: "100%",
    padding: 15,
    backgroundColor: colors.primary,
  },
});
