//! ------------------------------------------------- IMPORTS
// below are foundational imports that come with the app
import React, { useState } from "react";

// below imports are from react navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

// below are the imports from react native elements
// import { Header } from "react-native-elements";

// below are the different screen components
import WelcomeScreen from "./screens/WelcomeScreen";
// import DrawerNavigator from "./screens/DrawerNavigator";
import StackNavigator from "./screens/StackNavigator";

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

	return (
		<NavigationContainer>
			{/* <Header
				// This header is from react-native-elements
				// We have only have to use it for the drawer navigator.
				// Explanaition regarding this is on the top of DrawerNavigator.js
				backgroundColor="darkred"
				placement="left"
				leftComponent={{ icon: "menu", color: "#fff" }}
				centerComponent={{ text: "Home", style: { color: "#fff" } }}
			/>
			<DrawerNavigator /> */}
			<StackNavigator />
		</NavigationContainer>
	);
}
