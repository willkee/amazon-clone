"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Address extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Address.belongsTo(models.User, { foreignKey: "userId" });
		}
	}
	Address.init(
		{
			userId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			streetAddress1: {
				allowNull: false,
				type: DataTypes.STRING(256),
			},
			streetAddress2: {
				type: DataTypes.STRING(256),
			},
			city: {
				allowNull: false,
				type: DataTypes.STRING(100),
			},
			state: {
				allowNull: false,
				type: DataTypes.STRING(15),
			},
		},
		{
			sequelize,
			modelName: "Address",
		}
	);
	return Address;
};
