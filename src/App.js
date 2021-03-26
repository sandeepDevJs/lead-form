import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<div>
			<Container
				className="d-flex align-items justify-content-center"
				style={{ minHeight: "100vh" }}
			>
				<div className="w-100">
					<HomePage />
				</div>
			</Container>
		</div>
	);
}

export default App;
