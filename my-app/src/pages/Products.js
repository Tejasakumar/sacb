import { React, useState } from "react";
import "./productstyle.css";
import NavBar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import six from "./six.jpg";
import eight from "./eight.jpg";
import four from "./four.jpg";
import down from "./down.gif";
import up from "./up.gif";
import ring from "./ring.jpg"

function Products() {
	const [loadmore, setLoadmore] = useState(true);
	const [more, setMore] = useState("more");
	const [arrow, setArrow] = useState(down);
	const oppositeofload = () => {
		if (more === "more") {
			return "less";
		} else {
			return "more";
		}
	};
	const oppositearrow = () => {
		if (arrow === up) {
			return down;
		} else {
			return up;
		}
	};
	const LoadMore = () => {
		setLoadmore(!loadmore);
		setMore(oppositeofload);
		setArrow(oppositearrow);
		var target = document.getElementById("section2");
		setTimeout(() => {
			target.scrollIntoView({
				top: document.body.scrollHeight,
				behavior: "smooth",
			});
		}, 100);
	};
	return (
		<div>
			<NavBar init="3" />
			<h3 className="Mainheading">Welcome to our Products page !</h3>
			<h4 className="heading">
				At Sri Annapoorneshwari Cement Bricks, we take pride in offering a
				diverse range of high-quality bricks and cement rings to meet your
				construction needs. Our products are crafted with precision and adhere
				to the highest industry standards, ensuring durability and strength for
				every project. At the same time, we aim to make our products affordable,
				providing excellent value without compromising on quality.{" "}
			</h4>
			<div>
				<div className="products" id="section1">
					<div id="topl">
						<ProductCard>
							<h2 className="cardheading">6 inches solid bricks </h2>
							<div className="cardiv">
								<img src={six} className="cardimg" alt="six"></img>
								<div style={{ marginInline: 30 + "px" }}>
									<h6>&emsp;Dimensions</h6>
									<p>&emsp;&emsp;Length = 18 inches</p>
									<p>&emsp;&emsp;Width = 6 inches</p>
									<p>&emsp;&emsp;Height = 8 inches</p>
									<br />
									<h6>&emsp;Weight 24 to 27 Kg</h6>
									<h6>&emsp;Price per brick 42 Rupees</h6>
									<h6>&emsp;Max number of bricks per trip = 250</h6>
								</div>
							</div>
						</ProductCard>
					</div>
					<div id="topr">
						<ProductCard>
							<h2 className="cardheading">4 inches solid bricks </h2>
							<div className="cardiv">
								<img src={four} className="cardimg" alt="four"></img>
								<div style={{ marginInline: 30 + "px" }}>
									<h6>&emsp;Dimensions</h6>
									<p>&emsp;&emsp;Length = 18 inches</p>
									<p>&emsp;&emsp;Width = 4 inches</p>
									<p>&emsp;&emsp;Height = 8 inches</p>
									<br />
									<h6>&emsp;Weight 17 to 20 Kg</h6>
									<h6>&emsp;Price per brick 32 Rupees</h6>
									<h6>&emsp;Max number of bricks per trip = 300</h6>
								</div>
							</div>
						</ProductCard>
					</div>
				</div>

				<div className="products" hidden={loadmore} id="section2">
					<div id="topl">
						<ProductCard>
							<h2 className="cardheading">8 inches solid bricks </h2>
							<div className="cardiv">
								<img src={eight} className="cardimg" alt="eight"></img>
								<div style={{ marginInline: 30 + "px" }}>
									<h6>&emsp;Dimensions</h6>
									<p>&emsp;&emsp;Length = 18 inches</p>
									<p>&emsp;&emsp;Width = 8 inches</p>
									<p>&emsp;&emsp;Height = 8 inches</p>
									<br />
									<h6>&emsp;Weight 38 to 42 Kg</h6>
									<h6>&emsp;Price per brick 65 Rupees</h6>
									<h6>&emsp;Max number of bricks per trip = 150</h6>
								</div>
							</div>
						</ProductCard>
					</div>
					<div id="topr">
						<ProductCard>
							<h2 className="cardheading">Rings and Plates </h2>
							<div className="cardiv">
								<img src={ring} className="cardimg" alt="ring"></img>
								<div style={{ marginInline: 30 + "px" }}>
									<h6>&emsp;Dimensions</h6>
									<p>&emsp;&emsp;Thickness = 1 inches</p>
									<p>&emsp;&emsp;Diameter = 42 inches</p>
									<p>&emsp;&emsp;Height = 15 inches</p>
									<br />
									<h6>&emsp;Weight ~50 Kg</h6>
									<h6>&emsp;Price per ring 450 Rupees</h6>
								</div>
							</div>
						</ProductCard>
					</div>
				</div>
				<div onClick={LoadMore} id="ending">
					<div className="tnc" hidden={loadmore}>
						<h6>
							<b>
							&emsp;*Note
						</b></h6>
						<p>
							<b>
								&emsp; We are not manufacturing 8 inch bricks unless there are
								orders, and payment for 8 inch bricks should be done in advance
								before manufacturing.
							</b>
						</p>
						<p>
							<b>
								&emsp; Rings and Plates for septic tank won't be available
								through out the year, as a result of this the prize may
								fluctuate than what is tagged.
							</b>
						</p>
					</div>

					<h3 className="Loadmore">
						Load {more}
						<img src={arrow} className="down" alt="down" />
					</h3>
				</div>
			</div>
		</div>
	);
}

export default Products;
