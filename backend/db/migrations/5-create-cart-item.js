"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("CartItems", {
			cartId: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: { model: "Cart" },
			},
			productId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Products" },
			},
			quantity: {
				allowNull: false,
				type: Sequelize.INTEGER,
				defaultValue: 1,
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
		await queryInterface.dropTable("CartItems");
	},
};
