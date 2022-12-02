import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import InventoryScreen from "../screen/InventoryScreen";
import SettingScreen from "../screen/SettingScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../utilities/Colors";
import NotificationScreen from "../screen/NotificationScreen";

const BottomNavigation = () => {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: Colors.primary,
				tabBarInactiveTintColor: Colors.gray,
			}}
			initialRouteName="Home"
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="ios-home-sharp"
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={InventoryScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="store" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="notification"
				component={NotificationScreen}
				options={{
					tabBarBadge: 3,
					tabBarBadgeStyle: { backgroundColor: Colors.secondary },
					tabBarIcon: ({ color }) => (
						<Ionicons
							name="notifications"
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="profileSetting"
				component={SettingScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="settings" size={24} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomNavigation;

const styles = StyleSheet.create({});
