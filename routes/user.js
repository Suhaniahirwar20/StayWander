const express = require("express");
const router = express.Router();
const User = require("../Models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const {
  renderSignupForm,
  signUp,
  renderLoginForm,
  logIn,
  logOut,
} = require("../controllers/user");

router.route("/signup")
.get(renderSignupForm)
.post(wrapAsync(signUp));

router.route("/login")
.get(renderLoginForm)
.post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  logIn,
);

router.get("/logout", logOut);

module.exports = router;
