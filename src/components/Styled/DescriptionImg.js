import React from "react";
import {
	blueParagraphStyle,
	headerStyleCenter,
	rose,
} from "../../config/styles";
import TextImg from "../Styled/TextImg";
import AGTest from "../../images/test-covid.png";
import Footer from "../Footer";
import { Button } from "../Button";
import paths from "../../navigation/paths";

export default function DescriptionImg() {
	return (
		<div
			style={{
				height: "100vh",
				paddingTop: "3vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<div style={{ width: "100%", height: "50vh" }}>
				<TextImg
					title="Tests de Antígenos"
					header="Covid-10 Ag"
					textImg
					img={AGTest}
					noTicks
					paragraph="MSP recomienda Test de Antígenos como primera opción para detectar casos de SARS – CoV – 2. La muestra se obtiene mediante hisopado nasofaríngeo (igual que para la técnica PCR). Lo que detecta son determinadas proteínas presentes en el virus SarsCov-19 denominadas antígenos. Por tanto, la obtención de un resultado positivo al test de antígenos indica la presencia del virus en el paciente y hoy, según la ordenanza ministerial es diagnóstico positivo sin necesidad de realizar la técnica PCR, con notificación obligatoria al MSP. En caso de resultado negativo y sospecha de infección, se recomendará la técnica PCR."
				/>
			</div>
			<div
				style={{
					display: "flex",
					height: "70vh",
					flexDirection: "column",
					alignItems: "center",
					backgroundColor: rose,
				}}
			>
				<div style={{ width: "50%", padding: "2rem" }}>
					<h2 style={headerStyleCenter}>¿Cuando se sugiere este método?</h2>
					<p style={blueParagraphStyle}>
						En todo paciente con síntomas respiratorios, en pacientes
						convivientes con un COVID positivo o pacientes que estuvieron en
						contacto con COVID positivo por lo menos hace 7 días. La prueba
						tarda 15 minutos.
					</p>
					<br />
					<br />
					<p style={blueParagraphStyle}>
						La prueba STANDARD Q COVID-19 Ag Test es un inmunoensayo
						cromatográfico rápido para la detección cualitativa de antígeno
						específico para SARS-CoV-2 presente en muestras nasofaríngeas de
						origen humano. Este producto ha sido desarrollado para emplearse en
						puntos de cuidado y condiciones clínicas, mediante profesionales
						entrenados de CME, como un apoyo en el diagnóstico oportuno en
						pacientes con síntomas clínicos de infección por SARS-CoV-2.
					</p>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							margin: "2rem",
						}}
					>
						<Button text="Reservar" url={paths.Reservar.base} />
					</div>
				</div>
			</div>
		</div>
	);
}
