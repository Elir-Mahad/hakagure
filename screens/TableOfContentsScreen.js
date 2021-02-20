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
					style={styles.table_category}
					// onPress={() => navigation.navigate("Education 1")}
				>
					<Text style={styles.table_categoryname}>Liked quotes </Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.table_category}
					// onPress={() => navigation.navigate("")}
				>
					<Text style={styles.table_categoryname}>Saved quotes</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.categories}>
				<TouchableOpacity
					style={styles.table_category}
					onPress={() => navigation.navigate("Education")}
				>
					<View style={styles.table_titleandcount}>
						<Text style={styles.table_categoryname}>Education</Text>
						<Text style={styles.table_categorycount}>11</Text>
					</View>

					<Image
						//
						style={styles.table_categoryimage}
						source={require("./screen_assets/education.png")}
					/>

					{/* 11 quotes */}
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.table_category}
					onPress={() => navigation.navigate("Courage")}
				>
					<View style={styles.table_titleandcount}>
						<Text style={styles.table_categoryname}>Courage</Text>
						<Text style={styles.table_categorycount}>12</Text>
					</View>

					<Image
						//
						style={styles.table_categoryimage}
						source={require("./screen_assets/courage.png")}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.categories}>
				<TouchableOpacity
					style={styles.table_category}
					onPress={() => navigation.navigate("Death")}
				>
					<View style={styles.table_titleandcount}>
						<Text style={styles.table_categoryname}>Death</Text>
						<Text style={styles.table_categorycount}>18</Text>
					</View>

					<Image
						//
						style={styles.table_categoryimage}
						source={require("./screen_assets/death.png")}
					/>
					{/* 18 quotes */}
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.table_category}
					onPress={() => navigation.navigate("Character")}
				>
					<View style={styles.table_titleandcount}>
						<Text style={styles.table_categoryname}>Character</Text>
						<Text style={styles.table_categorycount}>21</Text>
					</View>

					<Image
						//
						style={styles.table_categoryimage}
						source={require("./screen_assets/character.png")}
					/>
					{/* 21 quotes */}
				</TouchableOpacity>
			</View>

			<View style={styles.categories}>
				<TouchableOpacity
					style={styles.table_category}
					onPress={() => navigation.navigate("Speech")}
				>
					<View style={styles.table_titleandcount}>
						<Text style={styles.table_categoryname}>Speech</Text>
						<Text style={styles.table_categorycount}>6</Text>
					</View>

					<Image
						//
						style={styles.table_categoryimage}
						source={require("./screen_assets/speech.png")}
					/>
					{/* 6 quotes */}
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.table_category}
					onPress={() => navigation.navigate("Time")}
				>
					<View style={styles.table_titleandcount}>
						<Text style={styles.table_categoryname}>Time</Text>
						<Text style={styles.table_categorycount}>5</Text>
					</View>

					<Image
						//
						style={styles.table_categoryimage}
						source={require("./screen_assets/time.png")}
					/>
					{/* 5 quotes */}
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default TableOfContentsScreen;
