import React, { Fragment } from "react";

function Button(Params) {
	const mybgcolour = Params.inverted ? "#799351" : "#F6EEC9";
	const mytextcolour = Params.inverted ? "#F6EEC9" : "#000";
	return (
		<button
			type="button"
			className="btn btn-lg"
			//data-bs-toggle="button"
			style={{
				borderRadius: 0 + "px",
				marginLeft: 20 + "px",
				marginRight: 20 + "px",
				backgroundColor: mybgcolour,
				color: mytextcolour,
				border: 0 + "px",
			}}
			onClick={() => {
				Params.onClick(Number(Params.keys));
			}}
		>
			{Params.children}
		</button>
	);
}

export default Button;
