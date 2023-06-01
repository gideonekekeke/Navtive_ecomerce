import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<Text style={styles.sign}>SIGN IN</Text>
			<Text style={{ marginBottom: 20 }}>
				Welcome back, login your credentials to continue
			</Text>
			<TextInput style={styles.input} placeholder='email' />
			<TextInput style={styles.input} placeholder='password' />

			<Pressable style={styles.button}>
				<Text
					style={{
						color: "white",
					}}>
					{" "}
					SIGN IN
				</Text>
			</Pressable>

			<Text style={{ marginBottom: 20 }}>
				Don't have an account?{" "}
				<Text
					style={{
						color: "blue",
					}}
					onPress={() => {
						navigation.navigate("register");
					}}>
					Signup
				</Text>
			</Text>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	button: {
		width: 320,
		borderColor: "silver",
		height: 45,
		borderWidth: 1,
		padding: 10,
		marginRight: 10,
		borderRadius: 30,
		marginBottom: 15,
		backgroundColor: "#e91e63",
		justifyContent: "center",
		alignItems: "center",
	},

	container: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		display: "flex",
		marginTop: 150,
	},

	sign: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#e91e63",
	},

	input: {
		width: 320,
		borderColor: "silver",
		height: 45,
		borderWidth: 1,
		padding: 10,
		marginRight: 10,
		borderRadius: 30,
		marginBottom: 15,
	},
});
