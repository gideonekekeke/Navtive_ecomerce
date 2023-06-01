import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductCard from "./ProductCard";

const Products = () => {
	return (
		<View style={styles.container}>
			<View style={styles.ProdText}>
				<Text style={styles.Tested}>Best Sale Products</Text>
				<Text style={styles.see}>See more</Text>
			</View>
			<View style={styles.cardHold}>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</View>
		</View>
	);
};

export default Products;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingLeft: 20,
		flex: 1,
		justifyContent: "flex-start",
		marginTop:20,
		backgroundColor: "white",
	},

	ProdText: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom : 20
	},

	Tested: {
		fontSize: 20,
		fontWeight: "bold",
	},

	see: {
		marginRight: 10,
	},

	cardHold: {
		flexDirection : "row",
		flexWrap : "wrap",
		justifyContent : "space-between"
	},
});
