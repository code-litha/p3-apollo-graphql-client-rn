import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import BaseButton from "../components/BaseButton";
import { CREATE_PRODUCT, GET_PRODUCTS } from "../config/queries";

const ProductForm = ({ navigation }) => {
  // console.log(props, "<<< propss");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [addProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [
      { query: GET_PRODUCTS },
      // 'Products' // pakai ini jika sebelumnya pernah melakukan fetch query ini
    ],
    onCompleted: (value) => {
      // console.log(value, "<<<< value");
      ToastAndroid.showWithGravity(
        `Successfully created product ${value?.createProduct?.id}`,
        100,
        ToastAndroid.TOP
      );
      setName("");
      setDescription("");
      setPrice("");
      navigation.navigate("ProductList");
    },
  });

  const submitProduct = () => {
    const payload = {
      name,
      description,
      price: +price,
      mainImg:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455969/sub/goods_455969_sub14.jpg?width=750",
    };
    // console.log(payload);
    addProduct({
      variables: {
        newProduct: payload,
      },
    });
  };

  if (loading) return <ActivityIndicator size="large" />;
  if (error)
    return (
      <View>
        <Text>Error</Text>
      </View>
    );

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
