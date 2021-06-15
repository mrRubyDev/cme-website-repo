import React from "react";
import {
	blueParagraphStyleLeft,
	buttonBlue,
	darkBlue,
} from "../../config/styles";
import IconText from "./IconText";
import { TiTick } from "react-icons/ti";
import { Button } from "../Button";
import { useIsDesktop } from "../../hooks/useMedia";

export default function TextImg({
	textImg,
	header,
	title,
	paragraph,
	line1,
	line2,
	button,
	color,
	buttonUrl,
	img,
	centered,
	noTicks,
}) {
	const isDesktop = useIsDesktop();
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
			{textImg && img && !centered && (
				<div
					style={{
						width: isDesktop ? "60%" : "80%",
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
							{!noTicks && (
								<>
									<IconText
										text={line1}
										icon={<TiTick style={styles.icon} />}
									/>
									<IconText
										text={line2}
										icon={<TiTick style={styles.icon} />}
									/>
								</>
							)}

							{button ? (
								<div style={{ marginTop: "2rem" }}>
									<Button text={button} url={buttonUrl} />
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
			)}
			{textImg && !img && !centered && (
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
							{!noTicks && (
								<>
									<IconText
										text={line1}
										icon={<TiTick style={styles.icon} />}
									/>
									<IconText
										text={line2}
										icon={<TiTick style={styles.icon} />}
									/>
								</>
							)}

							{button ? (
								<div style={{ marginTop: "2rem" }}>
									<Button text={button} url={buttonUrl} />
								</div>
							) : null}
						</div>
					</div>

					<div style={{ width: "30%", marginLeft: "8rem" }}></div>
				</div>
			)}
			{!textImg && img && !centered && (
				<div style={{ width: "60%", display: "flex" }}>
					<div style={{ width: "35%", marginRight: "8rem" }}>
						<img
							src={img}
							alt="Image"
							style={{ height: "65%", borderRadius: "5%" }}
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
							{!noTicks && (
								<>
									<IconText
										text={line1}
										icon={<TiTick style={styles.icon} />}
									/>
									<IconText
										text={line2}
										icon={<TiTick style={styles.icon} />}
									/>
								</>
							)}
							{button ? (
								<div style={{ marginTop: "2rem" }}>
									<Button text={button} url={buttonUrl} />
								</div>
							) : null}
						</div>
					</div>
				</div>
			)}
			{!img && !textImg && !centered && (
				<div
					style={{
						width: "80%",
						display: "flex",
					}}
				>
					<div
						style={{
							width: "60%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
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
							{!noTicks && (
								<>
									<IconText
										text={line1}
										icon={<TiTick style={styles.icon} />}
									/>
									<IconText
										text={line2}
										icon={<TiTick style={styles.icon} />}
									/>
								</>
							)}
							{button ? (
								<div style={{ marginTop: "2rem" }}>
									<Button text={button} url={buttonUrl} />
								</div>
							) : null}
						</div>
					</div>
				</div>
			)}
			{centered && (
				<div
					style={{
						width: "70%",
						display: "flex",
						justifyContent: "center",
						textAlign: "center",
						height: "80vh",

						backgroundColor: color,
					}}
				>
					<div
						style={{
							width: "90%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
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
								alignItems: "center",
							}}
						>
							{!noTicks && (
								<>
									<IconText
										text={line1}
										icon={<TiTick style={styles.icon} />}
									/>
									<IconText
										text={line2}
										icon={<TiTick style={styles.icon} />}
									/>
								</>
							)}
							{button ? (
								<div style={{ marginTop: "2rem" }}>
									<Button text={button} url={buttonUrl} />
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
