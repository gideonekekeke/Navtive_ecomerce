import CartScreen from "../Screens/CartScreen";
import HomeScreen from "../Screens/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import VoucherScreen from "../Screens/VoucherScreen";
import WalletScreen from "../Screens/WalletScreen";
import SettingsScreen from "../Screens/SettingsScreen";

const TabConfig = [
	{
		name: "Home",
		component: HomeScreen,
		options: {
			tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons name='home' color={color} size={28} />
			),
		},
	},

	{
		name: "voucher",
		component: VoucherScreen,
		options: {
			tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons name='receipt' color={color} size={28} />
			),
		},
	},

	{
		name: "wallet",
		component: WalletScreen,
		options: {
			tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons name='wallet' color={color} size={28} />
			),
		},
	},

	{
		name: "settings",
		component: SettingsScreen,
		options: {
			tabBarIcon: ({ color, size }) => (
				<MaterialCommunityIcons
					name='account-settings'
					color={color}
					size={28}
				/>
			),
		},
	},
];



export default TabConfig;
