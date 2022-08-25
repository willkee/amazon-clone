"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class OrderItem extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			OrderItem.belongsTo(models.Order, { foreignKey: "orderId" });
			OrderItem.belongsTo(models.Product, { foreignKey: "productId" });
		}
	}
	OrderItem.init(
		{
			orderId: {
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
			modelName: "OrderItem",
		}
	);
	return OrderItem;
};
