const { getAllUsers, addNewCustomer } = require("../models/user.model");

module.exports = {
	Query: {
		users: () => getAllUsers(),
	},
	Mutation: {
		newCustomer: (_, { firstName, lastName, email, password }) =>
			addNewCustomer(firstName, lastName, email, password),
	},
};
