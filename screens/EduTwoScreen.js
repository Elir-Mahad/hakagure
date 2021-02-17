//
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./ScreenStyles";
//
import { Image } from "react-native-elements";

//!------------------------------------------------------------IMPORTS

const EduTwoScreen = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.edu_container}>
			{/*  */}
			<StatusBar style="light" />
			{/*  */}
			<Image
				style={styles.edu_image}
				source={require("../assets/hagakurelogo.png")}
			/>
			{/*  */}

			<Text style={styles.edu_bodyText}>
				We learn about the sayings and deeds of the men of old in order to
				entrust ourselves to their wisdom and prevent selfishness.
			</Text>
			{/*  */}
			<TouchableOpacity
				//
				style={styles.edu_button}
				onPress={() => navigation.navigate("Table of Contents")}
			>
				<Text style={styles.edu_buttonText}>Next</Text>
			</TouchableOpacity>
			{/*  */}
		</KeyboardAvoidingView>
	);
};
export default EduTwoScreen;
