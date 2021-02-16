//
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

//
import { Text } from "react-native-elements";

//!-------------------------------------------------IMPORTS

const TableOfContentsScreen = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.container}>
			<StatusBar style="light" />

			<Text
				// Text is a react-native element.
				h3
				style={{ marginBottom: 50 }}
			>
				Table of Contents
			</Text>

			<TouchableOpacity
				//
				style={styles.button}
				onPress={() => navigation.navigate("Welcome")}
			>
				<Text style={styles.buttonText}>First Chapter</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default TableOfContentsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white"
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
