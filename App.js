// below are foundational imports that come with the app
import React from "react";
import { StyleSheet } from "react-native";

// below imports are from react navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// below are the different screen components
import WelcomeScreen from "./screens/WelcomeScreen";
import TableOfContentsScreen from "./screens/TableOfContentsScreen";

//! ------------------------------------------------- IMPORTS

const Stack = createStackNavigator();
// The contsant Stack is going to store all the screens

export default function App() {
	const globalScreenOptions = {
		// The constant globalScreenOptions stores the below css styles
		headerStyle: { backgroundColor: "#2c68ed" },
		headerTitleStyle: { color: "white" },
		headerTintiColor: "white"
	};

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={globalScreenOptions}>
				<Stack.Screen
					name="Welcome" // Give the component a name
					component={WelcomeScreen} // Import the component
				/>
				<Stack.Screen
					name="Table of Contents" // Give the component a name
					component={TableOfContentsScreen} // Import the component
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center"
// 	}
// });
