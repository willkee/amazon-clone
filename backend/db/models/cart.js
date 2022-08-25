"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cart extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Cart.belongsTo(models.User, { foreignKey: "userId" });
			Cart.hasMany(models.CartItem, { foreignKey: "cartId" });
		}
	}
	Cart.init(
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
			modelName: "Cart",
			freezeTableName: true,
		}
	);
	return Cart;
};
