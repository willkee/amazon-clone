"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Product.belongsTo(models.User, { foreignKey: "sellerId" });
			Product.hasMany(models.CartItem, { foreignKey: "productId" });
			Product.hasMany(models.OrderItem, { foreignKey: "productId" });
		}
	}
	Product.init(
		{
			sellerId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING(100),
			},
			shortDesc: {
				allowNull: false,
				type: DataTypes.STRING(300),
			},
			longDesc: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
			imageUrl: {
				allowNull: false,
				type: DataTypes.STRING(2000),
			},
			price: {
				allowNull: false,
				type: DataTypes.DECIMAL(6, 2),
			},
		},
		{
			sequelize,
			modelName: "Product",
		}
	);
	return Product;
};
