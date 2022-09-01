import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Nav from "./components/Navigation";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {}, [dispatch]);

	return (
		<div className="App">
			<Nav />
			<header className="App-header">Testing</header>
			<div>dsfsdfsdf</div>
		</div>
	);
}

export default App;
