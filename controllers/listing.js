const axios = require("axios");
const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError");

module.exports.index = async (req, res) => {
  let allListings = await Listing.find({});
  res.status(200).json({
    success: true,
    listings: allListings,
  });
};

module.exports.showListing = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    return next(new ExpressError(404, "Listing not found"));
  }
  res.status(200).json({
    success: true,
    listing,
  });
};

module.exports.createListing = async (req, res, next) => {
  if (!req.file) {
    return next(new ExpressError(400, "Image is required"));
  }
  let url = req.file.path;
  let filename = req.file.filename;

  const location = req.body.listings.location;

  const response = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: location,
        format: "json",
        limit: 1,
      },
      headers: {
        "User-Agent": "StayWander-App",
      },
    },
  );
  if (!response.data.length) {
    return next(new ExpressError(404, "Location not found"));
  }

  const latitude = parseFloat(response.data[0].lat);
  const longitude = parseFloat(response.data[0].lon);

  const newListing = new Listing(req.body.listings);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.latitude = latitude;
  newListing.longitude = longitude;

  await newListing.save();
  res.status(201).json({
    success: true,
    message: "Listing created successfully",
    listing: newListing,
  });
};

module.exports.updateListing = async (req, res,next) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listings },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!listing) {
    return next(new ExpressError(404, "Listing not found"));
  }

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  res.status(200).json({
    success: true,
    message: "Listing updated successfully",
    listing,
  });
};

module.exports.destroyListing = async (req, res,next) => {
  let { id } = req.params;
  const listing = await Listing.findByIdAndDelete(id);

  if (!listing) {
    return next(new ExpressError(404, "Listing not found"));
  }
  res.status(200).json({
    success: true,
    message: "Listing deleted successfully",
  });
};
