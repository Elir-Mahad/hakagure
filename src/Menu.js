import React from "react";
import styles from "./ScreenStyles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger
} from "react-native-popup-menu";
import { View, Text, Image } from "react-native";

const MyMenu = () => {
	//
	const navigation = useNavigation();
	//
	return (
		<View>
			<Menu>
				<MenuTrigger
					//
					style={styles.menuicon_trigger}
				>
					<Feather name="menu" size={24} color="black" />
				</MenuTrigger>
				{/*  */}
				<MenuOptions
					//
					style={styles.menuoptionsbox}
				>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Description")}
					>
						<Text style={styles.menu_categoryname}> Book Description </Text>
						<Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/description.png")}
						/>
					</MenuOption>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Education")}
					>
						<Text style={styles.menu_categoryname}> Education </Text>
						<Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/education.png")}
						/>
					</MenuOption>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Courage")}
					>
						<Text style={styles.menu_categoryname}> Courage </Text>
						<Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/character.png")}
						/>
					</MenuOption>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Death")}
					>
						<Text style={styles.menu_categoryname}> Death </Text>
						<Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/death.png")}
						/>
					</MenuOption>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Conduct")}
					>
						<Text style={styles.menu_categoryname}> Conduct </Text>
						<Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/character.png")}
						/>
					</MenuOption>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Time")}
					>
						<Text style={styles.menu_categoryname}> Time </Text>
						<Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/time.png")}
						/>
					</MenuOption>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Speech")}
					>
						<Text style={styles.menu_categoryname}> Speech </Text>
						<Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/speech.png")}
						/>
					</MenuOption>
				</MenuOptions>
			</Menu>
		</View>
	);
};

export default MyMenu;
