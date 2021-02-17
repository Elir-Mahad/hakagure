import React from "react";
import styles from "../ScreenStyles";
//
import { TouchableOpacity, Text, ImageBackground, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { Image } from "react-native-elements";
//

//!------------------------------------------------------------IMPORTS

const EduOneScreen = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.edu_container}>
			<ImageBackground
				// the below image wraps the whole view
				source={require("../screen_assets/japan1.png")}
				style={styles.backgroundimage}
			>
				{/*  */}
				<StatusBar style="light" />
				{/*  */}
				<View style={styles.wrap_image}>
					{/* I wrapped the image with a view so that i can center it.
						When i set the background image for the screen, 
						the logo image re-aligned itself 
						to the left side of the screen, 
						so i had to give this element the wrap_image class 
						and then use alignItems: "center" to center it*/}
					<Image
						style={styles.edu_image}
						source={require("../screen_assets/hagakurelogo.png")}
					/>
				</View>
				{/*  */}

				<Text style={styles.edu_bodyText}>
					When one is writing a letter, he should think that the recipient will
					make it into a hanging scroll.
				</Text>
				{/*  */}
				<TouchableOpacity
					// The image is wrapped with TouchabeOpacity
					// so that it becomes clickable and redirects.
					// However, there is another utility.
					// When i set the background image for the screen,
					// the arrow image re-aligned itself
					// to the left side of the screen
					// so i had to give this element the edu_button class
					// and then use alignItems: "center" to center it
					style={styles.edu_button}
					onPress={() => navigation.navigate("Education 2")}
				>
					<Image
						style={styles.right_arrow}
						source={require("../screen_assets/right-arrow.png")}
					/>
				</TouchableOpacity>
				{/*  */}
			</ImageBackground>
		</KeyboardAvoidingView>
	);
};
export default EduOneScreen;
