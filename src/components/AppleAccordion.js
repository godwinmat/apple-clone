import React from "react";
import Accordion from "./Accordion";
import "./AppleAccordion.css";
import {
	Account,
	Services,
	forEducation,
	forGovernment,
	forHealthcare,
	shopAndLearn,
	aboutApple,
	appleStore,
	appleValues,
	forBusiness,
} from "../Lists";

const AppleAccordion = () => {
	return (
		<div className="apple-accordion">
			<Accordion title="Shop and Learn" list={shopAndLearn} />
			<Accordion title="Services" list={Services} />
			<Accordion title="Account" list={Account} />
			<Accordion title="Apple Store" list={appleStore} />
			<Accordion title="For Business" list={forBusiness} />
			<Accordion title="For Education" list={forEducation} />
			<Accordion title="For Healthcare" list={forHealthcare} />
			<Accordion title="For Government" list={forGovernment} />
			<Accordion title="Apple Values" list={appleValues} />
			<Accordion title="About Apple" list={aboutApple} />
		</div>
	);
};

export default AppleAccordion;
