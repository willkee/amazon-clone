import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import sessionReducer from "./session";
import productsReducer from "./products";

const reducer = { session: sessionReducer, products: productsReducer };

const store = configureStore({
	reducer,
	middleware: [thunk, logger],
});

export default store;
