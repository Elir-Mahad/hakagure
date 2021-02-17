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

const EduTenScreen = ({ navigation }) => {
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
				When the time comes, there is no moment for reasoning. And if you have
				not done your inquiring beforehand , there is most often shame.
			</Text>
			{/*  */}
			<TouchableOpacity
				//
				onPress={() => navigation.navigate("Table of Contents")}
			>
				{/* <Image
					style={styles.right_arrow}
					source={require("../assets/right-arrow.png")}
				/> */}
				<Text style={styles.edu_bodyText}> Table of contents </Text>
			</TouchableOpacity>
			{/*  */}
		</KeyboardAvoidingView>
	);
};
export default EduTenScreen;
