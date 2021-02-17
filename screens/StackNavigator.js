//! ------------------------------------------------- IMPORTS
// below are foundational imports that come with the app
import React from "react";

// below imports are from react stack navigation
import { createStackNavigator } from "@react-navigation/stack";

// below are the different screen components
import WelcomeScreen from "./WelcomeScreen";
import TableOfContentsScreen from "./TableOfContentsScreen";
//
import EduOneScreen from "./edu_screens/EduOneScreen";
import EduTwoScreen from "./edu_screens/EduTwoScreen";
import EduThreeScreen from "./edu_screens/EduThreeScreen";
import EduFourScreen from "./edu_screens/EduFourScreen";
import EduFiveScreen from "./edu_screens/EduFiveScreen";
import EduSixScreen from "./edu_screens/EduSixScreen";
import EduSevenScreen from "./edu_screens/EduSevenScreen";
import EduEightScreen from "./edu_screens/EduEightScreen";
import EduNineScreen from "./edu_screens/EduNineScreen";
import EduTenScreen from "./edu_screens/EduTenScreen";

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
			<Stack.Screen
				name="Education 3" // Give the component a name
				component={EduThreeScreen} // Import the component
			/>
			<Stack.Screen
				name="Education 4" // Give the component a name
				component={EduFourScreen} // Import the component
			/>
			<Stack.Screen
				name="Education 5" // Give the component a name
				component={EduFiveScreen} // Import the component
			/>
			<Stack.Screen
				name="Education 6" // Give the component a name
				component={EduSixScreen} // Import the component
			/>
			<Stack.Screen
				name="Education 7" // Give the component a name
				component={EduSevenScreen} // Import the component
			/>
			<Stack.Screen
				name="Education 8" // Give the component a name
				component={EduEightScreen} // Import the component
			/>
			<Stack.Screen
				name="Education 9" // Give the component a name
				component={EduNineScreen} // Import the component
			/>
			<Stack.Screen
				name="Education 10" // Give the component a name
				component={EduTenScreen} // Import the component
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;
