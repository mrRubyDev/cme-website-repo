import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button({ text, url }) {
	return (
		<Link to={url}>
			<button className="btn">{text}</button>
		</Link>
	);
}
