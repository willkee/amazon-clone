"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			sellerId: {
				type: Sequelize.INTEGER,
				references: { model: "Users" },
			},
			name: {
				type: Sequelize.STRING(100),
			},
			shortDesc: {
				type: Sequelize.STRING(300),
			},
			longDesc: {
				type: Sequelize.TEXT,
			},
			imageUrl: {
				type: Sequelize.STRING(2000),
			},
			price: {
				type: Sequelize.DECIMAL(6, 2),
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
		await queryInterface.dropTable("Products");
	},
};
