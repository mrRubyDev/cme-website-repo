import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Empresas from "../components/screens/empresas/Empresas";
import CarnetAltura from "../components/screens/empresas/CarnetAltura";
import SaludOcupacional from "../components/screens/empresas/SaludOcupacional";
import SaludLaboral from "../components/screens/empresas/SaludLaboral";
import Seguridad from "../components/screens/empresas/Seguridad";
import Higiene from "../components/screens/empresas/Higiene";
const Stack = createStackNavigator();

export default function EmpresasStack() {
	return (
		<Stack.Navigator
			initialRouteName={"Empresas"}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name={"Empresas"} component={Empresas} />
			<Stack.Screen name={"CarnetAltura"} component={CarnetAltura} />
			<Stack.Screen name={"SaludOcupacional"} component={SaludOcupacional} />
			<Stack.Screen name={"SaludLaboral"} component={SaludLaboral} />
			<Stack.Screen name={"Seguridad"} component={Seguridad} />
			<Stack.Screen name={"Higiene"} component={Higiene} />
		</Stack.Navigator>
	);
}
