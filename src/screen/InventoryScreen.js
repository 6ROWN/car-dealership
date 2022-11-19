import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import carParts from "../utilities/Inventory";
import PartsList from "../components/PartsList";

const InventoryScreen = () => {
	const [parts, setParts] = useState(carParts);

	// const filterParts = (value) => {
	// 	setParts(console.log();
	// };

	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Ionicons name="cart" size={24} color={Colors.primary} />
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<TextInput
						placeholder="Find your BMW Parts here"
						style={{
							backgroundColor: Colors.white,
							width: 200,
							height: 45,
							padding: 10,
							borderTopLeftRadius: 10,
							borderBottomLeftRadius: 10,
							borderWidth: 2,
							borderColor: Colors.primary,
						}}
						onChangeText={(value) => filterParts(value)}
					/>
					<View
						style={{
							backgroundColor: Colors.primary,
							padding: 10,
							borderTopRightRadius: 10,
							borderBottomRightRadius: 10,
						}}
					>
						<Ionicons
							name="search"
							size={24}
							color={Colors.white}
							onPress={() => {
								"";
							}}
						/>
					</View>
				</View>
			</View>
			<View>
				<Text
					style={{
						padding: 15,
						fontFamily: "boldText",
						color: Colors.secondary,
						fontSize: 20,
					}}
				>
					Parts
				</Text>
			</View>
			<FlatList
				keyExtractor={(item) => item.id}
				data={parts}
				renderItem={({ item }) => <PartsList item={item} />}
				numColumns={"2"}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default InventoryScreen;

const styles = StyleSheet.create({
	container: { flex: 1, paddingVertical: 40, paddingHorizontal: 20 },
	hide: {
		color: "red",
	},
});
