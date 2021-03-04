import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./ScreenStyles";
//
import LeftQuote from "./LeftQuote";
import RightQuote from "./RightQuote";
// icons
import { AntDesign } from "@expo/vector-icons";

import { useStateValue } from "./StateProvider.js";

function LongQuoteContainer({ id, quoteText }) {
	// split apart the object, and grab the id, title, image, price,rating

	const [{}, dispatch] = useStateValue();
	// THIS IS THE DATA LAYER FROM STATE PROVIDER
	// THIS IS USUALLY SUMMONED
	// WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
	// OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT

	const addToBasket = () => {
		// console.log();
		// add item to basket
		dispatch({
			type: "ADD_TO_BASKET", // this is the action.type from the reducer.js
			item: {
				id: id, // fetch the id of the item that's being added
				quoteText: quoteText
			}
		});
	};

	return (
		<View style={styles.quote_container}>
			<ImageBackground
				// the below image wraps the whole view
				source={require("./screen_assets/black.png")}
				style={styles.backgroundimage}
				imageStyle={{ borderRadius: 5 }}
			>
				<View style={styles.textandquotes}>
					<LeftQuote />
					<Text style={styles.longquote}>{quoteText}</Text>
					<RightQuote />
				</View>
			</ImageBackground>
			<View style={styles.category_icons}>
				<AntDesign
					//
					name="hearto"
					size={24}
					color="black"
					onPress={addToBasket}
				/>
			</View>
		</View>
	);
}

export default LongQuoteContainer;
