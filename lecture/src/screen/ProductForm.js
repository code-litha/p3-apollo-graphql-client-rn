import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import BaseButton from "../components/BaseButton";

const ProductForm = ({ navigation }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const submitProduct = () => {
    const payload = {
      name,
      description,
      price: +price,
      mainImg:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455969/sub/goods_455969_sub14.jpg?width=750",
    };
    console.log(payload);
  };

  return (
    <SafeAreaView
      style={{
        margin: 16,
      }}
    >
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="description"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
        placeholder="price"
        keyboardType="numeric"
      />
      <BaseButton onPress={submitProduct} text="submit" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    backgroundColor: "white",
  },
});

export default ProductForm;
