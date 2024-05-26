import React from 'react'
import NavBar from '../components/Navbar'
import "./homepage.css"
function Home() {
  return (
		<div>
			<NavBar init="1" />
			<div className="homeHeading">
				<h1>Welcome to SRI ANNAPOORNESHWARI CEMENT BRICS</h1>
				<h4> Your Trusted Partner in Quality Brick Manufacturing</h4>
			</div>
			<div className="homeHeading">
				<h2>About Us</h2>
				<h5>
					At SRI ANNAPOORNESHWARI CEMENT BRICKS, we pride ourselves on being a
					leading provider of high-quality bricks for all your construction
					needs. With over 7 years of experience, we have been dedicated to
					producing durable and sustainable bricks that stand the test of time.
					<br />
					<br />
					We ensure that every brick we produce meets the highest standards of
					quality and strength. We are committed to sustainability and
					environmental responsibility, using eco-friendly practices in our
					production process.
				</h5>
			</div>
			<div className="homeHeading">
				<h2>Our Products</h2>
				<h5>Explore Our Range of Products</h5>
				<ul>
					<li>
						<h6>4 inch bricks</h6>
					</li>
					<li>
						<h6>6 inch brick</h6>
					</li>
					<li>
						<h6>8 inch bricks </h6>
					</li>
					<li>
						<h6>cement rings  </h6>
					</li>
				</ul>
			</div>
			<div className="homeHeading">
				<h2>Why Choose Us Why Choose SRI ANNAPOORNESHWARI CEMENT BRICKS</h2>
				<ul>
					<li>
						<h6>
							High-Quality Bricks: Our bricks are known for their durability and
							strength.
						</h6>
					</li>
					<li>
						<h6>
							Eco-Friendly Production: We prioritize sustainability in our
							manufacturing processes. requirements.
						</h6>
					</li>
					<li>
						<h6>
							Customer Satisfaction: We are dedicated to meeting the needs of
							our clients.
						</h6>
					</li>
				</ul>
			</div>
			<div className="homeHeading">
				<h3>
					Call to Action Get in Touch with Us
					<br />
					<br />
					Contact us today to learn more about our products and services, or to
					request a quote for your next project. We look forward to working with
					you!
				</h3>
			</div>
		</div>
	);
}

export default Home