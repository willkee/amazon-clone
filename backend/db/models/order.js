"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Order extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Order.belongsTo(models.User, { foreignKey: "userId" });
			Order.hasMany(models.OrderItem, { foreignKey: "orderId" });
		}
	}
	Order.init(
		{
			userId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			total: {
				allowNull: false,
				type: DataTypes.DECIMAL(10, 2),
			},
		},
		{
			sequelize,
			modelName: "Order",
		}
	);
	return Order;
};
