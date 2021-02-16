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
			{/*  */}
			<StatusBar style="light" />
			{/*  */}
			<Image
				style={styles.image}
				source={require("../assets/hagakurelogo.png")}
			/>
			{/*  */}
			<Text style={styles.titleText}> Hagakure 葉隠</Text>
			{/*  */}
			<Text style={styles.subtitleText}> Yamamoto Tsunetomo </Text>
			{/*  */}
			<Text style={styles.bodyText}>
				Written during a time when there was no officially sanctioned samurai
				fighting, the book grapples with the dilemma of maintaining a warrior
				class in the absence of war and reflects the author's nostalgia for a
				world that had disappeared before he was born.
			</Text>
			{/*  */}
			<TouchableOpacity
				//
				style={styles.button}
				onPress={() => navigation.navigate("Table of Contents")}
			>
				<Text style={styles.buttonText}>Table of Contents</Text>
			</TouchableOpacity>
			{/*  */}
		</KeyboardAvoidingView>
	);
};
export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "white"
	},
	titleText: {
		fontSize: 30,
		paddingTop: 5,
		paddingBottom: 5
	},
	subtitleText: {
		fontSize: 20,
		paddingTop: 5,
		paddingBottom: 5
	},
	bodyText: {
		fontSize: 20,
		padding: 5,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 10,
		textAlign: "center",
		borderRadius: 5,
		borderColor: "black",
		borderWidth: 2
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 100
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
