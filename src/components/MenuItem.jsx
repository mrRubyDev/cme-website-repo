import React, { useState } from "react";
import "./MenuItem.css";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

export default function MenuItem({ el, activeTab, handleClick }) {
	const [displayDrop, setDisplayDrop] = useState("");
	const handleDrop = name => {
		if (!el.insideElements.length) handleClick(name);
		if (displayDrop === name) {
			setDisplayDrop("");
		} else {
			setDisplayDrop("");
			setDisplayDrop(name);
		}
	};
	return (
		<div onMouseLeave={() => setDisplayDrop("")}>
			<li className="nav-item">
				{!el.insideElements.length ? (
					<Link
						to={el.path}
						className="nav-links"
						onClick={() => handleDrop(el.name)}
					>
						<p className={activeTab === el.name ? "menu-text-active" : null}>
							{el.name}
						</p>
					</Link>
				) : (
					<div className="menu-text" onClick={() => handleDrop(el.name)}>
						<p className={activeTab === el.name ? "menu-text-active" : null}>
							{el.name}
						</p>
						<p>
							{" "}
							<BiChevronDown
								style={activeTab === el.name ? styles.iconActive : styles.icon}
							/>{" "}
						</p>
					</div>
				)}
			</li>
			{el.insideElements.length ? (
				<div
					style={
						displayDrop === el.name
							? styles.dropdownContainerActive
							: styles.dropdownContainer
					}
				>
					{el.insideElements.map((elm, index) => (
						<Link
							to={elm.path}
							key={index}
							className="dropdown-element"
							onClick={() => handleClick(el.name)}
						>
							{elm.name}
						</Link>
					))}
				</div>
			) : null}
		</div>
	);
}

const styles = {
	dropdownContainer: {
		display: "none",
	},
	dropdownContainerActive: {
		display: "flex",
		flexDirection: "column",
		position: "absolute",
		width: "12vw",
		backgroundColor: "white",
		border: "1px solid lightgrey",
		boxShadow: "1px 1px 1px lightgrey",
		borderRadius: "2px",
	},

	icon: { marginTop: 8, marginLeft: 4 },
	iconActive: { color: "#1888ff", marginTop: 8, marginLeft: 4 },
};
