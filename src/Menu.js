import React, { useState } from "react";
import styles from "./ScreenStyles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

function MyMenu() {
	//
	const navigation = useNavigation();
	//
	const [content, setContent] = useState(false);
	//
	return (
		<View style={styles.container}>
			{/*Here we will return the view when state is true 
				and will return false if state is false*/}
			{content ? (
				//
				<View>
					<TouchableOpacity
						//
						onPress={() => navigation.navigate("Education")}
					>
						<Text> Education </Text>
					</TouchableOpacity>
					{/*  */}
					<TouchableOpacity
						//
						onPress={() => navigation.navigate("Courage")}
					>
						<Text> Courage </Text>
					</TouchableOpacity>
					{/*  */}
					<TouchableOpacity
						//
						onPress={() => navigation.navigate("Death")}
					>
						<Text> Death </Text>
					</TouchableOpacity>
					{/*  */}
					<TouchableOpacity
						//
						onPress={() => navigation.navigate("Conduct")}
					>
						<Text> Conduct </Text>
					</TouchableOpacity>
					{/*  */}
					<TouchableOpacity
						//
						onPress={() => navigation.navigate("Speech")}
					>
						<Text> Speech </Text>
					</TouchableOpacity>
					{/*  */}
					<TouchableOpacity
						//
						onPress={() => navigation.navigate("Time")}
					>
						<Text> Time </Text>
					</TouchableOpacity>
					{/*  */}
				</View>
			) : null}
			<TouchableOpacity
				//
				onPress={() => setContent(!content)}
			>
				<Feather name="menu" size={24} color="black" />
			</TouchableOpacity>
		</View>
	);
}

export default MyMenu;
