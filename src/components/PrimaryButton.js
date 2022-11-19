import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../utilities/Colors";

const PrimaryButton = ({ children, pressHandler }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={pressHandler}>
			<Text style={styles.btnText}>{children}</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	button: {
		padding: 20,
		backgroundColor: Colors.white,
		width: "90%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		borderRadius: 20,
	},
	btnText: {
		fontFamily: "boldText",
		fontSize: 18,
		color: Colors.primary,
	},
});
