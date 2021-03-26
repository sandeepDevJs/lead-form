import React from "react";
import { Badge } from "react-bootstrap";

const Options = ({ options, handleBadgeClick }) => {
	return (
		<div>
			{options.map((data) => (
				<Badge
					key={data}
					variant="secondary"
					style={{
						margin: "7px",
						padding: "12px",
						fontSize: "17px",
						borderRadius: "35%",
						cursor: "pointer",
						backgroundColor: "transparent",
						color: "violet",
						border: "1px solid violet",
					}}
					onClick={() => handleBadgeClick(data)}
				>
					{data}
				</Badge>
			))}
		</div>
	);
};

export default Options;
