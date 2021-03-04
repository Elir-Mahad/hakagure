import React from "react";
import styles from "../ScreenStyles";
//
import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import ShortQuoteContainer from "../ShortQuoteContainer";
import LongQuoteContainer from "../LongQuoteContainer";
//
import ShoppingCartIcon from "../ShoppingCartIcon";
//
import { useStateValue } from "../StateProvider";

//!------------------------------------------------------------IMPORTS

const EduScreen = ({ navigation }) => {
	//
	const [{ basket }] = useStateValue();
	//
	console.log(basket);
	//
	return (
		<ScrollView style={styles.category_screen}>
			<StatusBar style="light" />
			<View>
				{/*  */}
				<View>
					<ShoppingCartIcon />
					<Text style={styles.itemcount}>{basket?.length}</Text>
				</View>
				{/*  */}
				{/* <LongQuoteContainer id="" quoteText="" />
				<ShortQuoteContainer id="" quoteText="" /> */}
				<ShortQuoteContainer
					//
					id="1"
					quoteText="When one is writing a letter, he should think that the recipient
					will make it into a hanging scroll"
				/>
				<ShortQuoteContainer
					//
					id="2"
					quoteText="We learn about the sayings and deeds of the men of old in order to
					entrust ourselves to their wisdom and prevent selfishness."
				/>
				<ShortQuoteContainer
					//
					id="3"
					quoteText="A person who knows a little will act arrogant. When someone knows
					something well, he is gentle."
				/>
				<ShortQuoteContainer
					//
					id="4"
					quoteText="Scholars are men who with wit and speech hide their own true
					cowardice and greed."
				/>
				<LongQuoteContainer
					//
					id="5"
					quoteText="Calculating people are contemptible.
					The reason for this is that calculation deals with loss and gain.
					Death is considered loss and life is considered gain. 
					Thus, death is something that such a person does not care for,and he is contemptible."
				/>
				<ShortQuoteContainer
					//
					id="6"
					quoteText="There are times when extensive knowledge becomes a hindrance.
					Knowing the circumstances can be an obstruction in everyday
					affairs."
				/>
				<LongQuoteContainer
					//
					id="7"
					quoteText="Discrimination will never be brought to a conclusion. With an
					intense, fresh and undelaying spirit, one must make his judgments
					within the space of seven breaths.It is a matter of being determined and having the spirit to break
					right through to the other side."
				/>
				<LongQuoteContainer
					//
					id="8"
					quoteText="A man received an oral teaching concerning the Bravery. He neither
					wrote it down nor committed it to memory but rather forgot it
					completely. Then, in facing real situations, he acted on impulse and the
					things that he had learned became wisdom of his own."
				/>
				<ShortQuoteContainer
					//
					id="9"
					quoteText="If one does not strike out by simply closing his eyes and rushing
					into the enemy, even if it is only one step, he will be of no use."
				/>
				<ShortQuoteContainer
					//
					id="10"
					quoteText="When the time comes, there is no moment for reasoning. And if you
					have not done your inquiring beforehand , there is most often
					shame."
				/>
				<ShortQuoteContainer
					//
					id="11"
					quoteText="The resourcefulness of times of peace is the military preparation
					for times of war."
				/>
			</View>
			{/*  */}
			<Text></Text>
		</ScrollView>
	);
};
export default EduScreen;
