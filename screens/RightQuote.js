import React from "react";
import { View } from "react-native";
import styles from "./ScreenStyles";
// icons
import { FontAwesome } from "@expo/vector-icons";
//
const RightQuote = () => {
	return (
		<View>
			<FontAwesome
				style={styles.quotes_right}
				name="quote-right"
				size={54}
				color="white"
			/>
		</View>
	);
};

export default RightQuote;
