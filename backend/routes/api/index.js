const express = require("express");
const router = express.Router();

const sessionRouter = require("./session");
const productsRouter = require("./products");

router.use("/session", sessionRouter);
router.use("/products", productsRouter);

module.exports = router;
