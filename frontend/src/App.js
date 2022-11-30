// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import Component from "./components";

import { GET_USERS } from "./apollo/users";
import { useQuery } from "@apollo/client";
// import { getProducts } from "./store/products";

function App() {
	const { loading, error, data } = useQuery(GET_USERS);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	// dispatch(getProducts()).then(() => setIsLoaded(true));
	// }, [dispatch]);

	// const products = useSelector((state) => Object.values(state.products));

	// const products = useSelector((state) => Object.values(state.products));
	// const currentUser = useSelector((state) => state.session.user);
	if (error) return `${error}`;

	return (
		<div className="App">
			{loading ? null : (
				<>
					{/* <Component.Nav currentUser={currentUser} /> */}
					<div>
						{data &&
							data.users.map(
								({ id, firstName, lastName, email, type }) => (
									<div key={id}>
										<div>{firstName}</div>
										<div>{lastName}</div>
										<div>{email}</div>
										<div>{type}</div>
									</div>
								)
							)}
					</div>
					<Component.Nav />
					<header className="App-header">Testing</header>
					{/* <Component.AllProducts products={products} /> */}
				</>
			)}
		</div>
	);
}

export default App;
