//
import React from "react";
import styles from "./ScreenStyles";
//
import { TouchableOpacity, Text, View, ImageBackground } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { Image } from "react-native-elements";

//!------------------------------------------------------------IMPORTS

const WelcomeScreenOne = ({ navigation }) => {
	//
	return (
		<KeyboardAvoidingView style={styles.welcome_container}>
			{/*  */}
			<StatusBar style="light" />
			{/*  */}
			<ImageBackground
				source={require("../screens/screen_assets/samuraitemple.jpg")}
				style={styles.WelcomeBackgroundImage}
				imageStyle={{ borderRadius: 5 }}
			>
				<View style={styles.japandengtitles}>
					{/*  */}
					<View style={styles.TextEng}>
						{/*  */}
						<View style={styles.LettersEngOne}>
							<Text style={styles.EngLetter}> H </Text>
							<Text style={styles.EngLetter}> A </Text>
							<Text style={styles.EngLetter}> G </Text>
							<Text style={styles.EngLetter}> A </Text>
							<Text style={styles.EngLetter}> K </Text>
							<Text style={styles.EngLetter}> U </Text>
							<Text style={styles.EngLetter}> R </Text>
							<Text style={styles.EngLetter}> E </Text>
						</View>
						<View style={styles.LettersEngTwo}>
							<View style={styles.WrittenBy}>
								<Text style={styles.EngLetter}> B </Text>
								<Text style={styles.EngLetter}> Y </Text>
							</View>
							<Text style={styles.EngLetter}> Y </Text>
							<Text style={styles.EngLetter}> A </Text>
							<Text style={styles.EngLetter}> M </Text>
							<Text style={styles.EngLetter}> A </Text>
							<Text style={styles.EngLetter}> M </Text>
							<Text style={styles.EngLetter}> O </Text>
							<Text style={styles.EngLetter}> T </Text>
							<Text style={styles.EngLetter}> O </Text>
							{/* Hagakure - Yamamoto Tsunetomo */}
						</View>
					</View>
					<View style={styles.LettersJp}>
						<Text style={styles.JpLetter}> 葉 </Text>
						<Text style={styles.JpLetter}> 隠 </Text>
						<Text style={styles.JpLetter}>—</Text>
						<Text style={styles.JpLetter}> 山 </Text>
						<Text style={styles.JpLetter}> 本 </Text>
						<Text style={styles.JpLetter}> 常 </Text>
						<Text style={styles.JpLetter}> 朝 </Text>
						{/* 葉隠 - 山本 常朝  */}
					</View>
				</View>
				<TouchableOpacity
					//
					style={styles.next_button}
					onPress={() => navigation.navigate("Description")}
				>
					<Image
						style={styles.right_arrow}
						source={require("../screens/screen_assets/right-arrow.png")}
					/>
				</TouchableOpacity>
				{/*  */}
			</ImageBackground>
		</KeyboardAvoidingView>
	);
};
export default WelcomeScreenOne;
