const { User } = require("../../db/models");

const getUsers = async () => {
	return await User.findAll();
};

module.exports = { getUsers };
