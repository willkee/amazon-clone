import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Component from "./components";
import { getProducts } from "./store/products";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts()).then(() => setIsLoaded(true));
	}, [dispatch]);

	const products = useSelector((state) => Object.values(state.products));

	return (
		<div className="App">
			{isLoaded && (
				<>
					<Component.Nav />
					<header className="App-header">Testing</header>
					<Component.AllProducts products={products} />
				</>
			)}
		</div>
	);
}

export default App;
