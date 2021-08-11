import React from "react";
import "./AppleHero.css";
import img from "../images/iphone_12.jpg";
import { BiChevronRight } from "react-icons/bi";

const AppleHero = ({ name, description, pricing, other, classname, id }) => {
	return (
		<div className={`apple-hero ${classname}`}>
			<h2 id={id}>{name}</h2>
			<h4 id={id}>{description}</h4>
			<p>{pricing}</p>
			<p>{other}</p>
			<span>
				<a href="#">Learn more</a><BiChevronRight className="chev" />
			</span>
			<span>
				<a href="#">Buy</a><BiChevronRight className="chev" />
			</span>
		</div>
	);
};

export default AppleHero;
