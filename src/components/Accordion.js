import React, { useState } from "react";
import "./Accordion.css";
import { PlusIcon } from "./Icon";

const Accordion = ({ title, list }) => {
	const [active, setActive] = useState(false);

	return (
		<div className={`accordion ${active ? "active" : ""}`}>
			<div
				className="accordion-title"
				onClick={() => {
					setActive(!active);
				}}
			>
				{title} <PlusIcon active={active} />{" "}
			</div>
			<ul className="accordion-list">
				{list.map((item) => (
					<li>
						<a href="#">{item}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Accordion;
