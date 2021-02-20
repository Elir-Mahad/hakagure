import React from "react";
import styles from "./ScreenStyles";
//
import { TouchableOpacity, Text, View } from "react-native";
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

			<View style={styles.categories}>
				<TouchableOpacity
					style={styles.table_button}
					// onPress={() => navigation.navigate("Education 1")}
				>
					<Text style={styles.table_buttonText}>Liked quotes </Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.table_button}
					// onPress={() => navigation.navigate("")}
				>
					<Text style={styles.table_buttonText}>Saved quotes</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.categories}>
				<TouchableOpacity
					style={styles.table_button}
					onPress={() => navigation.navigate("Education")}
				>
					<Text style={styles.table_buttonText}>Education</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.table_button}
					onPress={() => navigation.navigate("Courage")}
				>
					<Text style={styles.table_buttonText}>Courage</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.categories}>
				<TouchableOpacity
					style={styles.table_button}
					onPress={() => navigation.navigate("Death")}
				>
					<Text style={styles.table_buttonText}>Death</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.table_button}
					onPress={() => navigation.navigate("Character")}
				>
					<Text style={styles.table_buttonText}>Character</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.categories}>
				<TouchableOpacity
					style={styles.table_button}
					// onPress={() => navigation.navigate("Welcome")}
				>
					<Text style={styles.table_buttonText}>Fifth Chapter</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.table_button}
					// onPress={() => navigation.navigate("Welcome")}
				>
					<Text style={styles.table_buttonText}>Sixth chapter</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default TableOfContentsScreen;
