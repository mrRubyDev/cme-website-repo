import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import CovidBanner from "../../images/covid-banner.png";
import paths from "../../navigation/paths";
export default function Banner({ navigation }) {
	return (
		<Link to={paths.Servicios.Covid}>
			<Image src={CovidBanner} style={{ height: "100%", width: "100%" }} />
		</Link>
	);
}
