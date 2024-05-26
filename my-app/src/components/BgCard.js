import React from 'react'

function BgCard(Params) {
  return (
		<div>
			<div
				className="card"
				style={{ backgroundColor: "#A1DD70", height: 450+"px" }}
			>
				<div className="card-body">
					{Params.children}
				</div>
			</div>
		</div>
	);
}

export default BgCard