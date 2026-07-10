const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError");
const Review = require("./models/review");
const { listingSchema, reviewSchema } = require("./schema");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      success: false,
      message: "Please login first.",
    });
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    return next(new ExpressError(404, "Listing not found"));
  }

  if (!listing.owner.equals(req.user._id)) {
    return next(
      new ExpressError(403, "You are not the owner of this listing."),
    );
  }
  next();
};

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    return next(new ExpressError(400, errMsg));
  }
  next();
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    return next(new ExpressError(400, errMsg));
  }
  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  const { reviewId } = req.params;
  const review = await Review.findById(reviewId);
  if (!review) {
    return next(new ExpressError(404, "Review not found"));
  }
  if (!review.author.equals(req.user._id)) {
    return next(new ExpressError(403, "You are not the author of this review"));
  }
  next();
};
