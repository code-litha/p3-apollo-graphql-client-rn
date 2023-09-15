import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import color from "../styling/color";
import ProductListHeader from "./ProductListHeader";
import ProductListCategories from "./ProductListCategories";
import { gql, useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../config/queries";

export default function ProductListMain({ title }) {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  const renderItem = ({ item }) => <ProductCard product={item} />;

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error...</Text>
      </View>
    );
  }

  return (
    <View style={styles.sectionContainer}>
      <FlatList
        data={data?.products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ paddingBottom: 8 }}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListHeaderComponent={
          <>
            <ProductListHeader />
            <ProductListCategories />
            <Text style={styles.sectionTitle}>{title}</Text>
          </>
        }
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    width: "100%",
    padding: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: color.main,
  },
});
