"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		safeScope() {
			const { id, firstName, lastName, email } = this;
			return { id, firstName, lastName, email };
		}

		static associate(models) {
			User.hasMany(models.Product, { foreignKey: "sellerId" });
			User.hasOne(models.Cart, { foreignKey: "userId" });
			User.hasMany(models.Address, { foreignKey: "userId" });
			User.hasMany(models.Order, { foreignKey: "userId" });
		}
	}
	User.init(
		{
			firstName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(256),
				allowNull: false,
			},
			hashedPassword: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
			},
			type: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "User",
			defaultScope: {
				attributes: { exclude: ["hashedPassword"] },
			},
		}
	);
	return User;
};
