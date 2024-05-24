import React, { Fragment, useState } from "react";
import logo from ".././logo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

function NavBar(Params) {
	const [index, setIndex] = useState(Number(Params.init));
	var i = 1;
	const Selected = (ind) => {
		console.log(ind);
		setIndex(ind);
	};
	return (
		<div style={{ backgroundColor: "#F6EEC9" }}>
			<nav className="navbar" style={{ padding: 0 + "px" }}>
				<div className="container-fluid">
					<div>
						<Link to="/">
							<Button keys={i++} onClick={Selected} inverted={index === 1}>
								Home
							</Button>
						</Link>
						<Link to="/about">
							<Button keys={i++} onClick={Selected} inverted={index === 2}>
								About Us
							</Button>
						</Link>
						<Link to="/products">
							<Button keys={i++} onClick={Selected} inverted={index === 3}>
								Products
							</Button>
						</Link>
						<Link to="/faq">
							<Button keys={i++} onClick={Selected} inverted={index === 4}>
								FAQ
							</Button>
						</Link>
					</div>
					<Link to="/contact-us">
						<Button keys={i++} onClick={Selected} inverted={index === 5}>
							Contact Us
						</Button>
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
