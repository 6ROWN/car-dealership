import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import {
	Ionicons,
	Entypo,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "../utilities/Colors";
import SecondaryButton from "../components/SecondaryButton";

const DetailScreen = ({ navigation, route }) => {
	const carInfo = route.params;
	return (
		<ScrollView style={styles.container}>
			<ImageBackground
				source={{ uri: `${carInfo.imageUrl}` }}
				resizeMode="contain"
				style={{
					height: 300,
					width: "100%",
				}}
			>
				<View style={styles.flexHorizontal}>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						style={styles.iconContainer}
					>
						<Ionicons
							name="arrow-back-sharp"
							color={Colors.primary}
							size={24}
						/>
					</TouchableOpacity>
					<View style={styles.iconContainer}>
						<Entypo
							name="dots-three-vertical"
							color={Colors.primary}
							size={24}
						/>
					</View>
				</View>

				<View
					style={[styles.flexHorizontal, { top: 200, padding: 20 }]}
				>
					<Text style={styles.leadText}>
						{carInfo.year} {carInfo.name}
					</Text>
					<Text style={styles.leadText}> $ {carInfo.price}</Text>
				</View>
			</ImageBackground>
			<View style={[styles.flexHorizontal, { paddingHorizontal: 20 }]}>
				<View style={styles.itemBox}>
					<Text style={styles.itemTextTitle}>Max Speed</Text>

					<Text style={styles.itemSubText}>
						{carInfo.maxVelocity} km/hr
					</Text>
					<Ionicons
						name="speedometer"
						size={24}
						color={Colors.gray}
					/>
				</View>
				<View style={styles.itemBox}>
					<Text style={styles.itemTextTitle}>0 - 100 km/hr</Text>

					<Text style={styles.itemSubText}>
						{carInfo.acceleration} sec
					</Text>
					<MaterialCommunityIcons
						name="car-turbocharger"
						size={24}
						color={Colors.gray}
					/>
				</View>
				<View style={styles.itemBox}>
					<Text style={styles.itemTextTitle}>Max Power</Text>

					<Text style={styles.itemSubText}>
						{carInfo.horsePower} hp
					</Text>

					<MaterialCommunityIcons
						name="engine"
						size={24}
						color={Colors.gray}
					/>
				</View>
			</View>
			<View style={styles.overviewContainer}>
				<Text style={styles.overviewHeader}>Overview</Text>
				<Text style={styles.overviewText}>{carInfo.description}</Text>
			</View>
			<View style={[styles.flexHorizontal, { padding: 10 }]}>
				<Text style={styles.leadText}>Interior</Text>
				<Ionicons
					name="arrow-forward"
					size={24}
					color={Colors.primary}
				/>
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View style={styles.flexHorizontal}>
					<Image
						source={{ uri: `${carInfo.interior.imageUrl}` }}
						resizeMode="cover"
						style={styles.interiorImage}
					/>
					<Image
						source={{ uri: `${carInfo.interior.imageUrl2}` }}
						resizeMode="cover"
						style={styles.interiorImage}
					/>
					<Image
						source={{ uri: `${carInfo.interior.imageUrl3}` }}
						resizeMode="cover"
						style={styles.interiorImage}
					/>
					<Image
						source={{ uri: `${carInfo.interior.imageUrl4}` }}
						resizeMode="cover"
						style={styles.interiorImage}
					/>
				</View>
			</ScrollView>
			<View style={{ marginVertical: 20 }}>
				<View style={styles.performanceContainer}>
					<View style={styles.performanceItem}>
						<FontAwesome5 name="gas-pump" size={24} color="black" />
						<Text style={styles.performanceText}>
							{carInfo.fuel}
						</Text>
					</View>
					<View style={styles.performanceItem}>
						<MaterialCommunityIcons
							name="car-door"
							size={24}
							color="black"
						/>
						<Text style={styles.performanceText}>
							{carInfo.doors} Doors
						</Text>
					</View>
				</View>
				<View style={styles.performanceContainer}>
					<View style={styles.performanceItem}>
						<Ionicons name="people" size={24} color="black" />
						<Text style={styles.performanceText}>
							{carInfo.capacity} People
						</Text>
					</View>
					<View style={styles.performanceItem}>
						<MaterialCommunityIcons
							name="car-shift-pattern"
							size={24}
							color="black"
						/>
						<Text style={styles.performanceText}>
							{carInfo.torque}
						</Text>
					</View>
				</View>
			</View>

			<View style={styles.btnContainer}>
				<SecondaryButton title="TEST DRIVE" />
			</View>
		</ScrollView>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		paddingTop: 30,
	},
	flexHorizontal: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	iconContainer: {
		width: 40,
		height: 40,
		backgroundColor: Colors.light,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 12,
	},
	leadText: {
		fontFamily: "boldText",
		color: Colors.primary,
	},
	itemBox: {
		width: 100,
		backgroundColor: Colors.white,
		borderRadius: 6,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		elevation: 2,
	},
	itemTextTitle: {
		fontFamily: "boldText",
		color: Colors.primary,
		textAlign: "center",
	},
	itemSubText: {
		marginVertical: 5,
		color: Colors.secondary,
		fontFamily: "regularText",
	},
	overviewContainer: { padding: 30 },
	overviewHeader: {
		textAlign: "center",
		fontFamily: "boldText",
		fontSize: 18,
		color: Colors.primary,
	},
	overviewText: {
		paddingTop: 15,
		lineHeight: 24,
		fontFamily: "regularText",
		color: Colors.dark,
		textAlign: "justify",
	},
	interiorImage: {
		height: 100,
		width: 120,
		borderWidth: 4,
		borderColor: Colors.primary,
		borderRadius: 10,
		marginHorizontal: 10,
	},
	performanceContainer: {
		marginVertical: 10,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	performanceItem: {
		height: 70,
		width: 150,
		backgroundColor: Colors.light,
		flexDirection: "row",
		padding: 10,
		justifyContent: "space-around",
		alignItems: "center",
		borderRadius: 10,
	},
	performanceText: {
		fontSize: 15,
		textTransform: "capitalize",
		fontFamily: "regularText",
	},
	btnContainer: {
		paddingBottom: 50,
	},
});
