const { getUsers } = require("../models/user.model");

module.exports = {
	Query: {
		users: () => getUsers(),
	},
};
