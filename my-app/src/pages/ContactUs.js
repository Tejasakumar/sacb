import React from "react";
import NavBar from "../components/Navbar";
import TextArea from "../components/TextArea";
import Map from "../components/Map";
import "./contactstyle.css";

function ContactUs() {
	return (
		<div>
			<NavBar init="5" />
			<div >
				<h1 className="myheading">Reach us out</h1>
				<div className="sec">
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<Map />
						<TextArea />
					</div>
					<p style={{ textAlign: "center" }}>
						{" "}
						&#x260E; Mobile +91 94480 01577{" "}
					</p>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
