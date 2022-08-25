"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
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
