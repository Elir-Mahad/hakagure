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
		fontFamily: "PatrickHand_400Regular",
		fontSize: 22,
		padding: 5,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
		textAlign: "center",
		borderRadius: 5,
		borderColor: "black",
		borderWidth: 2
	},
	welcome_button: {
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 5,
		borderRadius: 3,
		backgroundColor: "darkred",
		alignItems: "center"
	},
	buttonText: {
		color: "white",
		fontSize: 15,
		paddingTop: 5,
		paddingBottom: 5
	},
	//
	// styles for table of contents
	//
	table_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white"
	},
	table_titleText: {
		fontSize: 25,
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 5,
		borderRadius: 5,
		borderColor: "black",
		borderWidth: 2
	},
	table_image: {
		width: 100,
		height: 100,
		marginBottom: 15,
		marginTop: 15,
		borderRadius: 100
	},
	table_button: {
		marginBottom: 15,
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 5,
		borderRadius: 3,
		backgroundColor: "darkred",
		alignItems: "center",
		width: 250
	},
	table_buttonText: {
		color: "white",
		fontSize: 17,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 20,
		paddingRight: 20
	},
	//
	// edu styles
	//
	edu_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "white"
	},
	edu_image: {
		width: 150,
		height: 150,
		borderRadius: 100
	},
	edu_bodyText: {
		fontFamily: "PatrickHand_400Regular",
		fontSize: 30,
		padding: 5,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
		marginTop: 20,
		textAlign: "center",
		borderRadius: 5,
		borderColor: "black",
		borderWidth: 2
	},
	edu_button: {
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 5,
		borderRadius: 3,
		backgroundColor: "darkred",
		alignItems: "center"
	},
	edu_buttonText: {
		color: "white",
		fontSize: 17,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 20,
		paddingRight: 20
	}
});
