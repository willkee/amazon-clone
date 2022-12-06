import { csrfFetch } from "./csrf";

// Queries
import { GET_USERS } from "../graphql/user";

// constants
const RETRIEVED_USERS = "session/RETRIEVED_USERS";

// action creators
const retrievedUsers = (users) => ({
	type: RETRIEVED_USERS,
	users,
});

// thunks
export const getUsers = () => async (dispatch) => {
	const res = await csrfFetch("/api/graphql", {
		method: "POST",
		body: JSON.stringify(GET_USERS),
	});
	const { data } = await res.json();
	await dispatch(retrievedUsers(data.users));
};

// reducer
const userReducer = (state = {}, action) => {
	const newState = { ...state };
	switch (action.type) {
		case RETRIEVED_USERS: {
			action.users.map((user) => (newState[user.id] = user));
			return newState;
		}
		default:
			return state;
	}
};

export default userReducer;
