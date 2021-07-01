import React from "react";
import TextImg from "./Styled/TextImg";
import Brick from "./Styled/Brick";
import Footer from "./Footer";
import { useIsDesktop } from "../hooks/useMedia";
import { blueParagraphStyle, headerStyleCenter } from "../config/styles";

export default function General({
	secondColor,
	header,
	header2,
	title,
	image,
	title2,
	paragraph,
	paragraph2,
}) {
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
					title={title}
					header={header}
					textImg
					img={isDesktop ? image : null}
					centered={isDesktop ? false : true}
					noTicks
					paragraph={paragraph}
				/>
			</div>
			<div style={{ height: "80rem" }}>
				<Brick
					color={secondColor}
					children={
						<div
							style={{
								width: isDesktop ? "50%" : "90%",
								padding: "1.5rem",
								marginBottom: "1rem",
							}}
						>
							<h2 style={headerStyleCenter}>{title2}</h2>
							<p style={blueParagraphStyle}>{header2}</p>
							<br />
							<br />
							<p style={blueParagraphStyle}>{paragraph2}</p>
						</div>
					}
				/>
			</div>
			<Footer />
		</div>
	);
}
