const express = require("express");
const router = express.Router();

router.all("*", async (req, res, next) => {
	console.log("SADASDASD");
	next();
});

router.get("/test", async (req, res) => {
	res.json({ test: "ASHDKJASHDKJASD" });
});

module.exports = router;
