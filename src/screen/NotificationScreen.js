import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Colors from "../utilities/Colors";

const NotificationScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.statusBar}>
				<Ionicons name="arrow-back" size={24} color={Colors.primary} />
				<Text style={styles.header}>Latest News</Text>
				<Entypo
					name="dots-three-vertical"
					size={24}
					color={Colors.primary}
				/>
			</View>
			<View>
				<View></View>
			</View>
		</View>
	);
};

export default NotificationScreen;

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	statusBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	header: {
		color: Colors.primary,
		fontFamily: "boldText",
		fontSize: 15,
	},
});
