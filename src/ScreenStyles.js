import { StyleSheet } from "react-native";

export default StyleSheet.create({
	//On all screens
	menuicon_trigger: {
		marginLeft: 10
	},
	menu_category: {
		height: 60,
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomColor: "lightgrey",
		borderBottomWidth: 1
	},
	menu_categoryname: {
		fontFamily: "Inconsolata-Regular",
		color: "black",
		fontSize: 17,
		marginLeft: -10
	},
	menu_categoryimage: {
		width: 30,
		height: 30
	},
	//
	basketandcount: {
		marginRight: 10
	},
	itemcount: {
		position: "absolute",
		height: 33,
		width: 30,
		borderRadius: 15,
		backgroundColor: "black",
		color: "white",
		right: 30,
		bottom: 10,
		padding: 7,
		alignItems: "center",
		textAlign: "center",
		justifyContent: "center"
	},
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
	LettersEng: {
		backgroundColor: "black",
		borderWidth: 3,
		borderColor: "#222831",
		borderRadius: 10
	},
	EngLetter: {
		fontSize: 35,
		textAlign: "center",
		color: "white"
	},
	LettersJp: {
		borderWidth: 3,

		borderColor: "#222831",
		backgroundColor: "black",
		borderRadius: 10
	},
	JpLetter: {
		fontSize: 35,
		textAlign: "center",
		color: "white"
	},
	next_button: {
		alignItems: "center",
		alignSelf: "center",
		justifyContent: "center"
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
	DescriptionContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "black"
	},
	DescriptionImage: {
		width: 350,
		height: 250,
		marginTop: 20,
		marginBottom: 10,
		borderRadius: 10
	},
	DescriptionTextOne: {
		fontFamily: "Inconsolata-Regular",
		fontSize: 20,
		padding: 5,
		marginRight: 20,
		marginLeft: 5,
		textAlign: "left",
		borderRadius: 5,
		color: "white"
	},
	DescriptionTextTwo: {
		fontFamily: "Inconsolata-Regular",
		fontSize: 20,
		padding: 5,
		marginRight: 20,
		marginLeft: 5,
		textAlign: "right",
		borderRadius: 5,
		color: "white"
	},
	//LikeQuotesScreen
	nolikedqotescontainer: {
		backgroundColor: "black",
		padding: 10
	},
	nolikedquotestext: {
		fontFamily: "Inconsolata-Regular",
		color: "white",
		fontSize: 20,
		textAlign: "center",
		padding: 5
	},
	likedquotestitle: {
		fontFamily: "Inconsolata-Regular",
		textAlign: "center",
		fontSize: 17,
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderTopWidth: 1,
		backgroundColor: "white"
	},
	// Other Quotes Container styles
	//
	category_screen: {
		backgroundColor: "#e6e6e6",
		paddingTop: 20
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
	quote_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		margin: 15
	},
	topTextIcon: {
		backgroundColor: "white",
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 5
	},
	textIcon: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},
	tag: {
		fontFamily: "Inconsolata-Regular",
		fontSize: 14,
		color: "black"
	},
	quotetitle: {
		fontFamily: "Inconsolata-Regular",
		color: "black",
		fontSize: 14,
		marginRight: 5
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
	thequote: {
		fontFamily: "Inconsolata-Regular",
		color: "white",
		fontSize: 23,
		padding: 5,
		textAlign: "left"
	},
	category_icons: {
		backgroundColor: "white",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly"
	}
});
