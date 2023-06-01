import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Cartegories = () => {
	return (
		<ScrollView horizontal={true} style={styles.scrollView}>
			<View style={styles.container}>
				<View>
					<View style={styles.box}>
						<MaterialCommunityIcons name='shoe-sneaker' size={40} />
					</View>
					<Text style={styles.texting}>Shoes</Text>
				</View>

				<View>
					<View style={styles.box}>
						<MaterialCommunityIcons name='tshirt-v' size={40} />
					</View>
					<Text style={styles.texting}>T-shirt</Text>
				</View>
				<View>
					<View style={styles.box}>
						<MaterialCommunityIcons name='football' size={40} />
					</View>
					<Text style={styles.texting}>Football</Text>
				</View>

				<View>
					<View style={styles.box}>
						<MaterialCommunityIcons name='fruit-cherries' size={40} />
					</View>
					<Text style={styles.texting}>Fruits</Text>
				</View>
				<View>
					<View style={styles.box}>
						<MaterialCommunityIcons name='ice-cream' size={40} />
					</View>
					<Text style={styles.texting}>Ice creams</Text>
				</View>

				<View>
					<View style={styles.box}>
						<MaterialCommunityIcons name='shoe-sneaker' size={40} />
					</View>
					<Text style={styles.texting}>Shoes</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Cartegories;
const styles = StyleSheet.create({
	texting: {
		justifyContent: "center",
	},

	scrollView: {
		height: 100, // Set a fixed height for the ScrollView
	},

	container: {
		padding: 10,
		paddingLeft: 20,
		flexDirection: "row",
		height: 100,
        backgroundColor : "white"
	},

	box: {
		height: 60,
		width: 60,
		backgroundColor: "#f1f1f1",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 30,
        
	},
});
