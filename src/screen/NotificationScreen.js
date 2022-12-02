import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Colors from "../utilities/Colors";

const NotificationScreen = ({ navigation }) => {
	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<View style={styles.statusBar}>
				<Ionicons
					name="arrow-back"
					size={24}
					color={Colors.primary}
					onPress={() => navigation.goBack()}
				/>
				<Text style={styles.header}>Latest News</Text>
				<Entypo
					name="dots-three-vertical"
					size={24}
					color={Colors.primary}
				/>
			</View>
			<View style={styles.cardBody}>
				<TouchableOpacity style={styles.card}>
					<Image
						source={{
							uri: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
						}}
						resizeMode="cover"
						style={styles.image}
					/>
					<View style={styles.content}>
						<Text style={styles.dateText}>October 3, 2022</Text>
						<Text style={styles.title}>
							BMW hatches an EV battery with 30% more range
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.card}>
					<Image
						source={{
							uri: "https://images.unsplash.com/photo-1651078944944-5d5507799a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
						}}
						resizeMode="cover"
						style={styles.image}
					/>
					<View style={styles.content}>
						<Text style={styles.dateText}>October 3, 2022</Text>
						<Text style={styles.title}>
							BMW Group doubles sales of fully-electric vehicles{" "}
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.card}>
					<Image
						source={{
							uri: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80",
						}}
						resizeMode="cover"
						style={styles.image}
					/>
					<View style={styles.content}>
						<Text style={styles.dateText}>October 17, 2022</Text>
						<Text style={styles.title}>
							This is the BMW XM: Super-powerful luxury SUV coming
							in 2023
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.card}>
					<Image
						source={{
							uri: "https://images.unsplash.com/photo-1527383418406-f85a3b146499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
						}}
						resizeMode="cover"
						style={styles.image}
					/>
					<View style={styles.content}>
						<Text style={styles.dateText}>October 3, 2022</Text>
						<Text style={styles.title}>
							BMW Operating System 8 will run with Android
							Automotive on some future BMW models
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.card}>
					<Image
						source={{
							uri: "https://images.unsplash.com/photo-1595802546009-f54d71fb2235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
						}}
						resizeMode="cover"
						style={styles.image}
					/>
					<View style={styles.content}>
						<Text style={styles.dateText}>October 3, 2022</Text>
						<Text style={styles.title}>
							BMW technology: How the carmaker is developing its
							autonomous driving system
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
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
	cardBody: {
		paddingVertical: 20,
	},
	card: {
		width: "100%",
		height: 250,
		backgroundColor: Colors.light,
		borderRadius: 15,
		marginVertical: 15,
	},
	image: {
		width: "100%",
		height: "60%",
		borderTopRightRadius: 15,
		borderTopLeftRadius: 15,
	},
	content: {
		padding: 15,
	},
	dateText: {
		color: Colors.gray,
		fontWeight: "regularText",
		paddingBottom: 10,
	},
	title: {
		fontFamily: "boldText",
		color: Colors.dark,
	},
});
