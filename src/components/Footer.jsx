import React from "react";
import Logo from "../logo-no-bck.png";
import paths from "../navigation/paths";
import { Link } from "react-router-dom";
import { useIsMobile, useIsTablet } from "../hooks/useMedia";

export default function Footer() {
	const isMobile = useIsMobile();
	const isTablet = useIsTablet();
	return (
		<div
			style={{
				height: isMobile ? "25vh" : "20vh",
				width: "100vw",
				borderTop: "1px solid lightgrey",
				display: "flex",
				fontSize: isMobile ? 15 : null,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: isMobile ? "space-evenly" : "space-between",
					alignItems: "flex-start",
					height: "80%",
					marginTop: "2%",
					width: "100vw",
					marginLeftl: isMobile ? 5 : null,
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						margin: !isMobile ? "0px 50px 0px" : null,
						width: isMobile ? "20%" : null,
					}}
				>
					<h4 style={{ marginBottom: "1rem" }}>Frecuentes</h4>
					<Link className="nav-links-footer" to={paths.AboutUs}>
						Nosotros
					</Link>
					<Link className="nav-links-footer" to={paths.AboutUs}>
						Blog
					</Link>
					<Link className="nav-links-footer" to={paths.Empresas}>
						Empresas
					</Link>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						margin: !isMobile ? "0px 50px 0px" : null,
						width: isMobile ? "20%" : null,
					}}
				>
					<h4 style={{ marginBottom: "1rem" }}>Social</h4>
					<Link
						className="nav-links-footer"
						to={{
							pathname: "https://www.instagram.com/cmeuy/",
						}}
						target="_blank"
					>
						Instagram
					</Link>
					<Link
						className="nav-links-footer"
						to={{
							pathname: "https://www.facebook.com/cmeuruguay",
						}}
						target="_blank"
					>
						Facebook
					</Link>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						margin: !isMobile ? "0px 50px 0px" : null,
						width: isMobile ? "33%" : null,
					}}
				>
					<h4 style={{ marginBottom: "1rem" }}>Legal</h4>
					<Link
						className="nav-links-footer"
						to={{
							pathname: "https://www.facebook.com/cmeuruguay",
						}}
					>
						Condiciones del Servicio
					</Link>
					<Link
						className="nav-links-footer"
						to={{
							pathname: "https://www.facebook.com/cmeuruguay",
						}}
					>
						Política de Privacidad
					</Link>
					<Link
						className="nav-links-footer"
						to={{
							pathname: "https://www.facebook.com/cmeuruguay",
						}}
					>
						Condiciones de Uso
					</Link>
				</div>
				{!isMobile && !isTablet && (
					<div style={{ height: "80%", width: "10%", marginLeft: "2rem" }}>
						<img
							src={Logo}
							alt="CME"
							style={{ height: "100%", width: "100%" }}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
