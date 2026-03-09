const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../Models/listing");
const wrapAsync = require("../utils/wrapAsync");
const Review = require("../Models/review");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const { createReview, destroyReview } = require("../controllers/review");

//createReview
router.post("/", isLoggedIn, validateReview, wrapAsync(createReview));

//Delete review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(destroyReview),
);

module.exports = router;
