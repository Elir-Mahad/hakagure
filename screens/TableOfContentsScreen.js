//
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

//
import { Image } from "react-native-elements";

//!-------------------------------------------------IMPORTS

const TableOfContentsScreen = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.container}>
			<StatusBar style="light" />

			<Text style={styles.titleText}>Table of Contents</Text>

			<Image
				style={styles.image}
				source={require("../assets/hagakurelogo.png")}
			/>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Education")}
			>
				<Text style={styles.buttonText}> On Education </Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				// onPress={() => navigation.navigate("Welcome")}
			>
				<Text style={styles.buttonText}>Second Chapter</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				// onPress={() => navigation.navigate("Welcome")}
			>
				<Text style={styles.buttonText}>Third Chapter</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				// onPress={() => navigation.navigate("Welcome")}
			>
				<Text style={styles.buttonText}>Fourth Chapter</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				// onPress={() => navigation.navigate("Welcome")}
			>
				<Text style={styles.buttonText}>Fifth Chapter</Text>
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
	titleText: {
		fontSize: 25,
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 5,
		borderRadius: 5,
		borderColor: "black",
		borderWidth: 2
	},
	image: {
		width: 100,
		height: 100,
		marginBottom: 15,
		marginTop: 15,
		borderRadius: 100
	},
	button: {
		marginBottom: 15,
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 5,
		borderRadius: 3,
		backgroundColor: "darkred",
		alignItems: "center",
		width: 250
	},
	buttonText: {
		color: "white",
		fontSize: 17,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 20,
		paddingRight: 20
	}
});
