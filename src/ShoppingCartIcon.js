import React from "react";
import styles from "./ScreenStyles";
//
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//
import { useStateValue } from "./StateProvider";

const ShoppingCartIcon = () => {
	//
	const [{ basket }] = useStateValue();
	//
	console.log(basket);
	//
	return (
		<View style={styles.basketandcount}>
			<Ionicons
				//
				name="basket-outline"
				size={30}
				color="black"
			/>
			<Text
				//
				style={styles.itemcount}
			>
				{basket?.length}
			</Text>
		</View>
	);
};

export default ShoppingCartIcon;
