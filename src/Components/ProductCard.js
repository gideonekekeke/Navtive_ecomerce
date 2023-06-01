import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import pro from "../assets/prod.png";

const ProductCard = () => {
	return (
		<View style={styles.cardContainer}>
			<Image source={pro} style={styles.image} />
			<View style={styles.ImageText}>
				<Text style={styles.cartegories}>Title</Text>
				<Text style = {styles.title}>Men Soft Drinks</Text>
				<Text style = {styles.title2}>$200</Text>
			</View>
		</View>
	);
};

export default ProductCard;

const styles = StyleSheet.create({
	cardContainer: {
		height: 250,
		width: 170,
		backgroundColor: "#f1f1f1",
		marginRight: 5,
		borderRadius: 5,
		marginBottom: 15,
	},

	title: {
		fontSize: 15,
		fontWeight: "bold",
	},

	title2: {
		fontSize: 15,
		fontWeight: "bold",
		marginTop: 10,
		color: "#e91e63",
	},

	cartegories: {
		color: "gray",
	},

	ImageText: {
		marginLeft: 10,
		marginTop: 10,
	},

	image: {
		width: 170,
		height: 150,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	},
});
