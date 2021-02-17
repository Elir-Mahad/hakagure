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

const EduEightScreen = ({ navigation }) => {
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
				A man received an oral teaching concerning the Bravery. He neither wrote
				it down nor committed it to memory but rather forgot it completely.
				Then, in facing real situations, he acted on impulse and the things that
				he had learned became wisdom of his own.
			</Text>
			{/*  */}
			<TouchableOpacity
				//
				onPress={() => navigation.navigate("Education 9")}
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
export default EduEightScreen;
