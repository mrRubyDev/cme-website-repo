import React from "react";
import Banner from "../banner/Banner";
import PasosLanding from "../landing/PasosLanding";
import TextImg from "../Styled/TextImg";
import Medico from "../../images/doctor-woman.jpeg";
import { rose } from "../../config/styles";
import Footer from "../Footer";
import paths from "../../navigation/paths";
import { useIsMobile, useIsTablet, useIsDesktop } from "../../hooks/useMedia";
import Brick from "../Styled/Brick";

export default function Landing() {
	const isMobile = useIsMobile();
	const isTablet = useIsTablet();
	const isDesktop = useIsDesktop();
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div style={{ width: "100vw", height: "80%" }}>
				<Banner />
			</div>
			<div
				style={{
					width: "80vw",
					textAlign: "center",
					fontSize: isMobile ? "14px" : "20px",
				}}
			>
				<h4 style={{ fontStyle: "italic", fontSize: "25px" }}>
					Más de 30 años de experiencia nos avalan.
				</h4>
			</div>
			<div>
				<PasosLanding style={{ width: "100vw" }} />
			</div>
			{isDesktop && (
				<>
					<div style={{ height: "50vh", marginBottom: "2rem" }}>
						<TextImg
							img={Medico}
							header="ENCUENTRE EL SERVICIO QUE NECESITA"
							title="Consulta médica con especialistas en 24 horas"
							paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste
				obcaecati magnam ipsam? Molestiae, impedit officia, at minus
				deserunt eos, nostrum quo cum molestias in accusantium quisquam
				ducimus quibusdam deleniti!"
							line1="Los mejores especialistas"
							line2="Las mejores especialidades"
							button="Especialidades"
							buttonUrl={paths.Especialidades.base}
						/>
					</div>
					<div style={{ height: "25rem" }}>
						<TextImg
							textImg
							img={Medico}
							title="CLIENTE PREFERENCIAL"
							paragraph="¡Obtenga su carné de beneficios sin cuota mensual! Sea usuario preferencial de CME y acceda a Análisis Clínicos, Ecografías, Electrocardiogramas, PAP y muchos más… con honorarios de hasta 50% de descuento.

				¿Por qué esperar meses para atenderse con un especialista? En CME le agendamos en la misma semana que lo solicita."
							line1="Sin esperas"
							line2="Los mejores precios"
						/>
					</div>
				</>
			)}
			{!isDesktop && (
				<div>
					<div style={{ marginBottom: "2rem", backgroundColor: rose }}>
						<TextImg
							centered
							color={rose}
							header="ENCUENTRE EL SERVICIO QUE NECESITA"
							title="Consulta médica con especialistas en 24 horas"
							paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste
				obcaecati magnam ipsam? Molestiae, impedit officia, at minus
				deserunt eos, nostrum quo cum molestias in accusantium quisquam
				ducimus quibusdam deleniti!"
							line1="Los mejores especialistas"
							line2="Las mejores especialidades"
							button="Especialidades"
							buttonUrl={paths.Especialidades.base}
						/>
					</div>
					<div style={{ marginBottom: "2rem" }}>
						<TextImg
							centered
							title="CLIENTE PREFERENCIAL"
							paragraph="¡Obtenga su carné de beneficios sin cuota mensual! Sea usuario preferencial de CME y acceda a Análisis Clínicos, Ecografías, Electrocardiogramas, PAP y muchos más… con honorarios de hasta 50% de descuento.

				¿Por qué esperar meses para atenderse con un especialista? En CME le agendamos en la misma semana que lo solicita."
							line1="Sin esperas"
							line2="Los mejores precios"
						/>
					</div>
				</div>
			)}
			<Footer />
		</div>
	);
}
