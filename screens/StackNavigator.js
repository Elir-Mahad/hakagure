//! ------------------------------------------------- IMPORTS
// below are foundational imports that come with the app
import React from "react";

// below imports are from react stack navigation
import { createStackNavigator } from "@react-navigation/stack";

// below are the different screen components
import WelcomeScreen from "./WelcomeScreen";
import TableOfContentsScreen from "./TableOfContentsScreen";
import EduOneScreen from "./EduOneScreen";
import EduTwoScreen from "./EduTwoScreen";

//!--- Declare the global screen options and initialize the createStackNaviagtor

const globalScreenOptions = {
	// The constant globalScreenOptions stores the below css styles
	headerStyle: { backgroundColor: "darkred" },
	headerTitleStyle: { color: "white" },
	headerTintiColor: "white"
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
				name="Education 1" // Give the component a name
				component={EduOneScreen} // Import the component
			/>
			<Stack.Screen
				name="Education 2" // Give the component a name
				component={EduTwoScreen} // Import the component
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
