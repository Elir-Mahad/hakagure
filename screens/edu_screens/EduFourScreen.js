import React from "react";
import styles from "../ScreenStyles";
//
import { TouchableOpacity, Text } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { Image } from "react-native-elements";
//

//!------------------------------------------------------------IMPORTS

const EduFourScreen = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.edu_container}>
			{/*  */}
			<StatusBar style="light" />
			{/*  */}
			<Image
				style={styles.edu_image}
				source={require("../screen_assets/hagakurelogo.png")}
			/>
			{/*  */}

			<Text style={styles.edu_bodyText}>
				Scholars are men who with wit and speech hide their own true cowardice
				and greed.
			</Text>
			{/*  */}
			<TouchableOpacity
				//
				onPress={() => navigation.navigate("Education 5")}
			>
				<Image
					style={styles.right_arrow}
					source={require("../screen_assets/right-arrow.png")}
				/>
			</TouchableOpacity>
			{/*  */}
		</KeyboardAvoidingView>
	);
};
export default EduFourScreen;
