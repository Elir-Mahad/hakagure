import React from "react";
import styles from "../ScreenStyles";
//
import { TouchableOpacity, Text, ImageBackground } from "react-native";
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
			<ImageBackground
				// the below image wraps the whole view
				source={require("../screen_assets/samuraiwarrior.png")}
				style={styles.backgroundimage}
			>
				{/*  */}
				<StatusBar style="light" />
				{/*  */}
				{/* <Image
					style={styles.edu_image}
					source={require("../screen_assets/hagakurelogo.png")}
				/> */}
				{/*  */}

				<Text style={styles.edu_bodyText}>
					When one is writing a letter, he should think that the recipient will
					make it into a hanging scroll.
				</Text>
				{/*  */}
				<TouchableOpacity
					//
					onPress={() => navigation.navigate("Education 2")}
				>
					<Image
						style={styles.right_arrow}
						source={require("../screen_assets/right-arrow.png")}
					/>
				</TouchableOpacity>
				{/*  */}
			</ImageBackground>
		</KeyboardAvoidingView>
	);
};
export default EduOneScreen;
