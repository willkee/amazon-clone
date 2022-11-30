const addressModel = require("../models/address.model");

module.exports = {
	Query: {
		addressesByUserId: (_, args) =>
			addressModel.getAddressesByUserId(args.userId),
	},
};
