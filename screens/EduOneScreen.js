import React from "react";
import styles from "./ScreenStyles";
//
import { TouchableOpacity, Text } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { Image } from "react-native-elements";
//

//!------------------------------------------------------------IMPORTS

const EduOneScreen = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.edu_container}>
			{/*  */}
			<StatusBar style="light" />
			{/*  */}
			<Image
				style={styles.edu_image}
				source={require("../assets/hagakurelogo.png")}
			/>
			{/*  */}

			<Text style={styles.edu_bodyText}>
				When one is writing a letter, he should think that the recipient will
				make it into a hanging scroll.
			</Text>
			{/*  */}
			<TouchableOpacity
				//
				style={styles.edu_button}
				onPress={() => navigation.navigate("Education 2")}
			>
				<Image
					style={styles.right_arrow}
					source={require("../assets/right-arrow.png")}
				/>
			</TouchableOpacity>
			{/*  */}
		</KeyboardAvoidingView>
	);
};
export default EduOneScreen;
