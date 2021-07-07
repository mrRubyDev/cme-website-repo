import paths from "../navigation/paths";
import logo from "../logo-no-bck.png";
import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuItem from "./MenuItem";
import { useIsDesktop, useIsMobile } from "../hooks/useMedia";
import { GiHamburgerMenu } from "react-icons/gi";
import { matteBlue } from "../config/styles";
import PhoneDropDown from "./PhoneDropDown";

function Navbar() {
	const isDesktop = useIsDesktop();
	const [open, setOpen] = useState(false);
	const headerElements = [
		{ name: "Inicio", path: paths.Landing, insideElements: [] },
		{
			name: "COVID-19",
			path: paths.Servicios.Covid,
			insideElements: [],
		},

		{
			name: "Servicios",
			path: paths.Servicios.base,
			insideElements: [
				{ name: "Covid", path: paths.Servicios.Covid },
				{
					name: "Carnet de Salud Laboral",
					path: paths.Servicios.Carnet_salud,
				},
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
		{ name: "Tarifas", path: paths.Tarifas, insideElements: [] },
	];
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
		setOpen(false);
	};
	const closeMobileMenu = () => setClick(false);

	if (isDesktop) {
		return (
			<div className="navbar">
				<Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
					<img src={logo} alt="CME-logo" style={{ height: 200, width: 200 }} />
					<i className="fab fa-firstdraft" />
				</Link>

				<ul className={"nav-menu"}>
					{headerElements.map((element, i) => (
						<MenuItem el={element} key={i} handleClick={handleClick} />
					))}
				</ul>
				<div
					style={{
						marginRight: "2rem",
						width: "15%",
						height: "60%",
					}}
				>
					<Button text="Cita Previa" url={paths.Reservar.base} />
				</div>
			</div>
		);
	} else {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "100%",
					height: "fit-content",
				}}
			>
				<div
					style={{
						height: "6rem",
						width: "6rem",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<img
							src={logo}
							alt="CME-logo"
							style={{ height: "100%", width: "100%" }}
						/>
					</Link>
				</div>
				<div
					onClick={() => setOpen(!open)}
					style={{
						height: "5rem",
						width: "3rem",
						marginRight: "1rem",
						cursor: "pointer",
					}}
				>
					<GiHamburgerMenu
						style={{ height: "100%", width: "100%", color: matteBlue }}
					/>
				</div>
				{open && (
					<div
						style={{
							position: "absolute",
							display: "flex",
							top: "6rem",
							width: "100%",
							height: "100%",
						}}
					>
						<PhoneDropDown
							headerElements={headerElements}
							handleClick={handleClick}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default Navbar;
