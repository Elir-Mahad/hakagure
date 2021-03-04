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

const TimeScreen = ({ navigation }) => {
	//
	return (
		<ScrollView style={styles.category_screen}>
			<StatusBar style="light" />
			<View style={styles.quote_container}>
				<ImageBackground
					source={require("../screen_assets/black.png")}
					style={styles.backgroundimage}
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							If something is not brought to fruition over a period of twenty to
							thirty years, it will not be of great merit.
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
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							Life is a succession of moments. Be true to the thought of the
							moment [death] and avoid distraction.
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
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							Other than continuing to exert yourself, enter into nothing else,
							but go to the extent of living single thought by single thought.
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
				>
					<View style={styles.textandquotes}>
						<LeftQuote />
						<Text style={styles.shortquote}>
							Something that is not done at its time and at its place will
							remain unfinished for a lifetime. If one thinks about it later, he
							will be negligent all his life.
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
				>
					<View style={styles.textandquotes}>
						<LeftQuote />

						<Text style={styles.longquote}>
							“right now” is ”at that time, ” and ”at that time” is ”right now”.
							One will miss the occasion if he thinks that these two are
							different.
						</Text>

						<Text style={styles.longquote}>
							For example, if one were called before the master to explain
							something right away, he would most likely be perplexed. This is
							proof that he understands the two to be different.
						</Text>
						<Text style={styles.longquote}>
							When one attempts to concentrate things in this manner, won’t
							daily negligence and today’s lack of resolve be understood?
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
export default TimeScreen;
