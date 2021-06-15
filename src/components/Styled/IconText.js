import React from "react";
import { darkBlue } from "../../config/styles";

export default function IconText({ icon, text }) {
	return (
		<div
			style={{
				display: "flex",
				width: "70%",
				alignItems: "center",
				marginBottom: ".5rem",
			}}
		>
			{icon}
			<p
				style={{
					width: "100%",
					color: darkBlue,
					fontSize: 16,
					textAlign: "center",
				}}
			>
				{text}
			</p>
		</div>
	);
}
