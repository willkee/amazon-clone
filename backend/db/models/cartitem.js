"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CartItem extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			CartItem.belongsTo(models.Cart, { foreignKey: "cartId" });
			CartItem.belongsTo(models.Product, { foreignKey: "productId" });
		}
	}
	CartItem.init(
		{
			cartId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			productId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			quantity: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: "CartItem",
		}
	);
	return CartItem;
};
