const { User } = require("../../db/models");
const bcrypt = require("bcryptjs");

const getAllUsers = async () => {
	const users = await User.findAll();
	return users;
};

const addNewCustomer = async (firstName, lastName, email, password) => {
	const hashedPassword = bcrypt.hashSync(password);
	const user = await User.create({
		firstName,
		lastName,
		email,
		hashedPassword,
		type: "Customer",
	});

	return await User.findByPk(user.id);
};

module.exports = { getAllUsers, addNewCustomer };
