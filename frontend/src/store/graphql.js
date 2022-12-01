import { csrfFetch } from "./csrf";

// constants
const RETRIEVED_USERS = "session/RETRIEVED_USERS";

// action creators
const retrievedUsers = (users) => ({
	type: RETRIEVED_USERS,
	users,
});

// // thunks

export const getUsers = () => async (dispatch) => {
	const res = await csrfFetch("/api/graphql", {
		method: "POST",
		body: JSON.stringify({
			query: `
                query allUsers {
                    users {
                        id
                        firstName
                        lastName
                        email
                        type
                    }
                }
            `,
		}),
	});
	const data = await res.json();
	console.log("\n\n\n", data, "\n\n REDUX THUNK DATA \n\n\n");
	await dispatch(retrievedUsers(data));
};

// // reducer
const userReducer = (state = {}, action) => {
	const newState = { ...state };
	switch (action.type) {
		case RETRIEVED_USERS: {
			// action.users.map((user) => (newState[user.id] = user));
			return newState;
		}
		default:
			return state;
	}
};

export default userReducer;
