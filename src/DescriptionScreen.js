import React from "react";
import styles from "./ScreenStyles";
//
import { TouchableOpacity, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { Image } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//!------------------------------------------------------------IMPORTS

const DescriptionScreen = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.DescriptionContainer}>
			{/*  */}
			<StatusBar style="dark" />
			{/*  */}
			<Image
				//
				style={styles.DescriptionImage}
				source={require("./screen_assets/harakiri.jpg")}
			/>
			{/*  */}
			<Text style={styles.DescriptionTextOne}>
				Hagakure was Written during a time when there was no officially
				sanctioned samurai fighting.
			</Text>
			<Text style={styles.DescriptionTextTwo}>
				The book grapples with the dilemma of maintaining a warrior class in the
				absence of war and reflects the author's nostalgia for a world that had
				disappeared before he was born.
			</Text>
			<TouchableOpacity
				//
				style={styles.next_button}
				onPress={() => navigation.navigate("Education")}
			>
				<MaterialCommunityIcons
					//
					name="chevron-right-circle-outline"
					size={40}
					color="white"
				/>
			</TouchableOpacity>
			{/*  */}
			<Text></Text>
		</KeyboardAvoidingView>
	);
};
export default DescriptionScreen;
