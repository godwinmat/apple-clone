import React, { useState } from "react";
import "./Icon.css";


export const PlusIcon = ({active}) => {
	return (
		<div className={`plus-icon ${active ? "active" : ""}`} >
			<div className="plus-first-stroke"></div>
			<div className="plus-second-stroke"></div>
		</div>
	);
};

export const MenuIcon = ({active}) => {
	return (
		<div className={`menu-icon ${active ? "active" : ""}`} >
			<div className="menu-first-stroke"></div>
			<div className="menu-second-stroke"></div>
		</div>
	);
};
