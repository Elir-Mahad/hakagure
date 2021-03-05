//! ------------------------------------------------- IMPORTS
// below are foundational imports that come with the app
import React from "react";

// below imports are from react stack navigation
import { createStackNavigator } from "@react-navigation/stack";

// below are the different screen components
import WelcomeScreenOne from "./WelcomeScreenOne";
import WelcomeScreenTwo from "./WelcomeScreenTwo";
import TableOfContentsScreen from "./TableOfContentsScreen";
//
import LikedQuotesScreen from "./all_screens/LikedQuotesScreen";
// import DislikedQuotes from "./DislikedQuotesScreen";
import EduScreen from "./all_screens/EduScreen";
import CourageScreen from "./all_screens/CourageScreen";
import DeathScreen from "./all_screens/DeathScreen";
import CharacterScreen from "./all_screens/CharacterScreen";
import SpeechScreen from "./all_screens/SpeechScreen";
import TimeScreen from "./all_screens/TimeScreen";

//!--- Declare the global screen options and initialize the createStackNaviagtor

const globalScreenOptions = {
	// The constant globalScreenOptions stores the below css styles
	headerStyle: { backgroundColor: "#222831" },
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
				component={WelcomeScreenOne} // Import the component
			/>
			<Stack.Screen
				name="Description" // Give the component a name
				component={WelcomeScreenTwo} // Import the component
			/>
			<Stack.Screen
				name="Table of Contents" // Give the component a name
				component={TableOfContentsScreen} // Import the component
			/>
			<Stack.Screen
				name="Liked" // Give the component a name
				component={LikedQuotesScreen} // Import the component
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
			<Stack.Screen
				name="Time" // Give the component a name
				component={TimeScreen} // Import the component
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
