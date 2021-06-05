import paths from "./paths";
import * as Linking from "expo-linking";
import Main from "./index";
import AboutUs from "../components/screens/AboutUs";
import ServiciosStack from "./ServiciosNavigator";
import Landing from "../components/screens/Landing";
import Covid from "../components/screens/servicios/Covid";
import CarnetSalud from "../components/screens/servicios/CarnetSalud";
import CarnetSaludResidencia from "../components/screens/servicios/CarnetSaludResidencia";
import LibretaAmateur from "../components/screens/servicios/LibretaAmateur";
import LibretaProfesional from "../components/screens/servicios/LibretaProfesional";
import AptitudFisica from "../components/screens/servicios/AptitudFisica";
import Lab from "../components/screens/servicios/Lab";
import Ecografias from "../components/screens/servicios/Ecografias";
import EspecialidadesStack from "./EspecialidadesNavigator";
import Pediatria from "../components/screens/especialidades/Pediatria";
import EmpresasStack from "./EmpresasNavigator";
import CarnetAltura from "../components/screens/empresas/CarnetAltura";
import SaludOcupacional from "../components/screens/empresas/SaludOcupacional";
import SaludLaboral from "../components/screens/empresas/SaludLaboral";
import Seguridad from "../components/screens/empresas/Seguridad";
import Higiene from "../components/screens/empresas/Higiene";
import Reservar from "../components/screens/Reservar";

const prefix = Linking.makeUrl("/");

const linking = {
	prefixes: [prefix],
	config: {
		screens: {
			MainStack: {
				screen: Main,
				path: paths.Landing,
				initialRouteName: "Landing",
				screens: {
					Landing: {
						screen: Landing,
						path: paths.Landing,
					},
					AboutUs: {
						screen: AboutUs,
						path: paths.AboutUs,
					},
					ServiciosStack: {
						screen: ServiciosStack,
						path: paths.Servicios.base,
						initialRouteName: "ServiciosGlobal",
						screens: {
							Covid: {
								screen: Covid,
								path: paths.Servicios.Covid,
							},
							CarnetSalud: {
								screen: CarnetSalud,
								path: paths.Servicios.CarnetSalud,
							},
							CarnetSaludResidencia: {
								screen: CarnetSaludResidencia,
								path: paths.Servicios.CarnetSaludResidencia,
							},
							LibretaAmateur: {
								screen: LibretaAmateur,
								path: paths.Servicios.LibretaAmateur,
							},
							LibretaProfesional: {
								screen: LibretaProfesional,
								path: paths.Servicios.LibretaProfesional,
							},
							AptitudFisica: {
								screen: AptitudFisica,
								path: paths.Servicios.AptitudFisica,
							},
							Lab: {
								screen: Lab,
								path: paths.Servicios.Lab,
							},
							Ecografias: {
								screen: Ecografias,
								path: paths.Servicios.Ecografias,
							},
						},
					},
					EspecialidadesStack: {
						screen: EspecialidadesStack,
						path: paths.Especialidades.base,
						initialRouteName: "Especialidades",
						screens: {
							Pediatria: {
								screen: Pediatria,
								path: paths.Especialidades.Pediatria,
							},
							CarnetSalud: {
								screen: CarnetSalud,
								path: paths.Especialidades.Otorrinologia,
							},
							CarnetSaludResidencia: {
								screen: CarnetSaludResidencia,
								path: paths.Especialidades.Fisio,
							},
							LibretaAmateur: {
								screen: LibretaAmateur,
								path: paths.Especialidades.Linfatico,
							},
						},
					},

					EmpresasStack: {
						screen: EmpresasStack,
						path: paths.Empresas.base,
						initialRouteName: "Empresas",
						screens: {
							CarnetAltura: {
								screen: CarnetAltura,
								path: paths.Empresas.Carnet_altura,
							},
							SaludOcupacional: {
								screen: SaludOcupacional,
								path: paths.Empresas.Salud_ocupacional,
							},
							SaludLaboral: {
								screen: SaludLaboral,
								path: paths.Empresas.Salud_laboral,
							},
							Seguridad: {
								screen: Seguridad,
								path: paths.Empresas.Seguridad,
							},
							Higiene: {
								screen: Higiene,
								path: paths.Empresas.Higiene,
							},
						},
					},
					Reservar: {
						screen: Reservar,
						path: paths.Reservar,
					},
				},
			},
		},
	},
};

export default linking;
