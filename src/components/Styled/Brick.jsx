import React from "react";

export default function Brick({ color, children }) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "50vh",
				width: "100%",
				backgroundColor: color,
			}}
		>
			<div
				style={{
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "1rem",
					marginBottom: "1rem",
				}}
			>
				{children}
			</div>
		</div>
	);
}
