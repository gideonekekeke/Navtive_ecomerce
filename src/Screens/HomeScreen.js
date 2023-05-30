import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text>
				<View style={styles.inputHold}>
					<TextInput style={styles.input} placeholder='Search' />
					<Text>helo</Text>
				</View>
			</Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingLeft: 20,
		flex: 1,
	},

	input: {
		flex : 1,
		borderColor: "silver",
		height: 40,
		borderWidth: 1,
		padding: 10,
	},

	inputHold: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
