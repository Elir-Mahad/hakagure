//
import React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

//
import { Button, Text } from "react-native-elements";

//!-------------------------------------------------IMPORTS

const TableOfContentsScreen = ({ navigation }) => {
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

			<Button
				// Button is a react-native element.
				title="First Chapter"
				containerStyle={styles.button}
				onPress={() => navigation.navigate("Welcome")}
			/>

			<View
				style={{ height: 100 }}
				// This ensures that when the keyboard pops up,
				// it dosen't overlap with the whole view/div
			/>
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
		width: 200,
		marginTop: 10
	}
});
