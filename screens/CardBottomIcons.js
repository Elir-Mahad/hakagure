import React from "react";
import { View } from "react-native";
import styles from "./ScreenStyles";
// icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//
const CardBottomIcons = () => {
	return (
		<View style={styles.edu_icons}>
			<AntDesign name="hearto" size={24} color="black" />
			<MaterialIcons name="save-alt" size={24} color="black" />
			<MaterialIcons name="content-copy" size={24} color="black" />
			<AntDesign name="sharealt" size={24} color="black" />
		</View>
	);
};

export default CardBottomIcons;
