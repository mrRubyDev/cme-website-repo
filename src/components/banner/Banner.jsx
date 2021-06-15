import React from "react";
import { Link } from "react-router-dom";
import CovidBanner from "../../images/covid-banner.png";
import paths from "../../navigation/paths";
export default function Banner({ navigation }) {
	return (
		<Link to={paths.Servicios.Covid}>
			<img src={CovidBanner} style={{ height: "100%", width: "100%" }} />
		</Link>
	);
}
