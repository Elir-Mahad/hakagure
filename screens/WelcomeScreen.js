//
import React from "react";
import { StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

//
import { Button, Image, Text } from "react-native-elements";
import { samurai } from "../assets/samurai.png";

//!------------------------------------------------------------IMPORTS

const WelcomeScreen = ({ navigation }) => {
	return (
		<KeyboardAvoidingView style={styles.container}>
			<StatusBar style="light" />
			<Image
				source={require("../assets/samurai.png")}
				style={{ width: 200, height: 200 }}
			/>
			<Text h2>HAGAKURE</Text>

			<Button
				// Button is a react-native element.
				title="Next"
				containerStyle={styles.button}
				onPress={() => navigation.navigate("Table of Contents")}
			/>
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
	button: {
		width: 200,
		marginTop: 10
	}
});
