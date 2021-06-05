import React from "react";
import "./PasosLanding.css";
import paths from "../../navigation/paths";
import Card from "../Styled/Card";
import { BsSearch } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiTwotoneBulb } from "react-icons/ai";
import { darkBlue } from "../../config/styles";

const styles = {
	icon: {
		width: "100%",
		height: "100%",
		color: "lightskyblue",
	},
};

const PASOS = [
	{
		title: "Consulte",
		img: <BsSearch style={styles.icon} />,
		description:
			"Ofrecemos una gran variedad de especialidades médicas y servicios, para poder cubrir todas sus necesidades de salud.",
	},
	{
		title: "Reserve",
		img: <FaRegCalendarAlt style={styles.icon} />,
		description:
			"Reserve una cita con uno de nuestros especialistas facilmente por internet y acuda directamente el día de su consulta.",
	},
	{
		title: "Solucione",
		img: <AiTwotoneBulb style={styles.icon} />,
		description:
			"Tanto si necesita un chequeo médico como si quiere consultar con su especialista, nosotros le daremos todas las facilidades.",
	},
];

export default function ServiciosLanding() {
	return (
		<div className="reservar-container">
			<h2 style={{ fontSize: 30, color: "#34313D" }}>
				3 sencillos pasos para solucionar sus necesidades
			</h2>
			<div className="principales-container">
				{PASOS.map((el, i) => (
					<div style={{ margin: "4rem 6rem" }}>
						<Card
							title={el.title}
							description={el.description}
							image={el.img}
							key={i}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
