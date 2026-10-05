const joi = require("joi");

// Joi validates user input before it reaches the controller
module.exports.listingSchema = joi.object({
  listings: joi
    .object({
      title: joi.string().trim().required(),
      description: joi.string().trim().required(),
      location: joi.string().trim().required(),
      country: joi.string().trim().required(),
      price: joi.number().min(0).required(),
      category: joi
        .string()
        .valid(
          "Beach",
          "Mountains",
          "Cabins",
          "Camping",
          "Forest",
          "City",
          "Lakefront",
          "Treehouses",
          "Boats",
        )
        .required(),

      image: joi.string().allow("", null),
    })
    .required(),
});

module.exports.reviewSchema = joi.object({
  review: joi
    .object({
      rating: joi.number().min(1).max(5).required(),
      comment: joi.string().trim().required(),
    })
    .required(),
});
