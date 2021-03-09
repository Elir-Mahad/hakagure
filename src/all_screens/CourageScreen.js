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

const CourageScreen = ({ navigation }) => {
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
					title="Retreat #1"
					id="Cou1"
					quoteText="Regarding a man who rushed to engage in a fight that his friends
                    were amidst, and who in the process killed some samurais."
				/>

				<QuoteContainer
					//
					title="Retreat #2"
					id="Cou2"
					quoteText="During his trail he said: all living things value their lives, and
                    this goes without saying for human beings. I, especially, value my
                    life."
				/>

				<QuoteContainer
					//
					title="Retreat #3"
					id="Cou3"
					quoteText="However, I thought that to hear a rumor that one’s friends are
                    involved in a fight and to pretend not to hear this is not to
                    preserve the Way of the Samurai , so I ran to the place of action."
				/>

				<QuoteContainer
					//
					title="Retreat #4"
					id="Cou4"
					quoteText="To shamelessly return home after seeing my friends struck down
                    would surely have lengthened my life, but this too would be
                    disregarding the Way. In observing the Way, one will throw away his own precious life."
				/>

				<QuoteContainer
					//
					title="Priest #1"
					id="Cou5"
					quoteText="A priest was told that a sick man just died. Then he said, “Didn’t
                    this occur from insufficient treatment? What a shame!”"
				/>

				<QuoteContainer
					//
					title="Priest #2"
					id="Cou6"
					quoteText="The doctor said, “I heard you say that the man died from
                    insufficient treatment. I have heard that a priest embodies the power of the Buddhist Law.
                    Bring this dead man back to life, for without such evidence
                    Buddhism is worthless."
				/>

				<QuoteContainer
					//
					title="Priest #3"
					id="Cou7"
					quoteText="Priest said, “Okay”. Holding tight to a knife that was in his
                    robe, he faced the dead man and prayed, ‘If the strength of the
                    Buddhist Law exists, come back to life immediately.’"
				/>

				<QuoteContainer
					//
					title="Priest #4"
					id="Cou8"
					quoteText="If he didn’t come back to life, the priest was resolved to cut
                    open his stomach and die embracing the corpse.
                    Pretty soon the dead man began to breathe and then completely
                    revived."
				/>

				<QuoteContainer
					//
					id="Cou9"
					quoteText="Men’s courage has waned. When ordered to do kaishaku, it has
                    become the norm for men to be prudent and clever at making
                    excuses."
				/>

				<QuoteContainer
					//
					id="Cou10"
					quoteText="Forty or fifty years ago, a man wouldn’t show an unscarred thigh
                    to his fellows, so he would pierce it himself."
				/>

				<QuoteContainer
					//
					id="Cou11"
					quoteText="When on the battlefield, if you try not to let others take the
                    lead and have the sole intention of breaking into the enemy lines.
                    Then you will not fall behind others your mind will become fierce,
                    and you will manifest martial valor."
				/>

				<QuoteContainer
					//
					id="Cou12"
					quoteText="The resolution of the men of former times was deep.
                    Those between the ages of thirteen and sixty went to the front
                    lines.For this reason men of advanced years hid their age."
				/>

				<QuoteContainer
					//
					title="Cleverness #1"
					id="Cou13"
					quoteText="In older days boys were ordered to cut down a dog at the age of
                    five, and at the age of fifteen they were made to execute a
                    criminal. Everyone, by the time they were fourteen or fifteen, was
                    ordered to do a beheading without fail."
				/>

				<QuoteContainer
					//
					title="Cleverness #2"
					id="Cou14"
					quoteText="To say that one can do without this sort of thing, or that there
                    is no merit in killing a condemned man, or that it is a crime, or
                    that it is defiling, is to make excuses."
				/>

				<QuoteContainer
					//
					title="Cleverness #3"
					id="Cou15"
					quoteText="Because a person’s martial valor is weak, his attitude is only
                    that of trimming his nails and being attractive?"
				/>

				<QuoteContainer
					//
					title="Cleverness #4"
					id="Cou16"
					quoteText="If one investigates into the spirit of a man who finds these
                    things disagreeable, one sees that this person gives himself over
                    to cleverness and excuse making not to kill because he feels
                    unnerved."
				/>

				<QuoteContainer
					//
					id="Cou17"
					quoteText="The samurai of old were mortified by the idea of dying in bed;
                    they hoped only to die on the battlefield."
				/>

				<QuoteContainer
					//
					id="Cou18"
					quoteText="A person who does not want to be struck by the enemies arrows will
                    have no divine protection."
				/>

				<QuoteContainer
					//
					title="Dishonor #1"
					id="Cou19"
					quoteText="If one felt that a failure caused dishonor, it would be the least
                    he could do to cut open his stomach, rather than live on in shame
                    .But if one decides to live because such a death would be useless,
                    then for the rest of his life, he would be covered with shame."
				/>

				<QuoteContainer
					//
					title="Dishonor #2"
					id="Cou20"
					quoteText="After his death, his guiltless descendants would receive his
                    dishonor for having been born in his line his ancestors’ name
                    would be dragged down, and all the members of his family would be
                    blemished. Such circumstances are truly regrettable."
				/>

				<QuoteContainer
					//
					title="Resolve #1"
					id="Cou21"
					quoteText="There is something to be learned from a rainstorm. When meeting
                    with a sudden shower, you try not to get wet and run quickly along
                    the road.But doing such things as passing under the eaves of houses, you
                    still get wet.
                    "
				/>

				<QuoteContainer
					//
					title="Resolve #2"
					id="Cou22"
					quoteText="When you are resolved from the beginning, you will not be
                    perplexed, though you still get the same soaking. This
                    understanding extends to everything."
				/>

				<QuoteContainer
					//
					id="Cou23"
					quoteText="In just refusing to retreat from something one gains the strength
                    of two men."
				/>
			</View>
			{/*  */}
			<Text></Text>
		</ScrollView>
	);
};
export default CourageScreen;
