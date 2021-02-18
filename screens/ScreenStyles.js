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
		backgroundColor: "darkred",
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
	edu_container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "lightgrey",
		margin: 10,
		borderRadius: 5
	},
	edu_image: {
		width: 70,
		height: 70,
		borderRadius: 100
	},
	quotations: {
		fontSize: 200
	},
	edu_bodyText: {
		color: "black",
		fontFamily: "Inconsolata-Regular",
		fontSize: 23,
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
	backgroundimage: {
		flex: 1,
		resizeMode: "cover",
		width: "100%",
		justifyContent: "center",
		height: 400
	},
	edu_icons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly"
	}
});
