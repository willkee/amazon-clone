import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

// import { restoreCSRF, csrfFetch } from "./store/csrf";

import * as sessionActions from "./store/session";

import App from "./App";
import store from "./store";
import "./index.css";

// if (process.env.NODE_ENV !== "production") {
// 	restoreCSRF();

// 	window.csrfFetch = csrfFetch;
// 	window.store = store;
// 	window.sessionActions = sessionActions;
// }

const client = new ApolloClient({
	uri: "http://localhost:5500/graphql",
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<ApolloProvider client={client}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ApolloProvider>
		{/* </Provider> */}
	</React.StrictMode>
);
