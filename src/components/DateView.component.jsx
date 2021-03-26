import React, { useState } from "react";
import { FormGroup, FormLabel } from "react-bootstrap";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ label, handleNext }) => {
	const [value, setvalue] = useState("");

	const onChangeHandler = (date) => {
		localStorage.setItem("Date", JSON.stringify({ date }));
		setvalue(date);
		handleNext();
	};

	return (
		<FormGroup>
			<FormLabel>{label}</FormLabel>
			<br />
			<DateView
				id={"date"}
				name={"date"}
				className="form-control"
				selected={value && new Date(value)}
				onChange={(date) => onChangeHandler(date)}
			/>
		</FormGroup>
	);
};

export default DatePicker;
