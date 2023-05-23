import { View, ScrollView, StyleSheet, Text } from "react-native";
import ProductCard from "./ProductCard";
import color from "../styling/color";

export default function ProductListSection({ title }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal={true} style={{ paddingBottom: 8 }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: "100%",
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: color.main,
  },
});
