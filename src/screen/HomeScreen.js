import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	FlatList,
	ScrollView,
	ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../utilities/Colors";
import { Ionicons } from "@expo/vector-icons";
import Cars from "../utilities/Car";

const HomeScreen = ({ navigation }) => {
	const [activeModel, setActiveModel] = useState(1);
	const [filteredModel, SetFilteredModel] = useState([]);

	const filterModel = (id) => {
		SetFilteredModel(Cars.filter((x) => x.id == id));
	};

	useEffect(() => {
		filterModel(1);
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar hidden={false} />
			<View style={styles.info}>
				<View style={styles.location}>
					<Ionicons
						name="location-sharp"
						size={24}
						color={Colors.gray}
					/>
					<Text style={{ color: Colors.gray }}>
						{" "}
						Springboard, New Jersey
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate("profileSetting")}
				>
					<Image
						source={{
							uri: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
						}}
						resizeMode="cover"
						style={styles.avatar}
					/>
				</TouchableOpacity>
			</View>
			<View>
				<FlatList
					keyExtractor={(item) => item.id}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					data={Cars}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => {
								setActiveModel(item.id);
								filterModel(item.id);
							}}
							style={[
								styles.categoryBtn,
								{
									backgroundColor:
										activeModel == item.id
											? Colors.secondary
											: Colors.primary,
								},
							]}
						>
							<Text style={styles.categoryBtnText}>
								{item.model}
							</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.InfoContainer}>
					<Text style={{ fontSize: 16 }}>Available cars for you</Text>
					<Ionicons name="filter" size={24} />
				</View>

				{filteredModel.map((item) => (
					<View key={item.id}>
						{item.vehicles.map((x) => (
							<TouchableOpacity
								onPress={() =>
									navigation.navigate("Details", x)
								}
								key={x.id}
								style={styles.imageContainer}
							>
								<ImageBackground
									source={{ uri: `${x.imageUrl}` }}
									resizeMode="stretch"
									style={styles.image}
								/>

								<View style={styles.textContainer}>
									<Text style={styles.headingText}>
										{x.name}
									</Text>
									<Text style={styles.subText}>{x.year}</Text>
									<Text style={styles.grayText}>
										$ {x.price}
									</Text>
								</View>
							</TouchableOpacity>
						))}
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 30,
		paddingHorizontal: 20,
	},
	info: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	location: { flexDirection: "row", alignItems: "center" },
	avatar: {
		height: 35,
		width: 35,
		borderRadius: 50,
	},
	categoryBtn: {
		marginHorizontal: 10,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginVertical: 25,
		borderRadius: 10,
	},
	categoryBtnText: {
		color: Colors.white,
		fontFamily: "boldText",
		textTransform: "uppercase",
	},
	InfoContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	imageContainer: {
		width: "100%",
		height: 160,
		marginVertical: 15,
		backgroundColor: Colors.white,
		borderRadius: 25,
		elevation: 4,
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	image: {
		height: "100%",
		width: "100%",
		borderRadius: 25,
		flex: 1,
	},
	textContainer: { flex: 0.5, padding: 10 },
	headingText: {
		fontFamily: "boldText",
		color: Colors.primary,
	},
	subText: {
		marginVertical: 20,
		fontFamily: "regularText",
		color: Colors.secondary,
		fontWeight: "700",
		letterSpacing: 1.3,
	},
	grayText: {
		fontFamily: "regularText",
		alignItems: "center",
		fontWeight: "700",
		color: Colors.gray,
	},
});
