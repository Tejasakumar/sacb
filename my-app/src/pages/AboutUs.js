import React from 'react'
import NavBar from '../components/Navbar'
import './aboutus.css'
function AboutUs() {
  return (
		<div>
			<NavBar init="2" />
			<div className="Aboutus-base">
				<h1>Welcome to Sri Annapoorneshwari Cement Bricks</h1>
				<div className="section">
					<p style={{ textAlign: "justify" }}>
						Established in 2017, Sri Annapoorneshwari Cement Bricks has rapidly
						grown into a trusted name in the local market, renowned for
						producing high-quality bricks. We pride ourselves on being the only
						brick manufacturing company in our town that consistently delivers
						such superior quality. Our reputation for excellence makes us the
						go-to choice for customers whenever they need reliable and durable
						bricks.
					</p>
				</div>
				<h1>Founder</h1>
				<div className="section">
					<p>
						Mr. Arunkumar N A who is the propretor of Sri Annapoorneshwari
						cement bricks, a visionary leader with excellent communication
						skills and a profound commitment to quality. Under his insightful
						guidance, Sri Annapoorneshwari Cement Bricks has built a strong
						reputation for reliability, integrity, and unmatched product
						standards.
					</p>
				</div>
				<h1>Our Manufacturing Facility</h1>
				<div className="section">
					<p>
						Our state-of-the-art production unit is situated on a sprawling
						25,000 square feet of land, providing ample space for efficient
						production and storage. We have the capacity to store approximately
						15,000 bricks and 150 cement rings at any given time, ensuring we
						can meet large orders promptly and efficiently.
					</p>
				</div>
				<h1>Product Range</h1>
				<div className="section">
					We specialize in manufacturing a variety of brick sizes, including:
					<ul>
						<li>4-inch bricks</li>
						<li>6-inch bricks</li>
						<li>8-inch bricks</li>
						<li>Cement rings</li>
					</ul>
				</div>
				<h1>Quality Assurance</h1>
				<div className="section">
					<p>
						Unlike many other manufacturers, we never deliver our bricks without
						proper curing. We understand that quality is paramount in
						construction materials, and thus, we ensure that every brick is
						thoroughly cured before delivery. This meticulous process guarantees
						the strength and durability of our products.
					</p>
				</div>
				<h1>Production Philosophy</h1>
				<div className="section">
					<p>
						To maintain the highest standards of quality, we manufacture only 50
						bricks per bag. This careful approach allows us to focus on
						retaining the exceptional quality of each brick. We recognize that
						our bricks are essential components in building structures, and we
						do not take this responsibility lightly. Our commitment to quality
						ensures that every brick we produce meets the stringent standards
						required for safe and durable construction.
					</p>
					<p>
						At Sri Annapoorneshwari Cement Bricks, we believe in continuous
						improvement and innovation. Our dedication to quality,
						sustainability, and customer satisfaction sets us apart in the
						industry. Thank you for considering Sri Annapoorneshwari Cement
						Bricks for your construction needs. We look forward to serving you
						with the best bricks in the market.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutUs