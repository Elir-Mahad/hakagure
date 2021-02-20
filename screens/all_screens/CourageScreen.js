import React from "react";
import styles from "../ScreenStyles";
//
import { Text, ImageBackground, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
//
import CardBottomIcons from "../CardBottomIcons";
import LeftQuote from "../LeftQuote";
import RightQuote from "../RightQuote";

//!------------------------------------------------------------IMPORTS

const CourageScreen = ({ navigation }) => {
	//
	return (
		<ScrollView style={styles.category_screen}>
			<StatusBar style="light" />
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.longquote}>
							Regarding a man who rushed to engage in a fight that his friends
							were amidst, and who in the process killed some samurais.
						</Text>
						<Text style={styles.longquote}>
							During his trail he said: all living things value their lives, and
							this goes without saying for human beings. I, especially, value my
							life.
						</Text>
						<Text style={styles.longquote}>
							However, I thought that to hear a rumor that one’s friends are
							involved in a fight and to pretend not to hear this is not to
							preserve the Way of the Samurai , so I ran to the place of action
							.
						</Text>
						<Text style={styles.longquote}>
							To shamelessly return home after seeing my friends struck down
							would surely have lengthened my life, but this too would be
							disregarding the Way.
						</Text>
						<Text style={styles.longquote}>
							In observing the Way, one will throw away his own precious life.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.longquote}>
							A priest was told that a sick man just died. Then he said, “Didn’t
							this occur from insufficient treatment? What a shame!”
						</Text>
						<Text style={styles.longquote}>
							The doctor said, “I heard you say that the man died from
							insufficient treatment.
						</Text>
						<Text style={styles.longquote}>
							I have heard that a priest embodies the power of the Buddhist Law.
						</Text>
						<Text style={styles.longquote}>
							Bring this dead man back to life, for without such evidence
							Buddhism is worthless.
						</Text>
						<Text style={styles.longquote}>
							Priest said, “Okay”. Holding tight to a knife that was in his
							robe, he faced the dead man and prayed, ‘If the strength of the
							Buddhist Law exists, come back to life immediately.’
						</Text>
						<Text style={styles.longquote}>
							If he didn’t come back to life, the priest was resolved to cut
							open his stomach and die embracing the corpse.
						</Text>
						<Text style={styles.longquote}>
							Pretty soon the dead man began to breathe and then completely
							revived.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							Men’s courage has waned. When ordered to do kaishaku, it has
							become the norm for men to be prudent and clever at making
							excuses.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							Forty or fifty years ago, a man wouldn’t show an unscarred thigh
							to his fellows, so he would pierce it himself.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.longquote}>
							When on the battlefield, if you try not to let others take the
							lead and have the sole intention of breaking into the enemy lines.
						</Text>
						<Text style={styles.longquote}>
							Then you will not fall behind others your mind will become fierce,
							and you will manifest martial valor.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							The resolution of the men of former times was deep.
						</Text>
						<Text style={styles.shortquote}>
							Those between the ages of thirteen and sixty went to the front
							lines.
						</Text>
						<Text style={styles.shortquote}>
							For this reason men of advanced years hid their age.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.longquote}>
							In older days boys were ordered to cut down a dog at the age of
							five, and at the age of fifteen they were made to execute a
							criminal. Everyone, by the time they were fourteen or fifteen, was
							ordered to do a beheading without fail.
						</Text>
						<Text style={styles.longquote}>
							To say that one can do without this sort of thing, or that there
							is no merit in killing a condemned man, or that it is a crime, or
							that it is defiling, is to make excuses.
						</Text>
						<Text style={styles.longquote}>
							Because a person’s martial valor is weak, his attitude is only
							that of trimming his nails and being attractive?
						</Text>
						<Text style={styles.longquote}>
							If one investigates into the spirit of a man who finds these
							things disagreeable, one sees that this person gives himself over
							to cleverness and excuse making not to kill because he feels
							unnerved.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							The samurai of old were mortified by the idea of dying in bed;
							they hoped only to die on the battlefield.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							A person who does not want to be struck by the enemies arrows will
							have no divine protection.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.longquote}>
							If one felt that a failure caused dishonor, it would be the least
							he could do to cut open his stomach, rather than live on in shame
							.
						</Text>
						<Text style={styles.longquote}>
							But if one decides to live because such a death would be useless,
							then for the rest of his life, he would be covered with shame.
						</Text>
						<Text style={styles.longquote}>
							After his death, his guiltless descendants would receive his
							dishonor for having been born in his line his ancestors’ name
							would be dragged down, and all the members of his family would be
							blemished.
						</Text>
						<Text style={styles.longquote}>
							Such circumstances are truly regrettable.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.longquote}>The meaning of resolve:</Text>
						<Text style={styles.longquote}>
							There is something to be learned from a rainstorm. When meeting
							with a sudden shower, you try not to get wet and run quickly along
							the road.
						</Text>
						<Text style={styles.longquote}>
							But doing such things as passing under the eaves of houses, you
							still get wet.
						</Text>
						<Text style={styles.longquote}>
							When you are resolved from the beginning, you will not be
							perplexed, though you still get the same soaking. This
							understanding extends to everything.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							In just refusing to retreat from something one gains the strength
							of two men.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			{/*  */}
			<Text></Text>
		</ScrollView>
	);
};
export default CourageScreen;
