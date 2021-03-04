import React from "react";
import styles from "../ScreenStyles";
//
import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import { useStateValue } from "../StateProvider";
//
import LikedQuotesContainer from "./LikedQuotesContainer";
//!------------------------------------------------------------IMPORTS

const LikedQuotesScreen = ({ navigation }) => {
	//
	const [{ basket }] = useStateValue();
	// THIS IS THE DATA LAYER FROM STATE PROVIDER
	// THIS IS USUALLY SUMMONED
	// WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
	// OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT
	//
	return (
		<ScrollView style={styles.category_screen}>
			{/*  */}
			<StatusBar style="light" />
			{/*  */}
			<Text style={styles.title}> Your favourite quotes </Text>

			{/*  */}
			<View>
				{basket.length === 0 ? ( // if the basket is empty, has no items, then return the below div
					<View>
						<Text> You have no Favourite quotes</Text>
					</View>
				) : (
					// other wise (i.e, if the basket is not empty) return the below div

					<View>
						{/* list all the checkout products */}

						{/* for every single item, return the checkout products component */}

						{basket.map((item) => (
							<LikedQuotesContainer
								//
								id={item.id}
								quoteText={item.quoteText}
							/>
						))}
					</View>
				)}
			</View>
			{/*  */}
		</ScrollView>
	);
};
export default LikedQuotesScreen;
