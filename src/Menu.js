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
						onSelect={() => navigation.navigate("Welcome あいさつ")}
					>
						<Text style={styles.menu_categoryname}> Welcome </Text>
						<Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/samurai.png")}
						/>
					</MenuOption>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("User guide")}
					>
						<Text style={styles.menu_categoryname}> User guide </Text>
						<Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/info.png")}
						/>
					</MenuOption>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Synopsis がいよう")}
					>
						<Text style={styles.menu_categoryname}> Synopsis </Text>
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
						onSelect={() => navigation.navigate("Education きょういく")}
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
						onSelect={() => navigation.navigate("Courage ゆうき")}
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
						onSelect={() => navigation.navigate("Death しに")}
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
						onSelect={() => navigation.navigate("Conduct こうどう")}
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
						onSelect={() => navigation.navigate("Speech ことば")}
					>
						<Text style={styles.menu_categoryname}> Speech </Text>
						<Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/speech.png")}
						/>
					</MenuOption>
					{/*  */}
					<MenuOption
						//
						style={styles.menu_category}
						onSelect={() => navigation.navigate("Time じかん")}
					>
						<Text style={styles.menu_categoryname}> Time </Text>
						<Image
							//
							style={styles.menu_categoryimage}
							source={require("./screen_assets/time.png")}
						/>
					</MenuOption>
					{/*  */}
				</MenuOptions>
			</Menu>
		</View>
	);
};

export default MyMenu;
