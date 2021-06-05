import React from "react";
import {
	blueParagraphStyleLeft,
	buttonBlue,
	darkBlue,
} from "../../config/styles";
import IconText from "../Styled/IconText";
import { TiTick } from "react-icons/ti";
import { Button } from "../Button";
import Medico from "../../images/doctor-woman.jpeg";
import paths from "../../navigation/paths";

export default function VeintiCuatroHoras() {
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				justifyContent: "center",
				marginTop: "2rem",
			}}
		>
			<div style={{ width: "60%", display: "flex" }}>
				<div style={{ width: "60%", display: "flex", flexDirection: "column" }}>
					<h4
						style={{
							color: "lightskyblue",
						}}
					>
						ENCUENTRE EL SERVICIO QUE NECESITA
					</h4>
					<h2
						style={{
							color: darkBlue,
							fontSize: 28,
							marginTop: ".5rem",
							marginBottom: "1rem",
						}}
					>
						Consulta médica con especialistas en 24 horas
					</h2>
					<p style={blueParagraphStyleLeft}>
						{" "}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste
						obcaecati magnam ipsam? Molestiae, impedit officia, at minus
						deserunt eos, nostrum quo cum molestias in accusantium quisquam
						ducimus quibusdam deleniti!
					</p>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: "2rem",
						}}
					>
						<IconText
							text="Los mejores especialistas"
							icon={<TiTick style={styles.icon} />}
						/>
						<IconText
							text="Las mejores especialidades"
							icon={<TiTick style={styles.icon} />}
						/>
						<div style={{ marginTop: "2rem" }}>
							<Button text={"Especialidades"} url={paths.Especialidades.base} />
						</div>
					</div>
				</div>
				<div style={{ width: "30%", marginLeft: "8rem" }}>
					<img
						src={Medico}
						alt="Medico"
						style={{ height: "65%", borderRadius: "15%" }}
					/>
				</div>
			</div>
		</div>
	);
}

const styles = {
	icon: {
		width: "2rem",
		height: "2rem",
		color: buttonBlue,
	},
};
