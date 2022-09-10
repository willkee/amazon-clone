"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Products",
			[
				{
					sellerId: 1,
					name: "Gummy Bear",
					shortDesc: "This is a gummy bear.",
					longDesc:
						"This is a particularly large gummy bear. It is good for snacking.",
					imageUrl:
						"https://www.candywarehouse.com/item-images/130818-01_giant-red-gummy-bear.jpg",
					price: 99.99,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Products", null, {});
	},
};
