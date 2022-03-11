import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/General/Header/Header";
import Categories from "../components/Categories";
import ProductView from "../components/General/ProductView";

const Home = () => {
  return (
    <ScrollView class={styles.home}>
      <View style={styles.homepage}>
        <View class={styles.homeText}>
          <Text class={styles.h2}>Home</Text>
        </View>
        {/* CATEGORIES */}
        <Categories />

        {/* Produit Vedette */}
        <Text>Featured Products</Text>
        <ProductView featured />

        {/*RECEMMENT VUE*/}
        {/* CATEGORY SECTIONS */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  homepage: {
    padding: 5,
  },
  homeText: {
    height: "500px",
    backgroundColor: "blue",
    fontWeight: "900",
  },
  h2: {
    fontSize: 65,
  },
});
export default Home;
