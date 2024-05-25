import React from 'react'
import NavBar from '../components/Navbar'
import "./faqstyle.css"
import FAQ from '../components/FAQ';

function Faq() {
	const questions = [
		"How much do you charge to deliver at my location ?",
		"How long will it take to deliver once ordered ?",
		"What are the modes in which you accept payments ?",
		"Will you deliver a bit less/more and what is mentioned ?",
		"Can we bring in our own vehicles to get the bricks ?",
		"Will I get a GST bill ?",
		"Where is your factory ?",
		"Can we choose the stack of bricks in specific for delivery ?",
		"Can we Prebook and then take the delivery ?",
	];
	const answers = [
		"It depends on delivery location and even on the brick and is proportional to the size of the brick. ",
		"The very same day or by the next day if its in stock else will have to wait till they are made and cured. ",
		"Cash , UPI , and Back transfers.",
		"It depends on how much more/less you want and on the bricks generally ±  20 to 30 can be sent in a load. ",
		"Yes and its preferred to bring loaders also along with you ",
		"Yes",
		"Please do check our Contact Us page.",
		"Yes.",
		"Yes."

	];
  return (
		<div>
			<NavBar init="4" />
			<h1 className="faqmyheading">&emsp;&emsp;FAQs</h1>
			<div className="mytable">
				<table className="table">
				  <tbody>
					  {questions.map((val, index) => (
						<tr>
							<td>
								<FAQ question={val}>{answers[index]} </FAQ>
							</td>
						</tr>
					  ))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Faq