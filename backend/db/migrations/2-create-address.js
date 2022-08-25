"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Addresses", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Users" },
			},
			streetAddress1: {
				allowNull: false,
				type: Sequelize.STRING(256),
			},
			streetAddress2: {
				type: Sequelize.STRING(256),
			},
			city: {
				allowNull: false,
				type: Sequelize.STRING(100),
			},
			state: {
				allowNull: false,
				type: Sequelize.STRING(15),
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
		await queryInterface.dropTable("Addresses");
	},
};
