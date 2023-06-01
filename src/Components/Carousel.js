import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const data = [
	{ id: 1, title: "Slide 1" },
	{ id: 2, title: "Slide 2" },
	{ id: 3, title: "Slide 3" },
];

const CarouselComp = () => {
    const { width } = Dimensions.get("window");
	const renderItem = ({ item }) => {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>{item.title}</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Carousel
				data={data}
				renderItem={renderItem}
				sliderWidth={width}
				itemWidth={200}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	slide: {
		width: 300,
		height: 200,
		backgroundColor: "#ebebeb",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
});


export default CarouselComp