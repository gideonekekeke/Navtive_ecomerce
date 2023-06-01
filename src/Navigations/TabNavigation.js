import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabConfig from "./TabConfig";

const Tab = createBottomTabNavigator();

const TabNavigations = () => {
	return (
		<Tab.Navigator

			screenOptions={{
				tabBarActiveTintColor: "#e91e63",
				headerShown : false
			}}>
			{TabConfig.map((tab) => (
				<Tab.Screen
                
					key={tab.name}
					name={tab.name}
					component={tab.component}
					options={tab.options}


				/>
			))}
		</Tab.Navigator>
	);
};

export default TabNavigations;
