//
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

//
import { Image, Text } from "react-native-elements";

//!------------------------------------------------------------IMPORTS

const WelcomeScreen = ({ navigation }) => {
	//
	const titleText = useState("Hagakure");
	const bodyText = useState("This is a quote");
	const buttonText = useState("Click Me");
	//
	return (
		<KeyboardAvoidingView style={styles.container}>
			<StatusBar style="light" />
			<Image
				source={require("../assets/samurai.png")}
				style={{ width: 200, height: 200 }}
			/>

			<Text style={styles.titleText}> {titleText}</Text>
			<Text style={styles.bodyText}> {bodyText}</Text>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Table of Contents")}
			>
				<Text style={styles.buttonText}>{buttonText}</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};
export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white"
	},
	titleText: {
		fontSize: 20,
		fontWeight: "bold"
	},
	bodyText: {
		fontSize: 20
	},
	button: {
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 5,
		borderRadius: 3,
		backgroundColor: "darkred",
		alignItems: "center"
	},
	buttonText: {
		color: "white",
		fontSize: 15
	}
});
