import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../utilities/Colors";
import { useNavigation } from "@react-navigation/native";

const PartsList = ({ item }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => navigation.navigate("PartDetails", item)}
		>
			<Image
				source={{ uri: `${item.image}` }}
				resizeMode="stretch"
				style={styles.image}
			/>
			<View>
				<Text style={styles.productTitle}>{item.product}</Text>
				<Text style={styles.price}> $ {item.price}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PartsList;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		padding: 10,
		width: "45%",
		borderRadius: 20,
		backgroundColor: Colors.light,
		margin: 10,
	},
	image: { height: 120, width: "100%", padding: 10, borderRadius: 10 },
	productTitle: {
		fontFamily: "boldText",
		color: Colors.primary,
		paddingVertical: 15,
	},
	price: {
		fontFamily: "boldText",
		color: Colors.dark,
	},
});
