import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function BaseButton({ onPress, style, textStyle, text }) {
  const getButtonStyle = () => {
    if (style) {
      return [styles.button, style];
    }
    return [styles.button];
  };

  const getTextStyle = () => {
    if (textStyle) {
      return [styles.text, textStyle];
    }
    return [styles.text];
  };
  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
    >
      <Text style={getTextStyle()}>{text ? text : 'Get Started'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "rgb(79, 70, 229)",
    padding: 16,
    borderRadius: 16,
  },
  text: { color: "white" },
});
