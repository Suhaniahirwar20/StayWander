const axios = require("axios");
const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError");

// GET /api/listings
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});

  res.status(200).json({
    success: true,
    listings: allListings,
  });
};

// GET /api/listings/:id
module.exports.showListing = async (req, res, next) => {
  const { id } = req.params;

  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  if (!listing) {
    return next(new ExpressError(404, "Listing not found"));
  }

  res.status(200).json({
    success: true,
    listing,
  });
};

// POST /api/listings
module.exports.createListing = async (req, res, next) => {
  if (!req.file) {
    return next(new ExpressError(400, "Image is required"));
  }

  const { listings } = req.body;

  const location = listings.location;

  // Get latitude and longitude from location
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

  // Create listing
  const newListing = new Listing(listings);

  // Owner comes from authenticated user
  newListing.owner = req.user._id;

  // Image comes from Cloudinary/Multer
  newListing.image = {
    url: req.file.path,
    filename: req.file.filename,
  };

  // Location coordinates
  newListing.latitude = latitude;
  newListing.longitude = longitude;

  await newListing.save();

  res.status(201).json({
    success: true,
    message: "Listing created successfully",
    listing: newListing,
  });
};

// PUT /api/listings/:id
module.exports.updateListing = async (req, res, next) => {
  const { id } = req.params;

  const listing = await Listing.findByIdAndUpdate(
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

  // Update image only if a new image was uploaded
  if (req.file) {
    listing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };

    await listing.save();
  }

  res.status(200).json({
    success: true,
    message: "Listing updated successfully",
    listing,
  });
};

// DELETE /api/listings/:id
module.exports.destroyListing = async (req, res, next) => {
  const { id } = req.params;

  const listing = await Listing.findByIdAndDelete(id);

  if (!listing) {
    return next(new ExpressError(404, "Listing not found"));
  }

  res.status(200).json({
    success: true,
    message: "Listing deleted successfully",
  });
};
