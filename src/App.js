import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/screens/Landing";
import Reservar from "./components/screens/Reservar";
import AboutUs from "./components/screens/AboutUs";
import Tarifas from "./components/screens/Tarifas";
import { Empresas } from "./components/screens/empresas/index";
import { Servicios } from "./components/screens/servicios/index";
import Address from "./components/Address";

import { Especialidades } from "./components/screens/especialidades/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import paths from "./navigation/paths";
import { useIsDesktop } from "./hooks/useMedia";
import NotFound from "./components/screens/NotFound";

function App() {
	const isDesktop = useIsDesktop();
	return (
		<div className="App">
			<header className="App-header">
				<Router>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<Navbar />
						{isDesktop && <Address />}
						<Switch>
							<Route path="/" exact component={Landing} />
							<Route path={paths.Landing} exact component={Landing} />
							<Route path={paths.Tarifas} exact component={Tarifas} />
							<Route path={paths.Reservar.base} exact component={Reservar} />
							{/* //Servicios */}
							<Route
								path={paths.Servicios.Covid}
								exact
								component={Servicios.Covid}
							/>
							<Route
								path={paths.Servicios.Carnet_salud}
								exact
								component={Servicios.CarnetSalud}
							/>
							<Route
								path={paths.Servicios.Carnet_salud_residencia}
								exact
								component={Servicios.CarnetSaludResidencia}
							/>
							<Route
								path={paths.Servicios.Libreta_amateur}
								exact
								component={Servicios.LibretaAmateur}
							/>
							<Route
								path={paths.Servicios.Libreta_profesional}
								exact
								component={Servicios.LibretaProfesional}
							/>
							<Route
								path={paths.Servicios.Aptitud_fisica}
								exact
								component={Servicios.AptitudFisica}
							/>
							<Route
								path={paths.Servicios.Lab}
								exact
								component={Servicios.Lab}
							/>
							<Route
								path={paths.Servicios.Ecografias}
								exact
								component={Servicios.Ecografias}
							/>
							{/* Empresas */}
							<Route
								path={paths.Empresas.Carnet_altura}
								exact
								component={Empresas.CarnetAltura}
							/>
							<Route
								path={paths.Empresas.Salud_laboral}
								exact
								component={Empresas.SaludLaboral}
							/>
							<Route
								path={paths.Empresas.Salud_ocupacional}
								exact
								component={Empresas.SaludOcupacional}
							/>
							<Route
								path={paths.Empresas.Seguridad}
								exact
								component={Empresas.Seguridad}
							/>
							<Route
								path={paths.Empresas.Higiene}
								exact
								component={Empresas.Higiene}
							/>
							{/* Especialidades */}
							<Route
								path={paths.Especialidades.Pediatria}
								exact
								component={Especialidades.Pediatria}
							/>
							<Route
								path={paths.Especialidades.Otorrinologia}
								exact
								component={Especialidades.Otorrinologia}
							/>
							<Route
								path={paths.Especialidades.Fisio}
								exact
								component={Especialidades.Fisio}
							/>
							<Route
								path={paths.Especialidades.Linfatico}
								exact
								component={Especialidades.Linfatico}
							/>

							<Route path="/*" component={NotFound} />
						</Switch>
					</div>
				</Router>
			</header>
		</div>
	);
}

export default App;
