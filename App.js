import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardScreen from "./src/screen/OnboardScreen";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import BottomNavigation from "./src/Navigation/BottomNavigation";
import DetailScreen from "./src/screen/DetailScreen";
import DetailPartScreen from "./src/screen/DetailPartScreen";
import EditProfile from "./src/screen/EditProfile";
export default function App() {
	const [loaded] = useFonts({
		boldText: require("./assets/fonts/Montserrat-Bold.ttf"),
		regularText: require("./assets/fonts/Montserrat-Regular.ttf"),
	});

	if (!loaded) {
		return null;
	}

	const stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<stack.Navigator screenOptions={{ headerShown: false }}>
				<stack.Screen name="onboard" component={OnboardScreen} />
				<stack.Screen name="home" component={BottomNavigation} />
				<stack.Screen name="Details" component={DetailScreen} />
				<stack.Screen name="PartDetails" component={DetailPartScreen} />
				<stack.Screen name="EditProfile" component={EditProfile} />
			</stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
