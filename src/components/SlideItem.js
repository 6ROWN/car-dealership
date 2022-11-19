import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	useWindowDimensions,
} from "react-native";
import PrimaryButton from "./PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import Colors from "../utilities/Colors";

const SlideItem = ({ item }) => {
	const { width, height } = useWindowDimensions();
	const navigation = useNavigation();

	return (
		<View style={{ flex: 1 }}>
			<ImageBackground
				source={{ uri: `${item.imgUrl}` }}
				resizeMode="cover"
				style={{ height, width }}
			>
				<View style={styles.textWrap}>
					<Text style={styles.header}>{item.title}</Text>
					<Text style={styles.description}>{item.description}</Text>
				</View>
				<View>
					<PrimaryButton
						pressHandler={() => navigation.navigate("home")}
					>
						Get Started
					</PrimaryButton>
				</View>
			</ImageBackground>
		</View>
	);
};

export default SlideItem;

const styles = StyleSheet.create({
	container: { flex: 1 },
	header: {
		fontFamily: "boldText",
		fontSize: 35,
		color: Colors.primary,
	},
	description: {
		marginTop: 50,
		fontFamily: "regularText",
		fontSize: 20,
		lineHeight: 25,
		color: Colors.light,
		fontWeight: "600",
		textShadowColor: Colors.secondary,
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 2,
		lineHeight: 30,
	},
	textWrap: {
		justifyContent: "center",
		alignItems: "center",
		flex: 0.9,
		paddingHorizontal: 20,
	},
});
