//
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";

//
import { Image } from "react-native-elements";

//!------------------------------------------------------------IMPORTS

const EduTwoScreen = ({ navigation }) => {
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

			<Text style={styles.bodyText}>
				We learn about the sayings and deeds of the men of old in order to
				entrust ourselves to their wisdom and prevent selfishness.
			</Text>
			{/*  */}
			<TouchableOpacity
				//
				style={styles.button}
				onPress={() => navigation.navigate("Table of Contents")}
			>
				<Text style={styles.buttonText}>Next</Text>
			</TouchableOpacity>
			{/*  */}
		</KeyboardAvoidingView>
	);
};
export default EduTwoScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "white"
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 100
	},
	bodyText: {
		fontFamily: "PatrickHand_400Regular",
		fontSize: 30,
		padding: 5,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
		marginTop: 20,
		textAlign: "center",
		borderRadius: 5,
		borderColor: "black",
		borderWidth: 2
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
		fontSize: 17,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 20,
		paddingRight: 20
	}
});
