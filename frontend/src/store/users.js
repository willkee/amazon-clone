// constants
const RETRIEVED_USERS = "users/RETRIEVED_USERS";

// action creators
const retrievedUsers = (data) => ({
	type: RETRIEVED_USERS,
	payload: data,
});

// thunks
export const getUsers = () => async (dispatch) => {
	// const res = await fetch(`/api/session`);
	// if (res.ok) {
	// 	const data = await res.json();
	// 	await dispatch(retrievedUsers(data));
	// }

	const users = [
		{ id: 1, name: "Bob", age: 24 },
		{ id: 2, name: "John", age: 44 },
		{ id: 3, name: "Jane", age: 33 },
		{ id: 4, name: "Mike", age: 55 },
	];

	await dispatch(retrievedUsers(users));
};

// reducer

const userReducer = (state = {}, action) => {
	const newState = { ...state };
	switch (action.type) {
		case RETRIEVED_USERS: {
			action.payload.map((user) => (newState[user.id] = user));
			return newState;
		}
		default:
			return state;
	}
};

export default userReducer;
