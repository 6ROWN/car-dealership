import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Slider from "../components/Slider";

const OnboardScreen = () => {
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<Slider />
		</View>
	);
};

export default OnboardScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
