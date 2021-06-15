import React from "react";
import "./Navbar.css";
import MenuItem from "./MenuItem";
import { Button } from "./Button";
import paths from "../navigation/paths";
import { useIsDesktop, useIsMobile, useIsTablet } from "../hooks/useMedia";

export default function PhoneDropDown({ headerElements, handleClick }) {
	const isMobile = useIsMobile();
	const isTablet = useIsTablet();
	const isDesktop = useIsDesktop();
	if (isTablet)
		return (
			<div
				style={{
					position: "absolute",
					height: "fit-content",
					width: "95%",
					marginHorizontal: 2,
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				{headerElements.map(
					(element, i) =>
						element.name !== "Inicio" && (
							<MenuItem el={element} key={i} handleClick={handleClick} />
						)
				)}
				<div style={{ width: "8rem" }}>
					<Button text="Cita Previa" url={paths.Reservar.base} navbar />
				</div>
			</div>
		);
	return (
		<ul className={"nav-menu-mobile"}>
			<div style={{ marginTop: 10 }}>
				{headerElements.map(
					(element, i) =>
						element.name !== "Inicio" && (
							<MenuItem el={element} key={i} handleClick={handleClick} mobile />
						)
				)}
			</div>
			<div style={{ width: "10rem", marginTop: 20 }}>
				<Button text="Cita Previa" url={paths.Reservar.base} />
			</div>
		</ul>
	);
}
