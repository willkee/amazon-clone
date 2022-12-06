import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Component from "./components";
import { getProducts } from "./store/products";

// import { useQuery } from "react-query";
// import { GraphQLClient } from "graphql-request";
// import { GET_USERS } from "./graphql/user";

import { getUsers } from "./store/graphql";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts()).then(() => setIsLoaded(true));
		dispatch(getUsers());
	}, [dispatch]);

	const products = useSelector((state) => Object.values(state.products));
	const currentUser = useSelector((state) => state.session.user);

	// GRAPHQL

	// const graphQLClient = new GraphQLClient("/graphql", {
	// 	headers: {
	// 		"XSRF-TOKEN": "",
	// 	},
	// });

	//

	return (
		<div className="App">
			{isLoaded && (
				<>
					<Component.Nav currentUser={currentUser} />
					<header className="App-header">
						PROJECT IN DEVELOPMENT
					</header>
					<Component.AllProducts products={products} />
				</>
			)}
		</div>
	);
}

export default App;
