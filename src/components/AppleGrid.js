import React from "react";
import "./AppleGrid.css";
import { BiChevronRight } from "react-icons/bi";

const AppleGrid = () => {
	return (
		<div className="apple-grid">
			<div className="imac">
				<h2>iMac</h2>
				<h4>Say hello</h4>
				<span>
					<a href="#">Learn more</a>
					<BiChevronRight className="chev" />
				</span>
				<span>
					<a href="#">Buy</a>
					<BiChevronRight className="chev" />
				</span>
			</div>
			<div className="iwatch">
				<div className="iwatch-img"></div>
				<p>The future of health is on your wrist.</p>
				<span>
					<a href="#">Learn more</a>
					<BiChevronRight className="chev" />
				</span>
				<span>
					<a href="#">Buy</a>
					<BiChevronRight className="chev" />
				</span>
			</div>
			<div className="ipad">
				<h2>Buy a Mac or iPad for</h2>
				<h2>
					college. Get AirPods. <sup>3</sup>{" "}
				</h2>
				<span>
					<a href="#">Save with education price.</a>
					<BiChevronRight className="chev" />
				</span>
			</div>
			<div className="ifitness">
				<div className="ifitness-img"></div>
				<p>Fitness for all, powered by Apple Watch. </p>
				<span>
					<a href="#">Learn more</a>
					<BiChevronRight className="chev" />
				</span>
				<span>
					<a href="#">Try it free</a>
					<BiChevronRight className="chev" />
				</span>
			</div>
			<div className="icard">
				<div className="icard-img"></div>
				<p>Get up to 3% Daily Cash back with every purchase. </p>
				<span>
					<a href="#">Learn more</a>
					<BiChevronRight className="chev" />
				</span>
				<span>
					<a href="#">Try it free</a>
					<BiChevronRight className="chev" />
				</span>
			</div>
			<div className="itv"></div>
		</div>
	);
};

export default AppleGrid;
