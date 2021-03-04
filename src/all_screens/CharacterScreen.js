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

// //!------------------------------------------------------------IMPORTS

const CharacterScreen = ({ navigation }) => {
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

				<QuoteContainer
					id="1cha"
					quoteText="The foundation of a samurai is in knowing that being made a ronin
						or being ordered to commit 
						seppuku are also forms of service."
				/>
				<QuoteContainer
					id="1cha"
					quoteText="One should, be mindful of the clan forever, whether one is
						banished deep in the mountains or buried under the earth."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="One needs neither vitality nor talent. In a word, it is a matter
						of having the will to shoulder the clan by oneself."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="Unless one is determined to move the clan by himself, all his
						discipline will come to naught."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="If there is a person who is criticizing the Way of the Samurai or
						one’s own province, one should speak with him severely, without
						the least bit of ceremony.One must be resolved in advance."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="Wrap your intentions in needles of pine."
				/>

				<QuoteContainer
					id="1cha"
					title="Military #1"
					quoteText="People used to say “A person who will not tell you seven lies
						within a hundred yards is useless as a man” "
				/>

				<QuoteContainer
					id="1cha"
					title="Military #2"
					quoteText="Long ago people spoke in this fashion because they were only concerned with a man’s attitude towards military matters"
				/>

				<QuoteContainer
					id="1cha"
					title="Military #3"
					quoteText="They considered that a man who was “correct” would never do great
						works.They also ignored the misconduct of men and dismissed such matters by saying, “They do good works, too...”"
				/>

				<QuoteContainer
					id="1cha"
					quoteText="A person who serves when treated kindly by the master is not a
						retainer.But the one who serves when the master is being heartless and
						unreasonable is a retainer."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="There are two things that will blemish a retainer, and these are
						riches and honor.If one but remains in strained circumstances, he will not be
						marred."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="A retainer is a man who remains consistently undistracted
						twenty-four hours a day, whether he is in the presence of his
						master or in public."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="In this world the people who will rely on others when they are in
						difficulties, and afterwards not give them a thought are many.
						Whenever anyone is in unhappy circumstances, you should above all
						inquire after them."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="By inconsistency and frivolity we stray from the Way and show
						ourselves to be beginners. In this we do much harm."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="If one makes a distinction between public places and one’s
						sleeping quarters, or between being on the battlefield and on the
						tatami, when the moment comes there will not be time for making
						amends.There is only the matter of constant awareness."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="If it were not for men who demonstrate valor on the tatami, one
						could not find them on the battlefield either."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="There is dignity in personal appearance.There is dignity in a calm aspect.There is dignity in a paucity of words.
					There is dignity in flawlessness of manners.There is dignity in solemn behavior.And there is dignity in deep insight and a clear perspective.
					These are all reflected on the surface.But in the end, their foundation is simplicity of thought and tautness of spirit."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="There are two kinds of dispositions, inward and outward, and a
						person who is lacking in one or the other is worthless.
						It is, for example, like the blade of a sword, which one should
						sharpen well and then put in its scabbard, periodically taking it
						out. If a person has his sword out all the time, he is habitually
						swinging a naked blade; people will not approach him and he will
						have no allies.	If a sword is always sheathed, it will become rusty, the blade
						will be dull, and people will think as much of its owner."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="There are four kinds of retainers. They are the “quick, then
						lapping,” the “lagging, then quick,” the “continually quick,” and
						the ”continually lag- ging.” The “continually quick” are men who when given orders will
						undertake their execution quickly and settle the matter well.
						Fukuchi Kichizaemon and the like resemble this type.
						The “lagging, then quick” are men who, though lacking in
						understanding when given orders, prepare quickly and bring the
						matter to a conclusion. I suppose that Nakano Kazuma and men
						similar are like this.
						The “quick, then lagging” are men who when given orders seem to be
						going to settle things but in their preparation take time and
						procrastinate. There are many people like this.
						Other than these, one could say that the rest are ”continually
						lagging.”"
				/>

				<QuoteContainer
					id="1cha"
					quoteText="The basic meaning of etiquette is to be quick at both the
						beginning and end and tranquil in the middle. That’s just like
						being a kaishaku."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="One should always hang wind-bells in order to know the direction
						of the wind."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="There are few people who will make mistakes with fire after having
						once been burned.Of people who regard water lightly, many have been drowned."
				/>

				<QuoteContainer
					id="1cha"
					quoteText="The meaning of Filial piety: An ancestor’s good or evil can be 
						determined by the conduct of his descendants .
						A descendant should act in a way that will manifest the good in
						his ancestor and not the bad. This is filial piety."
				/>
			</View>
			{/*  */}
			<Text></Text>
		</ScrollView>
	);
};
export default CharacterScreen;
