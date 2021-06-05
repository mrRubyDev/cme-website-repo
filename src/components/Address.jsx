import React from "react";

export default function Address() {
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
}
