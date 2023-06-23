import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import color from "../styling/color";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import BaseButton from "../components/BaseButton";
import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { dataProducts } from "../../assets/data/products";
import { gql, useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../config/queries";
import { renderPrice } from "../utils/renderPrice";

export default function ProductDetail({ navigation, route }) {
  const { productId } = route.params;
  const { loading, data, error } = useQuery(GET_PRODUCT, {
    variables: {
      productId,
    },
  });
  const [product, setProduct] = useState({});

  useEffect(() => {
    // console.log(data, "<<< data");
    setProduct(data?.product || {});
    // const findProduct = dataProducts.find((p) => p?.id == productId);
    // setProduct(findProduct || {});
  }, [data]);

  if (loading) return <ActivityIndicator size={"large"} />;
  if (error)
    return (
      <View>
        <Text>Error</Text>
      </View>
    );

  // console.log(loading, data, error);
  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <ScrollView style={styles.sectionContainer}>
        <ImageBackground
          source={{
            uri: product.mainImg,
          }}
          style={{
            width: "100%",
            height: 300,
            resizeMode: "center",
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
              padding: 8,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="arrowleft"
                size={24}
                style={{
                  backgroundColor: "white",
                  color: color["main"],
                  width: 40,
                  height: 40,
                  textAlign: "center",
                  paddingTop: 8,
                  borderRadius: 20,
                }}
              />
            </TouchableOpacity>
            <AntDesign
              name="heart"
              size={24}
              style={{
                backgroundColor: color["pink"],
                color: "white",
                width: 40,
                height: 40,
                textAlign: "center",
                paddingTop: 8,
                borderRadius: 20,
              }}
            />
          </View>
        </ImageBackground>
        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>{product.name}</Text>
          <View style={styles.subHeading}>
            <Text style={styles.sectionPrice}>
              Rp. {renderPrice(product.price)},00
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign
                name="star"
                size={18}
                color="orange"
                style={{
                  marginRight: 4,
                }}
              />
              <Text style={styles.sectionPrice}>4.5</Text>
              <Text
                style={{
                  marginLeft: 4,
                }}
              >
                From 1k+ review
              </Text>
            </View>
          </View>
          <Text
            style={{
              marginBottom: 8,
              color: color["gray-800"],
            }}
          >
            By Instructor Phase 3
          </Text>
          <Text style={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            voluptatem odio accusamus ratione aspernatur et impedit libero sequi
            omnis, eaque ea, eum dolores expedita eius magni ex excepturi. Nemo,
            voluptates!
          </Text>
          <View
            style={{
              marginBottom: 16,
            }}
          >
            <Text style={{ marginBottom: 8, fontWeight: "bold" }}>
              Choose Size
            </Text>
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeText}>S</Text>
              <Text style={styles.sizeText}>M</Text>
              <Text style={styles.sizeText}>L</Text>
              <Text style={[styles.sizeText, styles.sizeActive]}>XL</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginBottom: 12,
            }}
          >
            {product?.Images?.map((image, idx) => (
              <Image
                key={`image-${idx}`}
                source={{
                  uri: image?.imgUrl,
                  width: 80,
                  height: 80,
                  resizeMode: "contain",
                }}
                style={{
                  borderRadius: 16,
                  marginRight: 8,
                }}
              />
            ))}
          </View>
          <BaseButton
            text="Back To Home - Navigate"
            textStyle={{
              fontSize: 18,
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("ProductList")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    padding: 16,
    zIndex: 2,
    elevation: 2,
    marginTop: -32,
    marginBottom: 10,
    borderRadius: 16,
    backgroundColor: "white",
    shadowColor: "white",
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    // fontFamily: 'Gabriela',
    marginBottom: 8,
    color: color.main,
  },
  sectionPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: color["gray-900"],
  },
  subHeading: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: color["gray-700"],
    lineHeight: 18,
    textAlign: "justify",
    marginBottom: 16,
  },
  sizeContainer: {
    flexDirection: "row",
  },
  sizeText: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderWidth: 1,
    borderColor: color["gray-700"],
    marginRight: 4,
    color: color["gray-700"],
    textAlign: "center",
  },
  sizeActive: {
    borderColor: color.main,
    color: color.main,
    fontWeight: "bold",
    borderWidth: 2,
  },
});
