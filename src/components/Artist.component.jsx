import React from "react";
import Options from "./Options.component";

const Artist = ({ handleBadgeClick }) => {
	const city = JSON.parse(localStorage.getItem("City"));

	const regulars = ["10k-12k", "13-14k", "14-15k"];
	const standars = ["15k-18k", "18-20k ", "20k-22k"];
	const premiums = ["23k-25k", "25k-30k", "30k-35k"];

	const onBadgeClick = (label) => {
		return function (value) {
			handleBadgeClick(label, value);
		};
	};

	return (
		<div>
			<p>Regular Artist In {`${city.City}`}</p>
			<Options options={regulars} handleBadgeClick={onBadgeClick("package")} />

			<p>Standard Artist In {`${city.City}`}</p>
			<Options options={standars} handleBadgeClick={onBadgeClick("package")} />

			<p>Premium Artist In {`${city.City}`}</p>
			<Options options={premiums} handleBadgeClick={onBadgeClick("package")} />
		</div>
	);
};

export default Artist;
