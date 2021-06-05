import paths from "../navigation/paths";
import logo from "../logo-no-bck.png";
import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuItem from "./MenuItem";

function Navbar() {
	const headerElements = [
		{ name: "Inicio", path: paths.Landing, insideElements: [] },
		{ name: "COVID-19", path: paths.Servicios.Covid, insideElements: [] },
		{ name: "Nosotros", path: paths.AboutUs, insideElements: [] },
		{
			name: "Servicios",
			path: paths.Servicios.base,
			insideElements: [
				{ name: "Covid", path: paths.Servicios.Covid },
				{ name: "Carnet de Salud Laboral", path: paths.Servicios.Carnet_salud },
				{
					name: "Carnet de Salud para Residencia",
					path: paths.Servicios.Carnet_salud_residencia,
				},
				{
					name: "Libreta de Conducir Amateur",
					path: paths.Servicios.Libreta_amateur,
				},
				{
					name: "Libreta de Conducir Profesional",
					path: paths.Servicios.Libreta_profesional,
				},
				{
					name: "Certificado de Aptitud Física",
					path: paths.Servicios.Aptitud_fisica,
				},
				{ name: "Análisis Clínicos", path: paths.Servicios.Lab },
				{ name: "Ecografías", path: paths.Servicios.Ecografias },
			],
		},
		{
			name: "Especialidades",
			path: paths.Especialidades.base,
			insideElements: [
				{ name: "Pediatría", path: paths.Especialidades.Pediatria },
				{ name: "Otorrinología", path: paths.Especialidades.Otorrinologia },
				{ name: "Fisioterápia y Ergonomía", path: paths.Especialidades.Fisio },
				{ name: "Centro Linfático", path: paths.Especialidades.Linfatico },
			],
		},
		{
			name: "Empresas",
			path: paths.Empresas.base,
			insideElements: [
				{
					name: "Carnet Aptitud Trabajo en Altura",
					path: paths.Empresas.Carnet_altura,
				},
				{ name: "Salud Ocupacional", path: paths.Empresas.Salud_ocupacional },
				{ name: "Fisioterápia y Ergonomía", path: paths.Especialidades.Fisio },
				{
					name: "Carnet de Salud Laboral",
					path: paths.Empresas.Salud_laboral,
				},
				{
					name: "Higiene Industrial",
					path: paths.Empresas.Higiene,
				},
				{
					name: "Seguridad Industrial",
					path: paths.Empresas.Seguridad,
				},
			],
		},
	];
	const [click, setClick] = useState(false);

	const handleClick = name => {
		setClick(!click);
	};
	const closeMobileMenu = () => setClick(false);

	return (
		<div className="navbar">
			<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
				<img src={logo} alt="CME-logo" style={{ height: 200, width: 200 }} />
				<i className="fab fa-firstdraft" />
			</Link>
			<div className="menu-icon">
				<i className={"fas fa-bars"} />
			</div>
			<ul className={"nav-menu"}>
				{headerElements.map((element, i) => (
					<MenuItem el={element} key={i} handleClick={handleClick} />
				))}
			</ul>
			<div>
				<Button text="Cita Previa" url={paths.Reservar.base} />
			</div>
		</div>
	);
}

export default Navbar;
