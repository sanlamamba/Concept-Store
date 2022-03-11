import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ProductView() {
  return (
    <View style={styles.productList}>
      <ProductBox title="Iphone 13" price={900000} />
      <ProductBox title="Iphone 13" />
      <ProductBox title="Iphone 13" />
      <ProductBox title="Iphone 13" />
      <ProductBox title="Iphone 13" />
      <ProductBox title="Iphone 13" />
    </View>
  );
}

const ProductBox = (props) => {
  return (
    <TouchableOpacity style={styles.productBox}>
      <Image
        style={styles.productImage}
        source={{
          uri: "https://i.picsum.photos/id/830/300/300.jpg?hmac=ir_VjfhHplWelY0wWwUlqdRl_N4KTR-caNJPFMUz2r8",
        }}
      />
      <View>
        <Text style={styles.productTitle}>{props.title}</Text>
        <Text style={styles.productPrice}>
          {props.price ? props.price + " Fcfa" : "Lean More"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productList: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  productBox: {
    borderColor: "#f0f0f0",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 2,
    margin: 5,
    width: "45%",
  },
  productImage: {
    width: "100%",
    height: 135,
  },
  productTitle: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
    padding: 5,
  },
  productPrice: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
    padding: 5,
  },
});
