import React from "react";
import Banner from "../banner/Banner";
import PasosLanding from "../landing/PasosLanding";
import VeintiCuatroHoras from "../landing/VeintiCuatroHoras";
import ClientePreferencial from "../landing/ClientePreferencial";

export default function Landing() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Banner />
			<h4 style={{ fontStyle: "italic", fontSize: "25px" }}>
				Más de 30 años de experiencia nos avalan.
			</h4>
			<PasosLanding />
			<VeintiCuatroHoras />
			<ClientePreferencial />
		</div>
	);
}
