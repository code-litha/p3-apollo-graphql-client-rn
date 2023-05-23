import { Image, View, Text, Dimensions, TouchableOpacity } from "react-native";
import color from "../styling/color";
import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ product }) {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");

  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Pindah ke detail");
        navigation.push("ProductDetail", {
          productId: product?.id,
        });
      }}
      style={{
        width: width / 2 - 16,
        paddingHorizontal: 5,
        marginBottom: 8,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: product.mainImg,
        }}
        style={{
          width: 160,
          height: 200,
          borderRadius: 16,
          resizeMode: "cover",
          marginBottom: 4,
        }}
      />
      <View>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: color["gray-700"],
          }}
        >
          {product.name}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: color["secondary"],
          }}
        >
          Rp {product.price?.toLocaleString("id-ID") || 0}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
