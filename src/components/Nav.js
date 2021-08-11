import React from "react";
import "./Nav.css";
import { DiApple } from "react-icons/di";
import { BiSearch } from "react-icons/bi";
import { BsBag } from "react-icons/bs";

const Nav = () => {
	return (
		<div className="nav">
			<nav>
				<ul className="nav-items">
					<li>
						<a href="#">
							<DiApple className="icon nav-icon" />
						</a>
					</li>
					<li>
						<a href="#">Store</a>
					</li>
					<li>
						<a href="#">Mac</a>
					</li>
					<li>
						<a href="#">iPad</a>
					</li>
					<li>
						<a href="#">iPhone</a>
					</li>
					<li>
						<a href="#">Watch</a>
					</li>
					<li>
						<a href="#">TV</a>
					</li>
					<li>
						<a href="#">Music</a>
					</li>
					<li>
						<a href="#">Support</a>
					</li>
					<li>
						<a href="#">
							<BiSearch className="icon nav-icon" />
						</a>
					</li>
					<li>
						<a href="#">
							<BsBag className="icon nav-icon" />
						</a>
					</li>
				</ul>
			</nav>
			<div className="sub-nav">
				<p>
					We look forward to welcoming you to our stores. Whether you{" "}
					<a href="">shop in a store</a> or <a href="">shop online</a>{" "}
					, our Specialists can help you buy the products you love.
				</p>
			</div>
		</div>
	);
};

export default Nav;
