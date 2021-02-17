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

const EduFiveScreen = ({ navigation }) => {
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
				Calculating people are contemptible. The reason for this is that
				calculation deals with loss and gain. Death is considered loss and life
				is considered gain. Thus, death is something that such a person does not
				care for, and he is contemptible.
			</Text>
			{/*  */}
			<TouchableOpacity
				//
				onPress={() => navigation.navigate("Education 6")}
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
export default EduFiveScreen;
