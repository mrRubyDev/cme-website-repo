import React from "react";
import { headerStyleCenter, blueParagraphStyle } from "../../config/styles";

export default function Card({ title, description, image }) {
	return (
		<div
			style={{
				width: "13rem",
				height: "15rem",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div style={{ height: "30%", width: "100%" }}>{image}</div>
			<div style={{ display: "flex", flexDirection: "column", height: "70%" }}>
				<h4 style={headerStyleCenter}>{title}</h4>
				<p style={blueParagraphStyle}>{description}</p>
			</div>
		</div>
	);
}
