import React from "react";
import { View } from "react-native";
import styles from "./ScreenStyles";
// icons
import { FontAwesome } from "@expo/vector-icons";
//
const LeftQuote = () => {
	return (
		<View>
			<FontAwesome
				style={styles.quotes_left}
				name="quote-left"
				size={54}
				color="white"
			/>
		</View>
	);
};

export default LeftQuote;
