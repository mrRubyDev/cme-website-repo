import React from "react";
import { darkBlue, matteBlue } from "../config/styles";

export default function Address({ mobile }) {
	if (!mobile)
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: 40,
					backgroundColor: "lightskyblue",
				}}
			>
				<p>Tel: 091866209</p>
				<p style={{ marginLeft: 40 }}>
					Lunes a Viernes de 8 a 20 hs. Sábados de 8 a 12:30
				</p>
			</div>
		);
	else
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "5rem",
					color: darkBlue,
				}}
			>
				<p style={{ fontSize: "14px" }}>Tel: 091866209</p>
				<p style={{ marginLeft: 20, fontSize: "14px" }}>
					L-V: 8 a 20 hs. S: 8 a 12:30
				</p>
			</div>
		);
}
