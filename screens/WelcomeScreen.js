//
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

//
import { Image } from "react-native-elements";

//!------------------------------------------------------------IMPORTS

const WelcomeScreen = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.container}>
			<StatusBar style="light" />
			<Image
				source={require("../assets/samurai.png")}
				style={{ width: 200, height: 200 }}
			/>

			<Text style={styles.titleText}> Hagakure</Text>
			{/*  */}
			<Text style={styles.bodyText}> This is a quote </Text>

			<TouchableOpacity
				//
				style={styles.button}
				onPress={() => navigation.navigate("Table of Contents")}
			>
				<Text style={styles.buttonText}>Click Me</Text>
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
		fontWeight: "bold",
		paddingTop: 5,
		paddingBottom: 5
	},
	bodyText: {
		fontSize: 20,
		paddingTop: 5,
		paddingBottom: 5
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
		fontSize: 15,
		paddingTop: 5,
		paddingBottom: 5
	}
});
