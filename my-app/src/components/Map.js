import React from 'react'

function Map() {
  return (
		<div style={{marginLeft:100+'px', marginTop:50+"px"}}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.5401286846304!2d76.37534807306429!3d12.42121530786992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5819abb75bc27%3A0x14949cc0bba8f185!2sSriannapoorneshwari%20cement%20bricks!5e0!3m2!1sen!2sin!4v1716554141266!5m2!1sen!2sin"
				width="600"
				height="450"
				style={{ border: 5 + "px", borderColor: "black" }}
				allowfullscreen=""
				loading="eager"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
}

export default Map