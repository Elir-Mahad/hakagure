//! ------------------------------------------------- IMPORTS
// below are foundational imports that come with the app
import React from "react";

// below imports are from react stack navigation
import { createStackNavigator } from "@react-navigation/stack";

// below are the different screen components
import WelcomeScreen from "./WelcomeScreen";
import TableOfContentsScreen from "./TableOfContentsScreen";
import EduScreen from "./all_screens/EduScreen";
import CourageScreen from "./all_screens/CourageScreen";
import DeathScreen from "./all_screens/DeathScreen";
import CharacterScreen from "./all_screens/CharacterScreen";
import SpeechScreen from "./all_screens/SpeechScreen";

//!--- Declare the global screen options and initialize the createStackNaviagtor

const globalScreenOptions = {
	// The constant globalScreenOptions stores the below css styles
	headerStyle: { backgroundColor: "darkgrey" },
	headerTitleStyle: { color: "black" },
	headerTintiColor: "red"
};

const Stack = createStackNavigator();

const StackNavigator = () => {
	//
	return (
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
				name="Education" // Give the component a name
				component={EduScreen} // Import the component
			/>
			<Stack.Screen
				name="Courage" // Give the component a name
				component={CourageScreen} // Import the component
			/>
			<Stack.Screen
				name="Death" // Give the component a name
				component={DeathScreen} // Import the component
			/>
			<Stack.Screen
				name="Character" // Give the component a name
				component={CharacterScreen} // Import the component
			/>
			<Stack.Screen
				name="Speech" // Give the component a name
				component={SpeechScreen} // Import the component
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
