const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");

const { isLoggedIn, isOwner, validateListing } = require("../middleware");

const {
  index,
  showListing,
  createListing,
  updateListing,
  destroyListing,
} = require("../controllers/listing");

const multer = require("multer");
const { storage } = require("../cloudConfig");

const upload = multer({ storage });

// GET all listings
// POST a new listing
router
  .route("/")
  .get(wrapAsync(index))
  .post(
    isLoggedIn,
    upload.single("listings[image]"),
    validateListing,
    wrapAsync(createListing),
  );

// GET one listing
// UPDATE listing
// DELETE listing
router
  .route("/:id")
  .get(wrapAsync(showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listings[image]"),
    validateListing,
    wrapAsync(updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(destroyListing));

module.exports = router;
