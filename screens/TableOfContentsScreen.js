import React from "react";
import styles from "./ScreenStyles";
//
import { TouchableOpacity, Text } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { Image } from "react-native-elements";

//!-------------------------------------------------IMPORTS

const TableOfContentsScreen = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.table_container}>
			<StatusBar style="light" />

			<Text style={styles.table_titleText}>Table of Contents</Text>

			<Image
				style={styles.table_image}
				source={require("../assets/hagakurelogo.png")}
			/>

			<TouchableOpacity
				style={styles.table_button}
				onPress={() => navigation.navigate("Education 1")}
			>
				<Text style={styles.table_buttonText}> On Education </Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.table_button}
				// onPress={() => navigation.navigate("Welcome")}
			>
				<Text style={styles.table_buttonText}>Second Chapter</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.table_button}
				// onPress={() => navigation.navigate("Welcome")}
			>
				<Text style={styles.table_buttonText}>Third Chapter</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.table_button}
				// onPress={() => navigation.navigate("Welcome")}
			>
				<Text style={styles.table_buttonText}>Fourth Chapter</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.table_button}
				// onPress={() => navigation.navigate("Welcome")}
			>
				<Text style={styles.table_buttonText}>Fifth Chapter</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default TableOfContentsScreen;
