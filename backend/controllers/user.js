const User = require("../models/user");

module.exports.signUp = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
    });

    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }

      res.status(201).json({
        success: true,
        message: "Account created successfully",
        user: {
          id: registeredUser._id,
          firstName: registeredUser.firstName,
          lastName: registeredUser.lastName,
          email: registeredUser.email,
        },
      });
    });
  } catch (err) {
    next(err);
  }
};

module.exports.login = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Login successful",
    user: {
      id: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
    },
  });
};

module.exports.logOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) return next(err);

      res.clearCookie("connect.sid");

      res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    });
  });
};
