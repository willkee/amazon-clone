"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					firstName: "Demo",
					lastName: "User",
					email: "demo@user.io",
					hashedPassword: bcrypt.hashSync("password"),
					type: "Customer",
				},
				{
					firstName: "John",
					lastName: "Smith",
					email: "john@smith.io",
					hashedPassword: bcrypt.hashSync("password"),
					type: "Customer",
				},
				{
					firstName: "Jane",
					lastName: "Smith",
					email: "jane@smith.io",
					hashedPassword: bcrypt.hashSync("password"),
					type: "Customer",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
