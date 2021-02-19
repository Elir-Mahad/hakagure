import { StyleSheet } from "react-native";

export default StyleSheet.create({
	//
	// Styles for welcome screen
	//
	welcome_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white"
	},
	wrap_image: {
		alignItems: "center"
	},
	welcome_image: {
		width: 150,
		height: 150,
		borderRadius: 100
	},
	welcome_titleText: {
		fontSize: 30,
		paddingTop: 5,
		paddingBottom: 5
	},
	welcome_subtitleText: {
		fontSize: 20,
		paddingTop: 5,
		paddingBottom: 5
	},
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
	edu_button: {
		alignItems: "center"
	},
	right_arrow: {
		width: 30,
		height: 30
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
	categories: {
		display: "flex",
		flexDirection: "row"
	},
	table_button: {
		marginBottom: 15,
		borderRadius: 3,
		backgroundColor: "black",
		height: 100,
		width: 170,
		margin: 4
	},
	table_buttonText: {
		fontFamily: "Inconsolata-Regular",
		color: "white",
		fontSize: 17,
		textAlign: "left",
		marginLeft: 6,
		marginTop: 6
	},
	//
	// edu styles
	//
	category_screen: {
		backgroundColor: "lightgrey",
		paddingTop: 20,
		paddingBottom: 20
	},
	category_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		margin: 15,
		borderRadius: 5
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
	category_bodyText: {
		color: "white",
		fontFamily: "Inconsolata-Regular",
		fontSize: 23,
		padding: 5,
		textAlign: "center"
	},
	backgroundimage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		height: "100%",
		justifyContent: "center"
	},
	category_icons: {
		backgroundColor: "white",
		width: "100%",
		padding: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		borderBottomRightRadius: 5,
		borderBottomLeftRadius: 5
	}
});
