import React from "react";
import Logo from "../logo-no-bck.png";
export default function Footer() {
	return (
		<div
			style={{
				height: "20vh",
				width: "100%",
				borderTop: "1px solid lightgrey",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						margin: "0px 50px 0px",
					}}
				>
					<h4 style={{ marginBottom: "1rem" }}>Preguntas Frecuentes</h4>
					<p>Nosotros</p>
					<p>Blog</p>
					<p>Empresas</p>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						margin: "0px 50px 0px",
					}}
				>
					<h4 style={{ marginBottom: "1rem" }}>Social</h4>
					<p>Instagram</p>
					<p>Facebook</p>
					<p>LinkedIn</p>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						margin: "0px 50px 0px",
					}}
				>
					<h4 style={{ marginBottom: "1rem" }}>Legal</h4>
					<p>Condiciones del Servicio</p>
					<p>Política de Privacidad</p>
					<p>Condiciones de Uso</p>
				</div>
				<div style={{ height: "80%", width: "10%", marginLeft: "2rem" }}>
					<img src={Logo} alt="CME" style={{ height: "100%", width: "100%" }} />
				</div>
			</div>
		</div>
	);
}
