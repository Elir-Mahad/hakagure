import React from "react";
import styles from "../ScreenStyles";
//
import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import QuoteContainer from "../QuoteContainer";
//
import { useStateValue } from "../StateProvider";

//!------------------------------------------------------------IMPORTS

const DeathScreen = ({ navigation }) => {
	//
	const [{ basket }] = useStateValue();
	//
	console.log(basket);
	//
	return (
		<ScrollView style={styles.category_screen}>
			<StatusBar style="dark" />
			<View>
				{/*  */}
				<QuoteContainer
					//
					title="Advance #1"
					id="Dea1"
					quoteText="The Way of the Samurai should be in being aware that you do not
                    know what is going to happen next.
                    Victory and defeat are matters of the temporary force of
                    circumstances.
                    "
				/>

				<QuoteContainer
					//
					title="Advance #2"
					id="Dea2"
					quoteText="The way of avoiding shame is simply in death. 
                    Even if it seems certain that you will lose, retaliate. Neither
                    wisdom nor technique has a place in this."
				/>

				<QuoteContainer
					//
					title="Advance #3"
					id="Dea3"
					quoteText="The Way of the Samurai is found in death. When it comes to
                    either/or, there is only the quick choice of death. Be determined
                    and advance."
				/>

				<QuoteContainer
					//
					title="Knees #1"
					id="Dea4"
					quoteText="All Men feel that they are working righteously, but when it comes
                    to the point of throwing away one’s life for his lord, all get
                    weak in the knees."
				/>

				<QuoteContainer
					//
					title="Knees #2"
					id="Dea5"
					quoteText="A useless person is often a matchless warrior because he has
                    already given up his life and became one with his lord."
				/>

				<QuoteContainer
					id="Dea6"
					quoteText="The Way of the Samurai is in desperateness. One needs neither
                    loyalty nor devotion, but simply to become desperate in the Way.
                    Loyalty and devotion are of themselves within desperation."
				/>

				<QuoteContainer
					title="Forward #1"
					id="Dea7"
					quoteText="When meeting calamities or difficult situations, it is not enough
                    to simply say that one is not at all flustered."
				/>

				<QuoteContainer
					title="Forward #2"
					id="Dea8"
					quoteText="One should dash forward bravely and with joy. It is the crossing
                    of a single barrier and is like the saying, ”The more the water,
                    the higher the boat.”"
				/>

				<QuoteContainer
					id="Dea9"
					quoteText="When courage is fixed in the heart, and the resolution is devoid
                    of doubt, death is the only choice."
				/>

				<QuoteContainer
					title="Fanatic #1"
					id="Dea10"
					quoteText="In conferring with people about matters of importance, there may
                    be many cases when your affair is thought lightly of."
				/>

				<QuoteContainer
					title="Fanatic #2"
					id="Dea11"
					quoteText="It is sufficient to become a fanatic and choose to throw away
                    one’s life. At such a time, if one thinks about doing things well,
                    confusion will soon arise and he will blunder."
				/>

				<QuoteContainer
					title="Immediacy #1"
					id="Dea12"
					quoteText="When one has made a decision, even if it will be very difficult to
                    succeed by advancing straight ahead, it will not do to think about
                    going at it in a long roundabout way."
				/>

				<QuoteContainer
					title="Immediacy #2"
					id="Dea13"
					quoteText="One’s heart may slacken, he may miss his chance, and by and large
                    there will be no success.The Way of the Samurai is one of immediacy, and it is best to dash
                    in headlong."
				/>

				<QuoteContainer
					title="After Death #1"
					id="Dea14"
					quoteText="During a battle, of the retainers who died, not one of them died
                    with his back turned. They all died facing the enemy lines.
                    A warrior’s daily frame of mind is manifested even after death."
				/>

				<QuoteContainer
					title="After Death #2"
					id="Dea15"
					quoteText="Even if one’s head were to be suddenly cut off, he should be able
                    to do one more action with certainty."
				/>

				<QuoteContainer
					title="After Death #3"
					id="Dea16"
					quoteText="The last moments of Nitta Yoshisada are proof of this. Had his
                    spirit been weak, he would have fallen the moment his head was
                    severed."
				/>

				<QuoteContainer
					title="After Death #4"
					id="Dea17"
					quoteText="If you are slain in battle, you should be resolved to have your
                    corpse facing the enemy."
				/>

				<QuoteContainer
					title="Revenge #1"
					id="Dea18"
					quoteText=" By waiting to get the agreement of others, a matter like taking
                    revenge will never be brought to a conclusion.
                    "
				/>

				<QuoteContainer
					title="Revenge #2"
					id="Dea19"
					quoteText="One should have the resolution to go alone and even to be cut
                    down."
				/>

				<QuoteContainer
					title="Revenge #3"
					id="Dea20"
					quoteText="A person who speaks vehemently about taking revenge but does
                    nothing about it is a hypocrite."
				/>

				<QuoteContainer
					title="Revenge #4"
					id="Dea21"
					quoteText="Clever people, by using their mouths alone, are taking care of
                    their reputations for a later date."
				/>

				<QuoteContainer
					title="Revenge #5"
					id="Dea22"
					quoteText="But a real stalwart is a man who will go out secretly, saying
                    nothing, and die."
				/>

				<QuoteContainer
					id="Dea23"
					quoteText="The person without previous resolution towards death makes certain
                    that his death will be in bad form."
				/>

				<QuoteContainer
					id="Dea24"
					quoteText="Leave the gate and the enemy is waiting. This is not a matter of
                    being careful. It is to consider oneself as dead beforehand."
				/>

				<QuoteContainer
					title="Appearance #1"
					id="Dea25"
					quoteText="Taking care of one’s appearance is preparation for death."
				/>

				<QuoteContainer
					title="Appearance #2"
					id="Dea26"
					quoteText="Even if you are aware that you may be struck down today , if you
                    are slain with an unseemly appearance, you will show your lack of
                    previous resolve."
				/>

				<QuoteContainer
					title="Appearance #3"
					id="Dea27"
					quoteText="Taking care of one’s appearance hardens one’s resolution to die in battle."
				/>

				<QuoteContainer
					title="Meditation #1"
					id="Dea28"
					quoteText="Meditation on inevitable death should be performed daily."
				/>

				<QuoteContainer
					title="Meditation #2"
					id="Dea29"
					quoteText="Every day when one’s body and mind are at peace, one should
                    meditate upon being ripped apart by arrows and swords."
				/>

				<QuoteContainer
					title="Meditation #3"
					id="Dea30"
					quoteText="One should imagine being thrown into the midst of a great fire, dying of disease or
                    committing seppuku."
				/>

				<QuoteContainer
					title="Meditation #4"
					id="Dea31"
					quoteText="And every day without fail one should consider himself as dead."
				/>
			</View>
			{/*  */}
			<Text></Text>
		</ScrollView>
	);
};
export default DeathScreen;
