// below are foundational imports that come with the app
import React from "react";
// import { StyleSheet } from "react-native";

// below imports are from react navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// below are the different screen components
import WelcomeScreen from "./screens/WelcomeScreen";
import TableOfContentsScreen from "./screens/TableOfContentsScreen";
import EduOneScreen from "./screens/EduOneScreen";
import EduTwoScreen from "./screens/EduTwoScreen";

// below are the imports for two different fonts
import AppLoading from "expo-app-loading"; // app-loading is a necessary expo feature for uploading fonts
import {
	useFonts,
	PatrickHand_400Regular
} from "@expo-google-fonts/patrick-hand";

//! ------------------------------------------------- IMPORTS

const Stack = createStackNavigator();
// The contsant Stack is going to store all the screens

export default function App() {
	//!--------------------------------------------------FONTS

	// First we will initialize our fonts

	let [fontsLoaded] = useFonts({
		// the constant fontsLoaded declares that we shall use the below fonts
		PatrickHand_400Regular
	});

	if (!fontsLoaded) {
		// if the font's are loaded
		return <AppLoading />;
		// then proceed
		// This conditional statement is part of the expo google-fonts code
	}

	//!-------------------------------------------------------------------------

	let globalScreenOptions = {
		// The constant globalScreenOptions stores the below css styles
		headerStyle: { backgroundColor: "darkred" },
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
				<Stack.Screen
					name="Education 1" // Give the component a name
					component={EduOneScreen} // Import the component
				/>
				<Stack.Screen
					name="Education 2" // Give the component a name
					component={EduTwoScreen} // Import the component
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
