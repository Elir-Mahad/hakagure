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

const EduSevenScreen = ({ navigation }) => {
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
				Discrimination will never be brought to a conclusion. With an intense,
				fresh and undelaying spirit, one must make his judgments within the
				space of seven breaths. It is a matter of being determined and having
				the spirit to break right through to the other side.
			</Text>
			{/*  */}
			<TouchableOpacity
				//
				onPress={() => navigation.navigate("Education 8")}
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
export default EduSevenScreen;
