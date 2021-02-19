import React from "react";
import styles from "../ScreenStyles";
//
import {
	TouchableOpacity,
	Text,
	ImageBackground,
	View,
	ScrollView
} from "react-native";
import { StatusBar } from "expo-status-bar";
//
import Icons from "../Icons";

//!------------------------------------------------------------IMPORTS

const EduScreen = ({ navigation }) => {
	//
	return (
		<ScrollView>
			<StatusBar style="light" />
			<View style={styles.edu_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/samuraii.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<Text style={styles.edu_bodyText}>
						{/* <Text style={styles.quotations}>“</Text> */}
						When one is writing a letter, he should think that the recipient
						will make it into a hanging scroll.
						{/* <Text style={styles.quotations}>”</Text> */}
					</Text>
					<Icons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.edu_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/samuraii.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<Text style={styles.edu_bodyText}>
						We learn about the sayings and deeds of the men of old in order to
						entrust ourselves to their wisdom and prevent selfishness.
					</Text>
					<Icons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.edu_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/samuraii.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<Text style={styles.edu_bodyText}>
						A person who knows a little will act arrogant. When someone knows
						something well, he is gentle.
					</Text>
					<Icons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.edu_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/samuraii.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<Text style={styles.edu_bodyText}>
						Scholars are men who with wit and speech hide their own true
						cowardice and greed.
					</Text>
					<Icons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.edu_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/samuraii.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<Text style={styles.edu_bodyText}>
						Calculating people are contemptible. The reason for this is that
						calculation deals with loss and gain. Death is considered loss and
						life is considered gain. Thus, death is something that such a person
						does not care for, and he is contemptible.
					</Text>
					<Icons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.edu_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/samuraii.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<Text style={styles.edu_bodyText}>
						There are times when extensive knowledge becomes a hindrance. One
						should use discretion. Knowing the circumstances can be an
						obstruction in everyday affairs, too. One should use discretion.
					</Text>
					<Icons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.edu_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/samuraii.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<Text style={styles.edu_bodyText}>
						Discrimination will never be brought to a conclusion. With an
						intense, fresh and undelaying spirit, one must make his judgments
						within the space of seven breaths. It is a matter of being
						determined and having the spirit to break right through to the other
						side.
					</Text>
					<Icons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.edu_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/samuraii.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<Text style={styles.edu_bodyText}>
						A man received an oral teaching concerning the Bravery. He neither
						wrote it down nor committed it to memory but rather forgot it
						completely. Then, in facing real situations, he acted on impulse and
						the things that he had learned became wisdom of his own.
					</Text>
					<Icons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.edu_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/samuraii.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<Text style={styles.edu_bodyText}>
						If one does not strike out by simply closing his eyes and rushing
						into the enemy, even if it is only one step, he will be of no use.
					</Text>
					<Icons />
				</ImageBackground>
			</View>
			{/*  */}
			<View style={styles.edu_container}>
				<ImageBackground
					// the below image wraps the whole view
					source={require("../screen_assets/samuraii.png")}
					style={styles.backgroundimage}
					imageStyle={{ borderRadius: 5 }}
				>
					<Text style={styles.edu_bodyText}>
						When the time comes, there is no moment for reasoning. And if you
						have not done your inquiring beforehand , there is most often shame.
					</Text>
					<Icons />
					{/* <TouchableOpacity
						//
						onPress={() => navigation.navigate("Table of Contents")}
					>
						<Text style={styles.edu_bodyText}> Table of contents </Text>
					</TouchableOpacity> */}
				</ImageBackground>
			</View>
		</ScrollView>
	);
};
export default EduScreen;
