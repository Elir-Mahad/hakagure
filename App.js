//! ------------------------------------------------- IMPORTS

// below are foundational imports that come with the app
import React, { useState } from "react";

// below imports are from react navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// below are the different screen components
import WelcomeScreen from "./screens/WelcomeScreen";
import TableOfContentsScreen from "./screens/TableOfContentsScreen";
import EduOneScreen from "./screens/EduOneScreen";
import EduTwoScreen from "./screens/EduTwoScreen";

// below are the necessary imports for custom fonts

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

//! ------------------------------------------------- getFonts function

const getFonts = () =>
	// the const getFonts stores the loaded fonts which are in the fonts folder
	Font.loadAsync({
		"Inconsolata-Regular": require("./assets/fonts/Inconsolata-Regular.ttf")
	});

//! ------------------------------------------------- APP functional component

export default function App() {
	//
	// --- First we will initialize our fonts

	const [fontsLoaded, setFontsLoaded] = useState(false);
	// (fontsLoaded) The constant fontsLoaded is boolean with value of false
	// (setfontsLoaded) And we declare that we will mainpulate this boolean
	// By wrapping the boolean in a UseState()

	if (fontsLoaded) {
		// if the fonts are loaded
		<WelcomeScreen />;
		// then return the welcome screen
	} else {
		// othewrise
		return (
			<AppLoading
				// use expo app loading props
				startAsync={getFonts}
				// to get the fonts
				onFinish={() => setFontsLoaded(true)}
				// then change the boolean of the fontsLoaded constant to true
				onError={console.warn}
				// or if there is an error, then send a warning via console
			/>
		);
	}

	//--- Next we wil declare the global screen options and initialize the createStackNaviagtor

	const globalScreenOptions = {
		// The constant globalScreenOptions stores the below css styles
		headerStyle: { backgroundColor: "darkred" },
		headerTitleStyle: { color: "white" },
		headerTintiColor: "white"
	};

	const Stack = createStackNavigator();
	// The contsant Stack is going to store all the screens

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
