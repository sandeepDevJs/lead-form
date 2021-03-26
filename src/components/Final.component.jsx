import React from "react";

const Final = () => {
	const city = JSON.parse(localStorage.getItem("City"));
	const date = JSON.parse(localStorage.getItem("Date"));
	const packageType = JSON.parse(localStorage.getItem("package"));
	const nosFunc = JSON.parse(localStorage.getItem("No. Of Functions"));

	return (
		<div>
			<p>Selected City: {city.City} </p>
			<p>No. of Functions:{nosFunc["No. Of Functions"]} </p>
			<p>Selected Date: {date.date}</p>
			<p>Selected Package: {packageType.package}</p>
		</div>
	);
};

export default Final;
