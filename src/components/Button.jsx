import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button({ text, url, navbar }) {
	return (
		<Link to={url}>
			<button className={navbar ? "btn-mobile" : "btn"}>{text}</button>
		</Link>
	);
}
