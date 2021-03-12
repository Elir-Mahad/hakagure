//! ------------------------------------------------- IMPORTS
// below are foundational imports that come with the app
import React from "react";

// below imports are from react stack navigation
import { createStackNavigator } from "@react-navigation/stack";

// import heart/basket icon
import BasketHeartIcon from "./BasketHeartIcon";

// below are the different screen components
import WelcomeScreen from "./WelcomeScreen";
import DescriptionScreen from "./DescriptionScreen";
//
import LikedQuotesScreen from "./all_screens/LikedQuotesScreen";
import EduScreen from "./all_screens/EduScreen";
import CourageScreen from "./all_screens/CourageScreen";
import DeathScreen from "./all_screens/DeathScreen";
import ConductScreen from "./all_screens/ConductScreen";
import SpeechScreen from "./all_screens/SpeechScreen";
import TimeScreen from "./all_screens/TimeScreen";
//
import MyMenu from "./Menu";
//

//!--- Declare the global screen options and initialize the createStackNaviagtor

const globalScreenOptions = {
	// The constant globalScreenOptions stores the below css styles
	headerStyle: { backgroundColor: "#f4f4f2" },
	headerTitleStyle: { color: "black" },
	headerTintiColor: "black",
	headerRight: () => <BasketHeartIcon />,
	headerLeft: () => <MyMenu />
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
				name="Description" // Give the component a name
				component={DescriptionScreen} // Import the component
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
				name="Conduct" // Give the component a name
				component={ConductScreen} // Import the component
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
