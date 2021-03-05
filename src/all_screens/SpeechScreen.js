import React from "react";
import styles from "../ScreenStyles";
//
import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import QuoteContainer from "../QuoteContainer";
//
import ShoppingCartIcon from "../ShoppingCartIcon";
//
import { useStateValue } from "../StateProvider";

//!------------------------------------------------------------IMPORTS

const SpeechScreen = ({ navigation }) => {
	//
	const [{ basket }] = useStateValue();
	//
	console.log(basket);
	//
	return (
		<ScrollView style={styles.category_screen}>
			<StatusBar style="light" />
			<View>
				{/* */}
				<View>
					<ShoppingCartIcon />
					<Text style={styles.itemcount}>{basket?.length}</Text>
				</View>
				{/*  */}
				<QuoteContainer
					title="Jest #1"
					id="Spe1"
					quoteText="A warrior should speak carefully or else he may say things like,
                    “I’m a coward,” or “At that time I’d probably run,” or “How
                    frightening,”."
				/>
				<QuoteContainer
					title="Jest #2"
					id="Spe1"
					quoteText="These are words that should not be said even in jest.
                    He should set his mind to this beforehand."
				/>
				<QuoteContainer
					title="One word #1"
					id="Spe3"
					quoteText="At times of great trouble or disaster, one word will suffice.
                    "
				/>
				<QuoteContainer
					title="One word #2"
					id="Spe4"
					quoteText="At times of happiness, too, one word will be enough."
				/>
				<QuoteContainer
					title="One word #3"
					id="Spe5"
					quoteText="And when meeting or talking with others, one word will do."
				/>
				<QuoteContainer
					title="One word #4"
					id="Spe6"
					quoteText="If there is something that could not be done properly without
                    words, make an effort to settle things by putting ten words into
                    one."
				/>
				<QuoteContainer
					title="One word #5"
					id="Spe7"
					quoteText="One should think well and then speak.
                    It is a matter of putting forth one’s whole effort and having the
                    correct attitude previously."
				/>
				<QuoteContainer
					id="Spe8"
					quoteText="Never sit sloppily whether at home or in some other place."
				/>
				<QuoteContainer
					title="Hidden #1"
					id="Spe9"
					quoteText="People who talk on and on about matters of little importance
                    probably have some complaint in the back of their mind."
				/>
				<QuoteContainer
					title="Hidden #2"
					id="Spe10"
					quoteText="But in order to be ambiguous and to hide this they repeat what
                    they are saving over and over."
				/>
				<QuoteContainer
					id="Spe11"
					quoteText="It is best to know your own ability well, to put forth effort in
                    your endeavours, and to be discreet in speech."
				/>
				<QuoteContainer
					title="Not speaking #1"
					id="Spe12"
					quoteText="The essentials of speaking are in not speaking at all."
				/>
				<QuoteContainer
					title="Not speaking #2"
					id="Spe13"
					quoteText="If you think that you can finish something without speaking, finish it
                    without saying a single word."
				/>
				<QuoteContainer
					title="Not speaking #3"
					id="Spe14"
					quoteText="If there is something that cannot be accomplished without
                    speaking, one should speak with few words."
				/>
				<QuoteContainer
					id="Spe15"
					quoteText="To open one’s mouth indiscriminately brings shame."
				/>
			</View>
			{/*  */}
			<Text></Text>
		</ScrollView>
	);
};
export default SpeechScreen;
