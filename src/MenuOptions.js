import React from "react";
import styles from "./ScreenStyles";
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuOptions = () => {
	//
	const navigation = useNavigation();
	//
	return (
		<KeyboardAvoidingView>
			<View style={styles.menuoptions}>
				<TouchableOpacity
					//
					style={styles.menu_category}
					onPress={() => navigation.navigate("Description")}
				>
					<Text style={styles.menu_categoryname}> Description </Text>
					<Image
						//
						style={styles.menu_categoryimage}
						source={require("./screen_assets/description.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					//
					style={styles.menu_category}
					onPress={() => navigation.navigate("Education")}
				>
					<Text style={styles.menu_categoryname}> Education </Text>
					<Image
						//
						style={styles.menu_categoryimage}
						source={require("./screen_assets/education.png")}
					/>
				</TouchableOpacity>
				{/*  */}
				<TouchableOpacity
					//
					style={styles.menu_category}
					onPress={() => navigation.navigate("Courage")}
				>
					<Text style={styles.menu_categoryname}> Courage </Text>
					<Image
						//
						style={styles.menu_categoryimage}
						source={require("./screen_assets/character.png")}
					/>
				</TouchableOpacity>
				{/*  */}
				<TouchableOpacity
					//
					style={styles.menu_category}
					onPress={() => navigation.navigate("Death")}
				>
					<Text style={styles.menu_categoryname}> Death </Text>
					<Image
						//
						style={styles.menu_categoryimage}
						source={require("./screen_assets/death.png")}
					/>
				</TouchableOpacity>
				{/*  */}
				<TouchableOpacity
					//
					style={styles.menu_category}
					onPress={() => navigation.navigate("Conduct")}
				>
					<Text style={styles.menu_categoryname}> Conduct </Text>
					<Image
						//
						style={styles.menu_categoryimage}
						source={require("./screen_assets/character.png")}
					/>
				</TouchableOpacity>
				{/*  */}
				<TouchableOpacity
					//
					style={styles.menu_category}
					onPress={() => navigation.navigate("Time")}
				>
					<Text style={styles.menu_categoryname}> Time </Text>
					<Image
						//
						style={styles.menu_categoryimage}
						source={require("./screen_assets/time.png")}
					/>
				</TouchableOpacity>
				{/*  */}
				<TouchableOpacity
					//
					style={styles.menu_category}
					onPress={() => navigation.navigate("Speech")}
				>
					<Text style={styles.menu_categoryname}> Speech </Text>
					<Image
						//
						style={styles.menu_categoryimage}
						source={require("./screen_assets/speech.png")}
					/>
				</TouchableOpacity>
				{/*  */}
			</View>
		</KeyboardAvoidingView>
	);
};

export default MenuOptions;
