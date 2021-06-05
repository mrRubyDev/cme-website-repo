import React from "react";

import { createStackNavigator } from "react-navigation-stack";

import Servicios from "../components/screens/servicios/Servicios";
import Covid from "../components/screens/servicios/Covid";
import CarnetSalud from "../components/screens/servicios/CarnetSalud";
import CarnetSaludResidencia from "../components/screens/servicios/CarnetSaludResidencia";
import LibretaAmateur from "../components/screens/servicios/LibretaAmateur";
import LibretaProfesional from "../components/screens/servicios/LibretaProfesional";
import AptitudFisica from "../components/screens/servicios/AptitudFisica";
import Lab from "../components/screens/servicios/Lab";
import Ecografias from "../components/screens/servicios/Ecografias";

const Stack = createStackNavigator();

export default function ServiciosStack() {
	return (
		<Stack.Navigator
			initialRouteName={"ServiciosGlobal"}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name={"ServiciosGlobal"} component={Servicios} />
			<Stack.Screen name={"Covid"} component={Covid} />
			<Stack.Screen name={"CarnetSalud"} component={CarnetSalud} />
			<Stack.Screen
				name={"CarnetSaludResidencia"}
				component={CarnetSaludResidencia}
			/>
			<Stack.Screen name={"LibretaAmateur"} component={LibretaAmateur} />
			<Stack.Screen
				name={"LibretaProfesional"}
				component={LibretaProfesional}
			/>
			<Stack.Screen name={"AptitudFisica"} component={AptitudFisica} />
			<Stack.Screen name={"Lab"} component={Lab} />
			<Stack.Screen name={"Ecografias"} component={Ecografias} />
		</Stack.Navigator>
	);
}
