// The way to navigate the screens using this file is
// called the drawer navigation.
// You swipe from left to right on the screen
// and a menu appears from the left.
// This screen navigator system contains all the screens.
// It is exactly the same as the StackNavigator.
// The only difference is that when you are using this type
// of navigation, you cannot use the globalscreenoptions.
// The global screen options allows you the style a pre-made header
// that appears on all the screens.
// For the stack and tab navigators,
// you can use the global screen options.
// For the drawer navigator, you have to use something else
// like a header from react native elements.

//! ------------------------------------------------- IMPORTS
import React from "react";

// below imports are from react drawer navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

// below are the different screen components
import WelcomeScreen from "./WelcomeScreen";
import TableOfContentsScreen from "./TableOfContentsScreen";
import EduOneScreen from "./edu_screens/EduOneScreen";
import EduTwoScreen from "./edu_screens/EduTwoScreen";

//!--- Initialize the createDrawerNaviagtor

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	//
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name="Welcome" // Give the component a name
				component={WelcomeScreen} // Import the component
			/>
			<Drawer.Screen
				name="Table of Contents" // Give the component a name
				component={TableOfContentsScreen} // Import the component
			/>
			<Drawer.Screen
				name="Education 1" // Give the component a name
				component={EduOneScreen} // Import the component
			/>
			<Drawer.Screen
				name="Education 2" // Give the component a name
				component={EduTwoScreen} // Import the component
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
