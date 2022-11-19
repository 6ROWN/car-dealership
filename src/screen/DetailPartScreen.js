import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Colors from "../utilities/Colors";
import PrimaryButton from "../components/PrimaryButton";

const DetailPartScreen = ({ navigation, route }) => {
	const item = route.params;
	const [quantity, setQuantity] = useState(1);

	const increment = () => {
		setQuantity((prevState) => prevState + 1);
	};

	const decrement = () => {
		setQuantity((prevState) => prevState - 1);
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={{ uri: `${item.image}` }}
				resizeMode="cover"
				style={styles.image}
			>
				<View style={styles.iconWrapper}>
					<TouchableOpacity
						style={styles.iconContent}
						onPress={() => navigation.goBack()}
					>
						<Ionicons
							name="arrow-back"
							size={24}
							color={Colors.primary}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconContent}>
						<Entypo
							name="dots-three-vertical"
							size={24}
							color={Colors.primary}
						/>
					</TouchableOpacity>
				</View>
			</ImageBackground>
			<View style={styles.textContainer}>
				<Text style={styles.productText}>{item.product}</Text>
				<Text style={styles.headerText}>Description</Text>
				<Text style={styles.subText}> {item.description}</Text>
				<Text style={styles.headerText}> Warrant</Text>
				<Text style={styles.subText}>
					{item.warranty} Years Warranty
				</Text>
			</View>
			<View style={styles.checkoutContainer}>
				<View style={styles.priceWrapper}>
					<Text style={styles.price}>
						{" "}
						$ {(parseFloat(item.price) * quantity).toFixed(2)}
					</Text>
				</View>
				<View style={styles.quantityWrapper}>
					<View style={styles.quantityContent}>
						<TouchableOpacity
							style={styles.quantityIconWrapper}
							onPress={increment}
						>
							<Ionicons
								name="add"
								size={24}
								color={Colors.white}
							/>
						</TouchableOpacity>
						<Text style={styles.quantityText}> {quantity}</Text>
						<TouchableOpacity
							style={styles.iconWrapper}
							onPress={decrement}
						>
							<Ionicons
								name="remove"
								size={24}
								color={Colors.white}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity style={styles.cartWrapper}>
					<PrimaryButton> Cart</PrimaryButton>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default DetailPartScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	iconWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	iconContent: {
		padding: 10,
		backgroundColor: Colors.light,
		borderRadius: 10,
	},
	image: {
		width: "100%",
		height: 300,
	},
	textContainer: {
		padding: 20,
	},
	productText: {
		fontFamily: "boldText",
		color: Colors.primary,
		textAlign: "center",
		fontSize: 18,
		marginBottom: 10,
	},
	headerText: {
		fontFamily: "regularText",
		fontWeight: "700",
		letterSpacing: 1.2,
		color: Colors.primary,
		fontSize: 16,
	},
	subText: {
		textAlign: "justify",
		lineHeight: 25,
		paddingVertical: 10,
		fontFamily: "regularText",
		color: Colors.gray,
	},
	checkoutContainer: {
		width: "100%",
		backgroundColor: Colors.primary,
		height: 100,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		padding: 10,
		flex: 1,
	},
	priceWrapper: {
		flex: 1,
	},
	price: {
		color: Colors.white,
		fontFamily: "regularText",
		fontSize: 24,
		fontWeight: "bold",
	},
	quantityWrapper: {
		flex: 1,
		marginHorizontal: 30,
	},
	quantityContent: {
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: Colors.primary,
		padding: 5,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: Colors.white,
	},
	quantityIconWrapper: {
		alignSelf: "center",
	},
	quantityText: {
		fontSize: 24,
		fontFamily: "regularText",
		alignSelf: "center",
		fontWeight: "bold",
		color: Colors.light,
	},

	cartWrapper: {
		flex: 1,
	},
});
