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

const EduScreen = ({ navigation }) => {
	//
	return (
		<ScrollView style={styles.category_screen}>
			<StatusBar style="light" />
			<View style={styles.quote_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							When one is writing a letter, he should think that the recipient
							will make it into a hanging scroll.
						</Text>
						<RightQuote />
					</View>
				</ImageBackground>
				<CardBottomIcons />
			</View>
			{/*  */}
			<View style={styles.quote_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							We learn about the sayings and deeds of the men of old in order to
							entrust ourselves to their wisdom and prevent selfishness.
						</Text>
						<RightQuote />
					</View>
					<CardBottomIcons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.quote_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							A person who knows a little will act arrogant. When someone knows
							something well, he is gentle.
						</Text>
						<RightQuote />
					</View>
					<CardBottomIcons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.quote_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							Scholars are men who with wit and speech hide their own true
							cowardice and greed.
						</Text>
						<RightQuote />
					</View>
					<CardBottomIcons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.quote_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.longquote}>
							Calculating people are contemptible. The reason for this is that
							calculation deals with loss and gain.{" "}
						</Text>
						<Text style={styles.longquote}>
							Death is considered loss and life is considered gain. Thus, death
							is something that such a person does not care for, and he is
							contemptible.
						</Text>
						<RightQuote />
					</View>
					<CardBottomIcons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.quote_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							There are times when extensive knowledge becomes a hindrance.
							Knowing the circumstances can be an obstruction in everyday
							affairs.
						</Text>
						<RightQuote />
					</View>
					<CardBottomIcons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.quote_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.longquote}>
							Discrimination will never be brought to a conclusion. With an
							intense, fresh and undelaying spirit, one must make his judgments
							within the space of seven breaths.
						</Text>
						<Text style={styles.longquote}>
							It is a matter of being determined and having the spirit to break
							right through to the other side.
						</Text>
						<RightQuote />
					</View>
					<CardBottomIcons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.quote_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.longquote}>
							A man received an oral teaching concerning the Bravery. He neither
							wrote it down nor committed it to memory but rather forgot it
							completely.
						</Text>
						<Text style={styles.longquote}>
							Then, in facing real situations, he acted on impulse and the
							things that he had learned became wisdom of his own.
						</Text>
						<RightQuote />
					</View>
					<CardBottomIcons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.quote_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							If one does not strike out by simply closing his eyes and rushing
							into the enemy, even if it is only one step, he will be of no use.
						</Text>
						<RightQuote />
					</View>
					<CardBottomIcons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.quote_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							When the time comes, there is no moment for reasoning. And if you
							have not done your inquiring beforehand , there is most often
							shame.
						</Text>
						<RightQuote />
					</View>
					<CardBottomIcons />
				</ImageBackground>
			</View>
			{/*  */}
			<Text></Text>
		</ScrollView>
	);
};
export default EduScreen;
