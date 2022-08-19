import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import userReducer from "./users";

const reducer = { users: userReducer };

const store = configureStore({
	reducer,
	middleware: [thunk, logger],
});

export default store;
