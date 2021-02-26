import React from "react";
import styles from "./ScreenStyles";
//
import { TouchableOpacity, Text, ImageBackground, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { Image } from "react-native-elements";
//!------------------------------------------------------------IMPORTS

const WelcomeScreenTwo = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.welcome_container}>
			{/*  */}
			<StatusBar style="light" />
			{/*  */}
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screens/screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<Text style={styles.welcome_bodyText}>
						Written during a time when there was no officially sanctioned
						samurai fighting, the book grapples with the dilemma of maintaining
						a warrior class in the absence of war and reflects the author's
						nostalgia for a world that had disappeared before he was born.
					</Text>
					<TouchableOpacity
						//
						style={styles.welcome_button}
						onPress={() => navigation.navigate("Table of Contents")}
					>
						<Image
							style={styles.right_arrow}
							source={require("../screens/screen_assets/right-arrow.png")}
						/>
					</TouchableOpacity>
				</ImageBackground>
			</View>
			{/*  */}
			<Text></Text>
		</KeyboardAvoidingView>
	);
};
export default WelcomeScreenTwo;
