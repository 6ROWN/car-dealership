import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../utilities/Colors";

const SecondaryButton = ({ pressHandler, title }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={pressHandler}>
			<Text style={styles.btnText}>{title}</Text>
		</TouchableOpacity>
	);
};

export default SecondaryButton;

const styles = StyleSheet.create({
	button: {
		padding: 20,
		backgroundColor: Colors.primary,
		width: "90%",
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
		borderRadius: 20,
	},
	btnText: {
		fontFamily: "boldText",
		fontSize: 18,
		color: Colors.white,
		letterSpacing: 2,
	},
});
