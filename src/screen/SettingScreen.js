import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../utilities/Colors";

const SettingScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.statusBar}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons
						name="chevron-back"
						size={24}
						color={Colors.primary}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Entypo
						name="dots-three-vertical"
						size={24}
						color={Colors.primary}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					}}
					resizeMode="stretch"
					style={styles.image}
				/>
				<TouchableOpacity
					style={styles.editIconWrapper}
					onPress={() => ""}
				>
					<MaterialCommunityIcons
						name="account-edit"
						size={24}
						color={Colors.primary}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.textContent}>
				<Text style={styles.leadText}> Gianna Davidson</Text>
				<Text style={styles.emailText}>gdavidson24@gmail.com</Text>
				<Text style={styles.emailText}>San Diego, USA</Text>
			</View>
		</View>
	);
};

export default SettingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	statusBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 20,
	},
	imageContainer: {
		height: 250,
		width: 250,
		alignSelf: "center",
		borderRadius: 125,
		borderWidth: 5,
		borderColor: Colors.primary,
	},
	image: {
		height: "100%",
		width: "100%",
		borderRadius: 125,
	},
	editIconWrapper: {
		padding: 10,
		backgroundColor: Colors.light,
		borderWidth: 3,
		borderColor: Colors.primary,
		borderRadius: 50,
		height: 50,
		width: 50,
		alignItems: "center",
		position: "absolute",
		right: 15,
		bottom: 0,
	},
	textContent: {
		padding: 20,
		alignItems: "center",
	},
	leadText: {
		fontFamily: "boldText",
		color: Colors.primary,
		fontSize: 18,
	},
	emailText: {
		marginVertical: 10,
		fontStyle: "italic",
		fontFamily: "regularText",
		color: Colors.gray,
		fontSize: 15,
	},
});
