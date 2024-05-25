import React, { useState } from 'react'
import "./Faqstyle.css"
function FAQ(Params) {
	const [show, setshow] = useState(true)
	const func = () => {
		setshow(!show)
	}
  return (
		<div>
			<p onClick={func} className="Faqquestion">
				<span >{Params.question}</span>
				<span>↓</span>
			</p>
			<p hidden={show} className="Faqanswer">
				&emsp; {Params.children}
			</p>
		</div>
	);
}

export default FAQ