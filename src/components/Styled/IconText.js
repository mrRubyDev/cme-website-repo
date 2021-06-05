import React from "react";
import { blueParagraphStyle } from "../../config/styles";

export default function IconText({ icon, text }) {
	return (
		<div
			style={{
				display: "flex",
				width: "60%",
				alignItems: "center",
			}}
		>
			{icon}
			<p style={blueParagraphStyle}>{text}</p>
		</div>
	);
}
