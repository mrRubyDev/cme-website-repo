import React from "react";
import TextImg from "./Styled/TextImg";
import Brick from "./Styled/Brick";
import Footer from "./Footer";

export default function General({
	secondColor,
	header,
	header2,
	title,
	title2,
	paragraph,
	paragraph2,
}) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
				marginTop: "1rem",
				width: "100vw",
			}}
		>
			<Brick
				color={""}
				children={
					<TextImg
						header={header}
						title={title}
						paragraph={paragraph}
						noTicks
						textImg
					/>
				}
			/>
			<Brick
				color={secondColor}
				children={
					<TextImg
						paragraph={paragraph2}
						header={header2}
						title={title2}
						noTicks
						centered
					/>
				}
			/>
			<Footer />
		</div>
	);
}
