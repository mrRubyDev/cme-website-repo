import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Especialidades from "../components/screens/especialidades/Especialidades";
import Pediatria from "../components/screens/especialidades/Pediatria";
import Otorrinologia from "../components/screens/especialidades/Otorrinologia";
import Fisio from "../components/screens/especialidades/Fisio";
import Linfatico from "../components/screens/especialidades/Linfatico";

const Stack = createStackNavigator();

export default function EspecialidadesStack() {
	return (
		<Stack.Navigator
			initialRouteName={"Especialidades"}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name={"Especialidades"} component={Especialidades} />
			<Stack.Screen name={"Pediatria"} component={Pediatria} />
			<Stack.Screen name={"Otorrinologia"} component={Otorrinologia} />
			<Stack.Screen name={"Fisiologia"} component={Fisio} />
			<Stack.Screen name={"Linfatico"} component={Linfatico} />
		</Stack.Navigator>
	);
}
