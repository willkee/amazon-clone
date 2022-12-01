const { Address } = require("../../db/models");

const getAddressesByUserId = async (userId) => {
	const addresses = await Address.findAll({ where: { userId } });
	return addresses.length ? addresses : new Error("No addresses found.");
};

module.exports = { getAddressesByUserId };
