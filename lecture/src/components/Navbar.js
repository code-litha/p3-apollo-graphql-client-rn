import { View, Text } from "react-native";
import color from "../styling/color";
import { AntDesign } from "@expo/vector-icons";

export default function Navbar() {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 16,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: color.main,
          // fontFamily: "Gabriela",
        }}
      >
        Clambee
      </Text>
      <View style={{ flexDirection: "row" }}>
        <AntDesign
          name="mail"
          size={24}
          color="black"
          style={{
            marginRight: 16,
          }}
        />
        <AntDesign
          name="shoppingcart"
          size={24}
          color="black"
          style={{
            marginRight: 16,
          }}
        />
        <AntDesign name="bars" size={24} color="black" />
      </View>
    </View>
  );
}
