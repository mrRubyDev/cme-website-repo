import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/screens/Landing";
import Reservar from "./components/screens/Reservar";
import AboutUs from "./components/screens/AboutUs";
import Empresas from "./components/screens/empresas/Empresas";
import Servicios from "./components/screens/servicios/Servicios";
import Address from "./components/Address";

import Especialidades from "./components/screens/especialidades/Especialidades";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import paths from "./navigation/paths";

function App() {
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
						<Address />
						<Switch>
							<Route path="/" exact component={Landing} />
							<Route path={paths.Landing} exact component={Landing} />
							<Route path={paths.AboutUs} exact component={AboutUs} />
							<Route path={paths.Reservar.base} exact component={Reservar} />
							<Route path={paths.Empresas.base} exact component={Empresas} />
							<Route
								path={paths.Especialidades.base}
								exact
								component={Especialidades}
							/>
							<Route path={paths.Servicios.base} exact component={Servicios} />
						</Switch>
					</div>
				</Router>
			</header>
		</div>
	);
}

export default App;
