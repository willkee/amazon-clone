import { csrfFetch } from "./csrf";

// constants
const RETRIEVED_PRODUCTS = "session/RETRIEVED_PRODUCTS";

// action creators
const retrievedProducts = (products) => ({
	type: RETRIEVED_PRODUCTS,
	products,
});

// thunks

export const getProducts = () => async (dispatch) => {
	const res = await csrfFetch("/api/products");
	const data = await res.json();
	await dispatch(retrievedProducts(data));
};

// reducer
const productsReducer = (state = {}, action) => {
	const newState = { ...state };
	switch (action.type) {
		case RETRIEVED_PRODUCTS: {
			action.products.map((product) => (newState[product.id] = product));
			return newState;
		}
		default:
			return state;
	}
};

export default productsReducer;
