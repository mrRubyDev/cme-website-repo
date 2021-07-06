import React from "react";
import { darkBlue } from "../config/styles";

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
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "80%",
					height: "5rem",
					color: darkBlue,
					border: "solid 1px",
					marginTop: 20,
					position: "absolute",
					bottom: "20%",
				}}
			>
				<p style={{ fontSize: "20px" }}>Tel: 091866209</p>
				<p style={{ fontSize: "20px", marginTop: 10 }}>
					L-V: 8 a 20 hs. S: 8 a 12:30
				</p>
			</div>
		);
}
