import React from "react";
import { Text, View, ImageBackground, TouchableHighlight } from "react-native";
import styles from "./ScreenStyles";
//
import LeftQuote from "./LeftQuote";
import RightQuote from "./RightQuote";
//
import { AntDesign } from "@expo/vector-icons";
//
import { useStateValue } from "./StateProvider";

function LikedQuotesContainer({ id, title, quoteText }) {
	//
	const [{}, dispatch] = useStateValue();
	// THIS IS THE DATA LAYER FROM STATE PROVIDER
	// THIS IS USUALLY SUMMONED
	// WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
	// OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT

	const removeFromBasket = () => {
		// remove item from basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			// this is the action.type from the reducer.js
			id: id
			// fetch the id of the item that's being removed
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
					<Text style={styles.quotetitle}> {title}</Text>
					<LeftQuote />
					<Text style={styles.thequote}>{quoteText}</Text>
					<RightQuote />
				</View>
			</ImageBackground>
			<View style={styles.category_icons}>
				<TouchableHighlight
					onPress={removeFromBasket}
					underlayColor="lightgrey"
					style={{ padding: 5 }}
				>
					<AntDesign
						//
						name="delete"
						size={24}
						color="black"
					/>
				</TouchableHighlight>
			</View>
		</View>
	);
}

export default LikedQuotesContainer;
