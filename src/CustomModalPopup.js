// THIS DOES NOT WORK BECAUSE ONCE YOU IMPORT IT INTO THE HEADER RIGHT THE POPUP CATEGORIES CANNOT BE CLIKCED ON

// import React, { useState } from "react";
// import styles from "./ScreenStyles";
// import { Feather } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { View, Text, TouchableOpacity, Image } from "react-native";
// // import MenuOptions from "./MenuOptions";

// function MyMenu() {
// 	//
// 	const navigation = useNavigation();
// 	//
// 	const [content, setContent] = useState(false);
// 	//
// 	return (
// 		<View style={styles.menu}>
// 			<TouchableOpacity
// 				//
// 				onPress={() => setContent(!content)}
// 			>
// 				<Feather name="menu" size={24} color="black" />
// 			</TouchableOpacity>

// 			{/*	Below, we will return the menu options when state is true (icon is clicked)
// 				and we will return false if state is false (icon is clicked again) */}
// 			{content ? (
// 				// <MenuOptions />
// 				<View style={styles.menuoptions}>
// 					<TouchableOpacity
// 						//
// 						style={styles.menu_category}
// 						onPress={() => navigation.navigate("Description")}
// 					>
//
// 						<Image
// 							//
// 							style={styles.menu_categoryimage}
// 							source={require("./screen_assets/description.png")}
// 						/>
// 					</TouchableOpacity>
// 				</View>
// 			) : //
// 			null}
// 		</View>
// 	);
// }

// export default MyMenu;
