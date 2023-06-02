import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Dimensions,
	Button,
	Image,
	ScrollView,
	SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import pic from "../assets/3.png";
import Cartegories from "../Components/Cartegories";
import Products from "../Components/Products";
const HomeScreen = () => {
	const { width } = Dimensions.get("window");
	return (
		<SafeAreaView style = {{paddingTop : 50}}>
			<ScrollView>
				<View style={styles.container}>
					<Text>
						<View style={styles.inputHold}>
							<TextInput style={styles.input} placeholder='Search' />
							<View style={styles.cartStyle}>
								<MaterialCommunityIcons name='cart' size={27} />
								<Text style={styles.count}>0</Text>
							</View>
						</View>
					</Text>
					<View
						style={{
							width: width,
							flexDirection: "row",
							marginTop: 30,
							paddingBottom: 20,
							alignItems: "center",
						}}>
						<View>
							<Text style={styles.fashion}>#SHOPPING DAY</Text>
							<Text style={styles.off}>75% OFF</Text>
							<Text style={styles.desc}>
								Choose from the best food store in nigeria
							</Text>
							<Button
								color='#e91e63'
								title='Check this out'
								onPress={() => alert("Simple Button pressed")}
							/>
						</View>
						<View>
							<Image
								style={{
									height: 200,
									width: 200,
								}}
								source={pic}
							/>
						</View>
					</View>
				</View>
				<Cartegories />
				<Products />
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	Buton: {
		width: 100,
		marginTop: 10,
	},

	desc: {
		width: 200,
		color: "gray",
		marginBottom: 20,
	},
	off: {
		fontSize: 40,
		fontWeight: "bold",
	},

	fashion: {
		fontSize: 15,
	},

	container: {
		padding: 10,
		paddingLeft: 20,
		backgroundColor: "#f1f1",
	},

	input: {
		width: 300,
		borderColor: "silver",
		height: 40,
		borderWidth: 1,
		padding: 10,
		marginRight: 10,
		borderRadius: 5,
	},

	inputHold: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	cartStyle: {
		flexDirection: "row",
	},

	count: {
		backgroundColor: "#e91e63",
		height: 12,
		width: 10,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		display: "flex",
	},

	carousel: {
		width: 100,
		backgroundColor: "red",
		height: 500,
	},
});
