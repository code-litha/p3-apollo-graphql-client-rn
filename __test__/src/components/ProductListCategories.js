import {
	View,
	ScrollView,
	TouchableOpacity,
	Text,
	StyleSheet,
} from "react-native";
import color from "../styling/color";

export default function ProductListcategories() {
	return (
		<View
			style={{
				height: 50,
				width: "100%",
			}}
		>
			<ScrollView
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				style={{
					width: "100%",
					flex: 1,
					paddingBottom: 10,
				}}
			>
				<TouchableOpacity style={[styles.categoryCapsule, styles.activeCategory]}>
					<Text style={styles.activeText}>All Product</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.categoryCapsule}>
					<Text style={styles.text}>Woman</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.categoryCapsule}>
					<Text style={styles.text}>Outwear</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.categoryCapsule}>
					<Text style={styles.text}>Jeans</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.categoryCapsule}>
					<Text style={styles.text}>Jacket</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.categoryCapsule}>
					<Text style={styles.text}>Accessory</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	categoryCapsule: {
		borderWidth: 1,
		borderRadius: 16,
		padding: 8,
		marginRight: 8,
	},
	activeCategory: {
		borderColor: color.main,
	},
	activeText: {
		color: color.main,
		fontWeight: "700",
	},
	text: {
		color: color["gray-700"],
	},
});
