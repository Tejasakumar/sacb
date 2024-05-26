import React, { useState } from 'react'
import BgCard from './BgCard';
import axios from "axios";
function TextArea() {
	const [mail, setMail] = useState(false)
	const [textarea, setTextarea] = useState(false)
	const mailchange = (e) => {
		if (e.target.value.trim() !== ""){
			setMail(true)
		}
		else {
			setMail(false)
		}
	}
	const textcheck = (e) => {
		if (e.target.value.trim() !== "") {
			setTextarea(true);
		} else {
			setTextarea(false);
		}
	}
	const handleSubmit = () => {
		var val1 = document.getElementById("exampleFormControlInput1").value;
		var val2 = document.getElementById("exampleFormControlTextarea1").value;
		axios.get("https://echo.free.beeceptor.com/?" + val1 + "=" + val2).then((response) => { console.log(response.data) }).catch((error) => { console.log(error) })
		
		document.getElementById("exampleFormControlInput1").value = "";
		setMail(false);
		document.getElementById("exampleFormControlTextarea1").value = "";
		setTextarea(false);

	}
  return (
		<div >
			<BgCard>
				<div style={{ width: 400 + "px" }}>
					<div className="mb-3" style={{ margin: 30 + "px" }}>
						<label for="exampleFormControlInput1" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control"
						  id="exampleFormControlInput1"
						  placeholder="name@example.com"
						  onChange={mailchange}
						/>
					</div>
					<div className="mb-3" style={{ margin: 30 + "px" }}>
						<label for="exampleFormControlTextarea1" className="form-label">
							Message
						</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							style={{ height: 180 + "px", resize: "none" }}
						  placeholder="Type your message here ....."
						  onChange={textcheck}
						></textarea>
					</div>
				</div>
				<button
					type="button"
					class="btn btn-primary btn-lg"
					disabled={!(mail&&textarea)}
				  style={{ marginLeft: 30 + "px" }}
				  onClick={handleSubmit}
				>
					Submit
				</button>
			</BgCard>
		</div>
	);
}

export default TextArea