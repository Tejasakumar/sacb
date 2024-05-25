import React from "react";

function ProductCard(Params) {
	return (
		<div>
			<div
				className="card"
				style={{
					backgroundColor: "white",
					height: 400 + "px",
					width: 600 + "px",
					margin: 30 + "px",
					borderRadius:30+"px"
				}}
			>
				<div className="card-body">{Params.children}</div>
			</div>
		</div>
	);
}

export default ProductCard;
