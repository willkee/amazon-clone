import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./store/users";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<div className="App">
			<header className="App-header">Testing</header>
			<div>dsfsdfsdf</div>
		</div>
	);
}

export default App;
