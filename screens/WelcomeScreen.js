//
import React from "react";
import styles from "./ScreenStyles";
//
import { TouchableOpacity, Text } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { Image } from "react-native-elements";

//!------------------------------------------------------------IMPORTS

const WelcomeScreen = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.welcome_container}>
			{/*  */}
			<StatusBar style="light" />
			{/*  */}
			<Image
				style={styles.welcome_image}
				source={require("../assets/hagakurelogo.png")}
			/>
			{/*  */}
			<Text style={styles.welcome_titleText}> Hagakure 葉隠</Text>
			{/*  */}
			<Text style={styles.welcome_subtitleText}> Yamamoto Tsunetomo </Text>
			{/*  */}
			<Text style={styles.welcome_bodyText}>
				Written during a time when there was no officially sanctioned samurai
				fighting, the book grapples with the dilemma of maintaining a warrior
				class in the absence of war and reflects the author's nostalgia for a
				world that had disappeared before he was born.
			</Text>
			{/*  */}
			<TouchableOpacity
				//
				style={styles.welcome_button}
				onPress={() => navigation.navigate("Table of Contents")}
			>
				{/* <Text style={styles.buttonText}>Table of Contents</Text> */}
				<Image
					style={styles.right_arrow}
					source={require("../assets/right-arrow.png")}
				/>
			</TouchableOpacity>
			{/*  */}
		</KeyboardAvoidingView>
	);
};
export default WelcomeScreen;
