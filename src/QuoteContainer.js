import React from "react";
import { Text, View, ImageBackground, TouchableHighlight } from "react-native";
import styles from "./ScreenStyles";
//
import LeftQuote from "./LeftQuote";
import RightQuote from "./RightQuote";
//
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
//
import { useStateValue } from "./StateProvider";

function QuoteContainer({ id, tag, title, quoteText }) {
	// split apart the object, and grab the id, title, and quote text

	//
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
				tag: tag,
				title: title,
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
				<View style={styles.topTextIcon}>
					{/* Tag and icon */}
					<View style={styles.textIcon}>
						<MaterialIcons name="subject" size={24} color="black" />
						<Text style={styles.tag}>{tag}</Text>
					</View>
					{/* Quote title and icon */}
					<View style={styles.textIcon}>
						<Text style={styles.quotetitle}> {title}</Text>
						<MaterialIcons
							name="format-list-numbered-rtl"
							size={24}
							color="black"
						/>
					</View>
				</View>
				{/* The actual quote is below */}
				<View style={styles.textandquotes}>
					<LeftQuote />
					<Text style={styles.thequote}>{quoteText}</Text>
					<RightQuote />
				</View>
				{/*  */}
			</ImageBackground>
			<View style={styles.category_icons}>
				<TouchableHighlight
					//
					onPress={addToBasket}
					underlayColor="red"
					style={{ padding: 5 }}
				>
					<AntDesign
						//
						name="heart"
						size={22}
						color="black"
					/>
				</TouchableHighlight>
			</View>
		</View>
	);
}

// f4f4f2

export default QuoteContainer;
