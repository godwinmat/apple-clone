import React from "react";
import "./AppleGrid.css";
import { BiChevronRight } from "react-icons/bi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faExternalLinkSquareAlt,
	faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

const AppleGrid = () => {
	return (
		<div className="apple-grid">
			<div className="imac">
				<h2>iMac</h2>
				<h4>Say hello</h4>
				<span>
					<a href="#">Learn more</a>
					<FontAwesomeIcon className="chev" icon={faChevronRight} />
				</span>
				<span>
					<a href="#">Buy</a>
					<FontAwesomeIcon className="chev" icon={faChevronRight} />
				</span>
			</div>
			<div className="iwatch">
				<div className="iwatch-img"></div>
				<p>The future of health is on your wrist.</p>
				<span>
					<a href="#">Learn more</a>
					<FontAwesomeIcon className="chev" icon={faChevronRight} />
				</span>
				<span>
					<a href="#">Buy</a>
					<FontAwesomeIcon className="chev" icon={faChevronRight} />
				</span>
			</div>
			<div className="ipad">
				<h2>Buy a Mac or iPad for</h2>
				<h2>
					college. Get AirPods. <sup>3</sup>{" "}
				</h2>
				<span>
					<a href="#">Save with education price.</a>
					<FontAwesomeIcon className="chev" icon={faChevronRight} />
				</span>
			</div>
			<div className="ifitness">
				<div className="ifitness-img"></div>
				<p>Fitness for all, powered by Apple Watch. </p>
				<span>
					<a href="#">Learn more</a>
					<FontAwesomeIcon className="chev" icon={faChevronRight} />
				</span>
				<span>
					<a href="#">Try it free</a>
					<FontAwesomeIcon
						className="chev"
						icon={faExternalLinkSquareAlt}
					/>
				</span>
			</div>
			<div className="icard">
				<div className="icard-img"></div>
				<p>Get up to 3% Daily Cash back with every purchase. </p>
				<span>
					<a href="#">Learn more</a>
					<FontAwesomeIcon className="chev" icon={faChevronRight} />
				</span>
				<span>
					<a href="#">Try it free</a>
					<FontAwesomeIcon className="chev" icon={faChevronRight} />
				</span>
			</div>
			<div className="itv">
				<div className="itv-img"></div>
				<div className="itv-text">
					<div className="h6-text">
						<h6 id="first-h6">a docuseries featuring</h6>
						<h6>
							<span>paul mccartney</span> <span>dave grohl</span>{" "}
							<span>charli xcx</span> <span>quest love</span>
						</h6>
					</div>
					<h4>
						Watch<span>the</span>sound
					</h4>
					<h5>with mark ronson</h5>
					<a href="#">
						Stream now <FontAwesomeIcon icon={faPlayCircle} />{" "}
					</a>
				</div>
			</div>
		</div>
	);
};

export default AppleGrid;
