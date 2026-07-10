const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

const { signUp, login, logOut } = require("../controllers/user");

router.post("/signup", wrapAsync(signUp));

router.post("/login", passport.authenticate("local"), wrapAsync(login));

router.post("/logout", logOut);

module.exports = router;
