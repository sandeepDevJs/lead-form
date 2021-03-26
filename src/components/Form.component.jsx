import { FormGroup } from "@material-ui/core";
import React, { useState, useRef, useEffect } from "react";
import { FormControl, FormLabel } from "react-bootstrap";
import DatePicker from "./DateView.component";
import Options from "./Options.component";

const FormComponent = ({
	handleNext,
	handleBadgeClick,
	populars,
	label,
	isDate,
	hideInput,
	initialVals = "",
}) => {
	const [userText, setuserText] = useState(initialVals);
	const ref = useRef("");

	const filteredData = populars.filter((data) =>
		data.toLowerCase().includes(userText.toLowerCase())
	);

	useEffect(() => {
		if (ref.current) {
			ref.current.focus();
		}
		setuserText("");
	}, [populars]);

	const onBadgeClick = (label) => {
		return function (value) {
			handleBadgeClick(label, value);
		};
	};

	return (
		<div>
			{!isDate ? (
				<div>
					<FormGroup>
						<FormLabel>{label}</FormLabel>
						{!hideInput && (
							<FormControl
								ref={ref}
								value={userText}
								onChange={(e) => setuserText(e.target.value)}
							/>
						)}
					</FormGroup>
					<Options
						options={filteredData}
						handleBadgeClick={onBadgeClick(label)}
					/>
				</div>
			) : (
				<DatePicker label={label} handleNext={handleNext} />
			)}
		</div>
	);
};

export default FormComponent;
