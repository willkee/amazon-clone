const express = require("express");
const { check } = require("express-validator");

const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");

const bcrypt = require("bcryptjs");

const router = express.Router();

const validateLogin = [
	check("email")
		.exists({ checkFalsy: true })
		.isEmail()
		.withMessage("Please provide a valid email."),
	check("password")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a password."),
	handleValidationErrors,
];

// Log in
router.post(
	"/",
	validateLogin,
	asyncHandler(async (req, res, next) => {
		const { email, password } = req.body;

		const user = await User.scope("loginAction").findOne({
			where: { email },
		});
		console.log(user, "user \n\n\n\n");

		const pwMatch = bcrypt.compareSync(
			password,
			user?.hashedPassword.toString()
		);

		if (!user || !pwMatch) {
			const err = new Error("Login failed");
			err.status = 401;
			err.title = "Login failed";
			err.errors = ["The provided credentials were invalid."];
			return next(err);
		}

		await setTokenCookie(res, user);
		return res.json({ user });
	})
);

// Log out
router.delete("/", (_req, res) => {
	res.clearCookie("token");
	return res.json({ message: "success" });
});

// Restore session user
router.get("/", restoreUser, (req, res) => {
	const { user } = req;

	if (user) return res.json({ user: user.safeScope() });
	else return res.json({});
});
module.exports = router;
