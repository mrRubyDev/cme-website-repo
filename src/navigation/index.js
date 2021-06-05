import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Landing from "../components/screens/Landing";
import AboutUs from "../components/screens/AboutUs";
import ServiciosStack from "./ServiciosNavigator";
import EspecialidadesStack from "./EspecialidadesNavigator";
import EmpresasStack from "./EmpresasNavigator";
import Reservar from "../components/screens/Reservar";

const Stack = createStackNavigator();

export default function Main() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={"Landing"}
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name={"Landing"} component={Landing} />
				<Stack.Screen name={"AboutUs"} component={AboutUs} />
				<Stack.Screen name={"ServiciosStack"} component={ServiciosStack} />
				<Stack.Screen
					name={"EspecialidadesStack"}
					component={EspecialidadesStack}
				/>
				<Stack.Screen name={"EmpresasStack"} component={EmpresasStack} />
				<Stack.Screen name={"Reservar"} component={Reservar} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
