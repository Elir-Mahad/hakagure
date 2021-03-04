// import React from "react";
// import styles from "../ScreenStyles";
// //
// import { Text, ImageBackground, View, ScrollView } from "react-native";
// import { StatusBar } from "expo-status-bar";
// //
// import CardBottomIcons from "../CardBottomIcons";
// import LeftQuote from "../LeftQuote";
// import RightQuote from "../RightQuote";

// //!------------------------------------------------------------IMPORTS

// const DeathScreen = ({ navigation }) => {
// 	//
// 	return (
// 		<ScrollView style={styles.category_screen}>
// 			<StatusBar style="light" />
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.longquote}>
// 							The Way of the Samurai should be in being aware that you do not
// 							know what is going to happen next.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							Victory and defeat are matters of the temporary force of
// 							circumstances.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							The way of avoiding shame is simply in death.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							Even if it seems certain that you will lose, retaliate. Neither
// 							wisdom nor technique has a place in this.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.shortquote}>
// 							The Way of the Samurai is found in death. When it comes to
// 							either/or, there is only the quick choice of death. Be determined
// 							and advance.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.shortquote}>
// 							All Men feel that they are working righteously, but when it comes
// 							to the point of throwing away one’s life for his lord, all get
// 							weak in the knees.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.shortquote}>
// 							A useless person is often a matchless warrior because he has
// 							already given up his life and became one with his lord.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.shortquote}>
// 							The Way of the Samurai is in desperateness. One needs neither
// 							loyalty nor devotion, but simply to become desperate in the Way.
// 							Loyalty and devotion are of themselves within desperation.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.longquote}>
// 							When meeting calamities or difficult situations, it is not enough
// 							to simply say that one is not at all flustered.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							One should dash forward bravely and with joy. It is the crossing
// 							of a single barrier and is like the saying, ”The more the water,
// 							the higher the boat.”
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.shortquote}>
// 							When courage is fixed in the heart, and the resolution is devoid
// 							of doubt, death is the only choice.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.longquote}>
// 							In conferring with people about matters of importance, there may
// 							be many cases when your affair is thought lightly of.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							It is sufficient to become a fanatic and choose to throw away
// 							one’s life. At such a time, if one thinks about doing things well,
// 							confusion will soon arise and he will blunder.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.longquote}>
// 							When one has made a decision, even if it will be very difficult to
// 							succeed by advancing straight ahead, it will not do to think about
// 							going at it in a long roundabout way.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							One’s heart may slacken, he may miss his chance, and by and large
// 							there will be no success.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							The Way of the Samurai is one of immediacy, and it is best to dash
// 							in headlong.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.shortquote}>
// 							During a battle, of the retainers who died, not one of them died
// 							with his back turned. They all died facing the enemy lines.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.longquote}>
// 							A warrior’s daily frame of mind is manifested even after death.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							Even if one’s head were to be suddenly cut off, he should be able
// 							to do one more action with certainty.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							The last moments of Nitta Yoshisada are proof of this. Had his
// 							spirit been weak, he would have fallen the moment his head was
// 							severed.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.shortquote}>
// 							If you are slain in battle, you should be resolved to have your
// 							corpse facing the enemy.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.shortquote}>
// 							By waiting to get the agreement of others, a matter like taking
// 							revenge will never be brought to a conclusion.
// 						</Text>
// 						<Text style={styles.shortquote}>
// 							One should have the resolution to go alone and even to be cut
// 							down.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.longquote}>
// 							A person who speaks vehemently about taking revenge but does
// 							nothing about it is a hypocrite.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							Clever people, by using their mouths alone, are taking care of
// 							their reputations for a later date.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							But a real stalwart is a man who will go out secretly, saying
// 							nothing, and die.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.shortquote}>
// 							The person without previous resolution towards death makes certain
// 							that his death will be in bad form.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.shortquote}>
// 							Leave the gate and the enemy is waiting. This is not a matter of
// 							being careful. It is to consider oneself as dead beforehand.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.longquote}>
// 							Taking care of one’s appearance is preparation for death.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							Even if you are aware that you may be struck down today , if you
// 							are slain with an unseemly appearance, you will show your lack of
// 							previous resolve.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							This hardens one’s resolution to die in battle.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			<View style={styles.quote_container}>
// 				<ImageBackground
// 					source={require("../screen_assets/black.png")}
// 					style={styles.backgroundimage}
// 				>
// 					<View style={styles.textandquotes}>
// 						<LeftQuote />
// 						<Text style={styles.longquote}>
// 							Meditation on inevitable death should be performed daily.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							Every day when one’s body and mind are at peace, one should
// 							meditate upon being ripped apart by arrows and swords, being
// 							thrown into the midst of a great fire, dying of disease or
// 							committing seppuku.
// 						</Text>
// 						<Text style={styles.longquote}>
// 							And every day without fail one should consider himself as dead.
// 						</Text>
// 						<RightQuote />
// 					</View>
// 				</ImageBackground>
// 				<CardBottomIcons />
// 			</View>
// 			{/*  */}
// 			<Text></Text>
// 		</ScrollView>
// 	);
// };
// export default DeathScreen;
