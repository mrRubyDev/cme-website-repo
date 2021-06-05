import React from "react";
import {
	blueParagraphStyleLeft,
	buttonBlue,
	darkBlue,
} from "../../config/styles";
import IconText from "../Styled/IconText";
import { TiTick } from "react-icons/ti";
import { Button } from "../Button";
import paths from "../../navigation/paths";

export default function VeintiCuatroHoras({
	textImg,
	header,
	title,
	paragraph,
	line1,
	line2,
	button,
	img,
}) {
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				justifyContent: "center",
				marginTop: "2rem",
				height: "100%",
			}}
		>
			{textImg ? (
				<div
					style={{
						width: "60%",
						display: "flex",
					}}
				>
					<div
						style={{ width: "60%", display: "flex", flexDirection: "column" }}
					>
						<h4
							style={{
								color: "lightskyblue",
							}}
						>
							{header}
						</h4>
						<h2
							style={{
								color: darkBlue,
								fontSize: 28,
								marginTop: ".5rem",
								marginBottom: "1rem",
							}}
						>
							{title}
						</h2>
						<p style={blueParagraphStyleLeft}> {paragraph}</p>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								marginTop: "2rem",
							}}
						>
							<IconText text={line1} icon={<TiTick style={styles.icon} />} />
							<IconText text={line2} icon={<TiTick style={styles.icon} />} />
							{button ? (
								<div style={{ marginTop: "2rem" }}>
									<Button text={button} url={paths.Especialidades.base} />
								</div>
							) : null}
						</div>
					</div>
					<div style={{ width: "30%", marginLeft: "8rem" }}>
						<img
							src={img}
							alt="Image"
							style={{ height: "65%", borderRadius: "15%" }}
						/>
					</div>
				</div>
			) : (
				<div style={{ width: "60%", display: "flex" }}>
					<div style={{ width: "30%", marginLeft: "8rem" }}>
						<img
							src={img}
							alt="Image"
							style={{ height: "65%", borderRadius: "15%" }}
						/>
					</div>
					<div
						style={{ width: "60%", display: "flex", flexDirection: "column" }}
					>
						<h4
							style={{
								color: "lightskyblue",
							}}
						>
							{header}
						</h4>
						<h2
							style={{
								color: darkBlue,
								fontSize: 28,
								marginTop: ".5rem",
								marginBottom: "1rem",
							}}
						>
							{title}
						</h2>
						<p style={blueParagraphStyleLeft}> {paragraph}</p>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								marginTop: "2rem",
							}}
						>
							<IconText text={line1} icon={<TiTick style={styles.icon} />} />
							<IconText text={line2} icon={<TiTick style={styles.icon} />} />
							{button ? (
								<div style={{ marginTop: "2rem" }}>
									<Button text={button} url={paths.Especialidades.base} />
								</div>
							) : null}
						</div>
					</div>
				</div>
			)}
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
