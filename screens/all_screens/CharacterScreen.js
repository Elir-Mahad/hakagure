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

const DeathScreen = ({ navigation }) => {
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
						<Text style={styles.shortquote}>
							The foundation of a samurai is in knowing that being made a ronin
							or being ordered to commit seppuku are also forms of service.
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
							One should, be mindful of the clan forever, whether one is
							banished deep in the mountains or buried under the earth.
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
							One needs neither vitality nor talent. In a word, it is a matter
							of having the will to shoulder the clan by oneself.
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
							Unless one is determined to move the clan by himself, all his
							discipline will come to naught.
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
							If there is a person who is criticizing the Way of the Samurai or
							one’s own province, one should speak with him severely, without
							the least bit of ceremony.
						</Text>
						<Text style={styles.longquote}>
							One must be resolved in advance.
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
							Wrap your intentions in needles of pine.
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
							People used to say “A person who will not tell you seven lies
							within a hundred yards is useless as a man”
						</Text>
						<Text style={styles.longquote}>
							Long ago people spoke in this fashion because they were only
							concerned with a man’s attitude towards military matters and
							considered that a man who was “correct” would never do great
							works.
						</Text>
						<Text style={styles.longquote}>
							They also ignored the misconduct of men and dismissed such matters
							by saying, “They do good works, too...”
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
							A person who serves when treated kindly by the master is not a
							retainer.
						</Text>
						<Text style={styles.shortquote}>
							But the one who serves when the master is being heartless and
							unreasonable is a retainer.
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
							There are two things that will blemish a retainer, and these are
							riches and honor.
						</Text>
						<Text style={styles.shortquote}>
							If one but remains in strained circumstances, he will not be
							marred.
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
							A retainer is a man who remains consistently undistracted
							twenty-four hours a day, whether he is in the presence of his
							master or in public.
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
							In this world the people who will rely on others when they are in
							difficulties, and afterwards not give them a thought are many.
						</Text>
						<Text style={styles.shortquote}>
							Whenever anyone is in unhappy circumstances, you should above all
							inquire after them.
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
							By inconsistency and frivolity we stray from the Way and show
							ourselves to be beginners. In this we do much harm.
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
							If one makes a distinction between public places and one’s
							sleeping quarters, or between being on the battlefield and on the
							tatami, when the moment comes there will not be time for making
							amends.
						</Text>
						<Text style={styles.longquote}>
							There is only the matter of constant awareness.
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
							If it were not for men who demonstrate valor on the tatami, one
							could not find them on the battlefield either.
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
							There is dignity in personal appearance.
						</Text>
						<Text style={styles.longquote}>
							There is dignity in a calm aspect.
						</Text>
						<Text style={styles.longquote}>
							There is dignity in a paucity of words.
						</Text>
						<Text style={styles.longquote}>
							There is dignity in flawlessness of manners.
						</Text>
						<Text style={styles.longquote}>
							There is dignity in solemn behavior.
						</Text>
						<Text style={styles.longquote}>
							And there is dignity in deep insight and a clear perspective.
						</Text>
						<Text style={styles.longquote}>
							These are all reflected on the surface.
						</Text>
						<Text style={styles.longquote}>
							But in the end, their foundation is simplicity of thought and
							tautness of spirit.
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
							There are two kinds of dispositions, inward and outward, and a
							person who is lacking in one or the other is worthless.
						</Text>
						<Text style={styles.longquote}>
							It is, for example, like the blade of a sword, which one should
							sharpen well and then put in its scabbard, periodically taking it
							out.
						</Text>
						<Text style={styles.longquote}>
							If a person has his sword out all the time, he is habitually
							swinging a naked blade; people will not approach him and he will
							have no allies.
						</Text>
						<Text style={styles.longquote}>
							If a sword is always sheathed, it will become rusty, the blade
							will be dull, and people will think as much of its owner.
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
							There are four kinds of retainers. They are the “quick, then
							lapping,” the “lagging, then quick,” the “continually quick,” and
							the ”continually lag- ging.”
						</Text>
						<Text style={styles.longquote}>
							The “continually quick” are men who when given orders will
							undertake their execution quickly and settle the matter well.
							Fukuchi Kichizaemon and the like resemble this type.
						</Text>
						<Text style={styles.longquote}>
							The “lagging, then quick” are men who, though lacking in
							understanding when given orders, prepare quickly and bring the
							matter to a conclusion. I suppose that Nakano Kazuma and men
							similar are like this.
						</Text>
						<Text style={styles.longquote}>
							The “quick, then lagging” are men who when given orders seem to be
							going to settle things but in their preparation take time and
							procrastinate. There are many people like this.
						</Text>
						<Text style={styles.longquote}>
							Other than these, one could say that the rest are ”continually
							lagging.”
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
							The basic meaning of etiquette is to be quick at both the
							beginning and end and tranquil in the middle. That’s just like
							being a kaishaku.
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
							One should always hang wind-bells in order to know the direction
							of the wind.
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
							There are few people who will make mistakes with fire after having
							once been burned.
						</Text>
						<Text style={styles.shortquote}>
							Of people who regard water lightly, many have been drowned.
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
						<Text style={styles.longquote}>The meaning of Filial piety:</Text>
						<Text style={styles.longquote}>
							An ancestor’s good or evil can be determined by the conduct of his
							descendants .
						</Text>
						<Text style={styles.longquote}>
							A descendant should act in a way that will manifest the good in
							his ancestor and not the bad. This is filial piety.
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
export default DeathScreen;
