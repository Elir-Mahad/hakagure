import { StyleSheet } from "react-native";

export default StyleSheet.create({
	//
	// Styles for WelcomeOneScreen
	//
	welcome_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	japandengtitles: {
		width: "100%",
		padding: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	TextEng: {
		display: "flex",
		flexDirection: "row"
	},
	LettersEngOne: {
		// height: "100%",
		backgroundColor: "darkred",
		borderLeftWidth: 3,
		borderTopWidth: 3,
		borderBottomWidth: 3,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10
	},
	LettersEngTwo: {
		// height: "100%",
		backgroundColor: "darkgrey",
		borderRightWidth: 3,
		borderTopWidth: 3,
		borderBottomWidth: 3,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10
	},
	WrittenBy: {
		backgroundColor: "black",
		padding: 5
	},
	EngLetter: {
		fontSize: 25,
		textAlign: "center",
		color: "white"
	},
	LettersJp: {
		borderWidth: 3,
		backgroundColor: "darkred",
		borderRadius: 10
	},
	JpLetter: {
		fontSize: 35,
		textAlign: "center",
		color: "white"
	},
	next_button: {
		alignItems: "center",
		width: 100,
		height: 50,
		borderRadius: 10,
		alignSelf: "center",
		justifyContent: "center",
		backgroundColor: "white"
	},
	right_arrow: {
		width: 30,
		height: 30
	},
	WelcomeBackgroundImage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		justifyContent: "center",
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5
	},
	// WelcomeScreenTwo
	welcome_bodyText: {
		fontFamily: "Inconsolata-Regular",
		fontSize: 20,
		padding: 5,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
		textAlign: "center",
		borderRadius: 5,
		borderColor: "black",
		borderWidth: 2
	},
	//
	// styles for table of contents
	//
	table_container: {
		flex: 1,
		alignItems: "center",
		padding: 10,
		backgroundColor: "white",
		justifyContent: "center"
	},
	//
	preferences: {
		display: "flex",
		flexDirection: "row"
	},
	personalcategory: {
		marginBottom: 15,
		borderRadius: 3,
		borderWidth: 1,
		width: 170,
		margin: 4,
		padding: 4,
		display: "flex",
		justifyContent: "center",
		flexDirection: "row"
	},
	bestquotesimage: {
		width: 55,
		height: 55
	},
	worstquotesimage: {
		width: 55,
		height: 55
	},
	//
	categories: {
		display: "flex",
		flexDirection: "row"
	},
	table_category: {
		marginBottom: 15,
		borderRadius: 3,
		borderWidth: 1,
		height: 100,
		width: 170,
		margin: 4,
		paddingLeft: 6,
		paddingRight: 6,
		paddingTop: 2,
		paddingBottom: 6,
		display: "flex",
		justifyContent: "space-between"
	},
	table_titleandcount: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	table_categoryname: {
		fontFamily: "Inconsolata-Regular",
		color: "black",
		fontSize: 17,
		textAlign: "left"
	},
	table_categorycount: {
		fontSize: 17,
		color: "black"
	},
	table_categoryimage: {
		width: 30,
		height: 30
	},
	//
	// Quotes Container styles
	//
	category_screen: {
		backgroundColor: "lightgrey",
		paddingTop: 20,
		paddingBottom: 20
	},
	quote_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		margin: 15
	},
	quotes_left: {
		alignSelf: "flex-start",
		marginBottom: 10
	},
	quotes_right: {
		alignSelf: "flex-end",
		marginTop: 10
	},
	textandquotes: {
		padding: 30
	},
	shortquote: {
		color: "white",
		fontFamily: "Inconsolata-Regular",
		fontSize: 23,
		padding: 5,
		textAlign: "left"
	},
	longquote: {
		color: "white",
		fontFamily: "Inconsolata-Regular",
		fontSize: 21,
		padding: 1,
		textAlign: "left"
	},
	backgroundimage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
		justifyContent: "center",
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5
	},
	category_icons: {
		backgroundColor: "white",
		width: "100%",
		padding: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly"
	}
});
