import homeImage from "../../assets/home-img-girl.jpg";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import BaseButton from "../components/BaseButton";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={homeImage}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{
          opacity: 0.9,
        }}
      >
        <View
          style={{
            paddingHorizontal: 8,
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              color: "rgb(67, 56, 202)",
              marginBottom: 16,
              fontSize: 32,
              // fontFamily: 'Gabriela',
              paddingTop: 64,
              flex: 1,
            }}
          >
            Clambee
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: 16,
                padding: 16,
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  borderBottomColor: "rgb(79, 70, 229)",
                  borderBottomWidth: 1,
                  paddingBottom: 8,
                }}
              >
                <Text style={styles.textTitle}>Freshen Up Your Look</Text>
              </View>
              <Text
                style={{
                  color: "rgb(79, 70, 229)",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Sink into our collection for stimulating your true beauty
              </Text>
            </View>
            <BaseButton
              textStyle={{
                fontSize: 16,
              }}
              onPress={() => navigation.push("ProductTab")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 30,
    // fontSize: 32,
    textAlign: "center",
    color: "rgb(67, 56, 202)",
    // fontFamily: "Gabriela",
    fontWeight: "700",
  },
});
