import React from "react";
import "./Navbar.css";
import MenuItem from "./MenuItem";
import { Button } from "./Button";
import paths from "../navigation/paths";
import { useIsMobile } from "../hooks/useMedia";

export default function PhoneDropDown({ headerElements, handleClick }) {
	const isMobile = useIsMobile();
	if (!isMobile)
		return (
			<div
				style={{
					backgroundColor: "red",
					position: "absolute",
					height: "fit-content",
					width: "100%",
					marginRight: 2,
					display: "flex",
					flexWrap: "wrap",
					alignItems: "space-between",
				}}
			>
				<ul className={"nav-menu-mobile"}>
					{headerElements.map(
						(element, i) =>
							element.name !== "Inicio" && (
								<MenuItem el={element} key={i} handleClick={handleClick} />
							)
					)}
					<div style={{ width: "10rem" }}>
						<Button text="Cita Previa" url={paths.Reservar.base} />
					</div>
				</ul>
			</div>
		);
	else
		return (
			<div
				style={{
					backgroundColor: "white",
					position: "absolute",
					height: "fit-content",
					width: "100%",
					marginRight: 2,
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				<ul className={"nav-menu-mobile"}>
					{headerElements.map(
						(element, i) =>
							element.name !== "Inicio" && (
								<MenuItem el={element} key={i} handleClick={handleClick} />
							)
					)}
					<div style={{ width: "10rem" }}>
						<Button text="Cita Previa" url={paths.Reservar.base} />
					</div>
				</ul>
			</div>
		);
}
