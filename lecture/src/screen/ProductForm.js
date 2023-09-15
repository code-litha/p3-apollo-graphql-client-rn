import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import BaseButton from "../components/BaseButton";
import { gql, useMutation } from "@apollo/client";
import { ADD_PRODUCT, GET_PRODUCTS } from "../config/queries";

const ProductForm = ({ navigation }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [funcCreateProduct, { data, loading, error }] = useMutation(
    ADD_PRODUCT,
    {
      refetchQueries: [GET_PRODUCTS],
      onCompleted: () => {
        // ketika selesai, maka mau pindah ke 'ProductList'
        navigation.navigate("ProductList");
      },
    }
  );

  const submitProduct = () => {
    const payload = {
      name,
      description,
      price: +price,
      mainImg:
        "https://www.pngplay.com/wp-content/uploads/2/Dress-Shirt-PNG-Photo-Image.png",
    };
    console.log(payload, "<<< payload");
    funcCreateProduct({
      variables: {
        newProduct: payload,
      },
    });
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
