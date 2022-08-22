"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			firstName: {
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			lastName: {
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING(256),
			},
			hashedPassword: {
				allowNull: false,
				type: Sequelize.STRING.BINARY,
			},
			type: {
				allowNull: false,
				type: Sequelize.STRING(20),
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Users");
	},
};
