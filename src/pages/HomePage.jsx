import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormComponent from "../components/Form.component";
import { Card } from "react-bootstrap";
import Artist from "../components/Artist.component";
import Final from "../components/Final.component";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	backButton: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

const popularCities = [
	"Jodhpur",
	"Kolkata",
	"Lucknow",
	"Mumbai",
	"Nagpur",
	"Nashik",
	"Pune",
	"Raipur",
];

const functions = ["1", "2", "3 Or more"];

function getSteps() {
	return [
		"Select City",
		"Select Number Of Function",
		"Select Date",
		"Select Package",
	];
}

function getStepContent(stepIndex, handleClick, handleBadgeClick) {
	switch (stepIndex) {
		case 0:
			return (
				<FormComponent
					handleNext={handleClick}
					label={"City"}
					populars={popularCities}
					handleBadgeClick={handleBadgeClick}
				/>
			);
		case 1:
			return (
				<FormComponent
					handleNext={handleClick}
					label={"No. Of Functions"}
					populars={functions}
					handleBadgeClick={handleBadgeClick}
					// hideInput
					initialVals=""
				/>
			);
		case 2:
			return (
				<FormComponent
					handleNext={handleClick}
					label={"Date Of Function"}
					populars={functions}
					isDate
				/>
			);

		case 3:
			return <Artist handleBadgeClick={handleBadgeClick} />;

		default:
			return "Unknown stepIndex";
	}
}

export default function HorizontalLabelPositionBelowStepper() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const handleBadgeClick = (label, value) => {
		localStorage.setItem(`${label}`, JSON.stringify({ [label]: value }));
		handleNext();
	};

	return (
		<Card className="shadow1" style={{ marginTop: "10%" }}>
			<Card.Body>
				<div className={classes.root}>
					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<div>
						{activeStep === steps.length ? (
							<div>
								<Typography className={classes.instructions}>
									<Final />
								</Typography>
								<Button onClick={handleReset}>Reset</Button>
							</div>
						) : (
							<div>
								{getStepContent(activeStep, handleNext, handleBadgeClick)}
								<div>
									<Button
										disabled={activeStep === 0}
										onClick={handleBack}
										className={classes.backButton}
									>
										Back
									</Button>
									{/* <Button
										variant="contained"
										color="primary"
										onClick={handleNext}
									>
										{activeStep === steps.length - 1 ? "Finish" : "Next"}
									</Button> */}
								</div>
							</div>
						)}
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
