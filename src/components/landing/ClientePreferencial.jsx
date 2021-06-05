import React from "react";
import Preferencial from "../../images/cliente-preferencial.png";
import {
	blueParagraphStyleLeft,
	buttonBlue,
	darkBlue,
} from "../../config/styles";
import { Button } from "../Button";
import paths from "../../navigation/paths";

export default function ClientePreferencial() {
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				justifyContent: "center",
				marginTop: ".2rem",
			}}
		>
			<div style={{ width: "70%", display: "flex" }}>
				<div style={{ width: "40%" }}>
					<img
						src={Preferencial}
						alt="Preferencial"
						style={{ height: "65%", borderRadius: "15%" }}
					/>
				</div>
				<div style={{ width: "60%", display: "flex", flexDirection: "column" }}>
					<h2
						style={{
							color: darkBlue,
							fontSize: 28,
							marginTop: ".5rem",
							marginBottom: "1rem",
						}}
					>
						CLIENTE PREFERENCIAL
					</h2>
					<p style={blueParagraphStyleLeft}>
						¡Obtenga su carné de beneficios sin cuota mensual! Sea usuario
						preferencial de CME y acceda a Análisis Clínicos, Ecografías,
						Electrocardiogramas, PAP y muchos más… con honorarios de hasta 50%
						de descuento.
					</p>
					<p style={blueParagraphStyleLeft}>
						¿Por qué esperar meses para atenderse con un especialista? En CME le
						agendamos en la misma semana que lo solicita.
					</p>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: "2rem",
						}}
					>
						<div style={{ marginTop: "2rem" }}>
							<Button text={"Especialidades"} url={paths.Especialidades.base} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
