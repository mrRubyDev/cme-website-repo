import React from "react";
import {
	blueParagraphStyle,
	headerStyleCenter,
	rose,
} from "../../../config/styles";
import TextImg from "../../Styled/TextImg";
import Brick from "../../Styled/Brick";
import AGTest from "../../../images/test-covid.png";
import PCR from "../../../images/pcr.jpeg";
import Footer from "../../Footer";
import { Button } from "../../Button";
import paths from "../../../navigation/paths";
import { useIsDesktop } from "../../../hooks/useMedia";

export default function Covid() {
	const isDesktop = useIsDesktop();
	return (
		<div
			style={{
				height: "100vh",
				paddingTop: "3vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100%",
			}}
		>
			<div
				style={{
					width: isDesktop ? "100%" : "90%",
					height: isDesktop ? "50vh" : "80vh",
				}}
			>
				<TextImg
					title="Tests de Antígenos"
					header="Covid-10 Ag"
					textImg
					img={isDesktop ? AGTest : null}
					centered={isDesktop ? false : true}
					noTicks
					paragraph="MSP recomienda Test de Antígenos como primera opción para detectar casos de SARS – CoV – 2. La muestra se obtiene mediante hisopado nasofaríngeo (igual que para la técnica PCR). Lo que detecta son determinadas proteínas presentes en el virus SarsCov-19 denominadas antígenos. Por tanto, la obtención de un resultado positivo al test de antígenos indica la presencia del virus en el paciente y hoy, según la ordenanza ministerial es diagnóstico positivo sin necesidad de realizar la técnica PCR, con notificación obligatoria al MSP. En caso de resultado negativo y sospecha de infección, se recomendará la técnica PCR."
				/>
			</div>
			<div style={{ height: "80rem" }}>
				<Brick
					color={rose}
					children={
						<div
							style={{
								width: isDesktop ? "50%" : "90%",
								padding: "1.5rem",
								marginBottom: "1rem",
							}}
						>
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
								cromatográfico rápido para la detección cualitativa de antígeno
								específico para SARS-CoV-2 presente en muestras nasofaríngeas de
								origen humano. Este producto ha sido desarrollado para emplearse
								en puntos de cuidado y condiciones clínicas, mediante
								profesionales entrenados de CME, como un apoyo en el diagnóstico
								oportuno en pacientes con síntomas clínicos de infección por
								SARS-CoV-2.
							</p>
						</div>
					}
				/>
			</div>
			<div
				style={{
					width: "100%",
					height: isDesktop ? "50vh" : "70vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginTop: "1rem",
				}}
			>
				<h2 style={headerStyleCenter}>También le ofrecemos:</h2>
				<TextImg
					mobile={isDesktop ? false : true}
					title="Hisopado para PCR a domicilio"
					header="Obligatorio para viajar"
					img={PCR}
					noTicks
					centered={isDesktop ? false : true}
					paragraph=" Detecta al virus cuando infecta a las personas. Es el método más confiable y el que aconsejan las Autoridades. Detecta a los pacientes que se han infectado, siendo ya positivo desde el 3 al 7º día de haberse contagiado, tenga luego o no síntomas. Los resultados están en 24 a 48 hs.  Obligatorio para viajar o ingresar al País, y la que se usa para confirmar contagios. IM colabora con CME para la realización de hisopados."
				/>
			</div>
			<div
				style={{
					display: "flex",
					height: "70vh",
					flexDirection: "column",
					alignItems: "center",
					margin: "2rem",
				}}
			>
				<Button text="Reservar" url={paths.Reservar.base} />
			</div>
			<Footer />
		</div>
	);
}
