const express = require("express");
// const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");
// const { handleValidationErrors } = require("../../utils/validation");

const { Product } = require("../../db/models");

const router = express.Router();

router.get(
	"/",
	asyncHandler(async (_req, res) => {
		const products = await Product.findAll();
		return res.json(products);
	})
);

module.exports = router;
