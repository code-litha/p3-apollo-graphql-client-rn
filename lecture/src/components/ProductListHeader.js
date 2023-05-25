import { StyleSheet, View, Text, TextInput } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import color from "../styling/color";

export default function ProductListHeader() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Explore The All New Clothes</Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
          borderWidth: 1,
          borderRadius: 16,
          borderColor: "grey",
        }}
      >
        <View style={{ width: "10%", paddingLeft: 8 }}>
          <AntDesign name="search1" size={24} color="grey" />
        </View>
        <TextInput
          style={styles.searchInput}
          value={searchInput}
          onChangeText={setSearchInput}
          placeholder="Search products"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    paddingVertical: 16,
  },
  headerTitle: {
    textAlign: "center",
    width: "100%",
    fontSize: 36,
    // fontFamily: "Gabriela",
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    padding: 10,
    width: "90%",
    borderRadius: 16,
    color: color["gray-700"],
  },
});
