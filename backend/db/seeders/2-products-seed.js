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
				{
					sellerId: 1,
					name: "Boeing 747",
					shortDesc: "This is a very large airplane.",
					longDesc:
						"This is a double decker airplane and can hold hundreds of people for very long flights.",
					imageUrl:
						"https://upload.wikimedia.org/wikipedia/commons/3/33/Boeing_747-8_first_flight_Everett%2C_WA.jpg",
					price: 9999.99,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Products", null, {});
	},
};
