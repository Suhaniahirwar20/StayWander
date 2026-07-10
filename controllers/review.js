const Listing = require("../models/listing");
const Review = require("../models/review");
const ExpressError = require("../utils/ExpressError");

module.exports.createReview = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(new ExpressError(404, "Listing not found"));
  }

  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;

  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();

  res.status(201).json({
    success: true,
    message: "Review created successfully",
    review: newReview,
  });
};

module.exports.destroyReview = async (req, res,next) => {
  let { id, reviewId } = req.params;
  const review = await Review.findById(reviewId);

  if (!review) {
    return next(new ExpressError(404, "Review not found"));
  }

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  res.status(200).json({
    success: true,
    message: "Review deleted successfully",
  });
};
