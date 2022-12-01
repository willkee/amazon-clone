const { getUsers } = require("../models/user");
const resolvers = {
	Query: {
		users: () => getUsers(),
	},
};

module.exports = resolvers;
