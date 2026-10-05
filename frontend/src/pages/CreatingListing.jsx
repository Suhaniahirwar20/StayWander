import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/api";
import "../styles/CreatingListing.css";

const CreateListing = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    country: "",
    category: "",
    image: null,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle text, number and select inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image separately
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  // Submit listing
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const data = new FormData();

      data.append("listings[title]", formData.title);
      data.append("listings[description]", formData.description);
      data.append("listings[price]", formData.price);
      data.append("listings[location]", formData.location);
      data.append("listings[country]", formData.country);
      data.append("listings[category]", formData.category);

      if (formData.image) {
        data.append("listings[image]", formData.image);
      }

      const response = await api.post("/listings", data);

      console.log("Listing created successfully:", response.data);

      // Go back to homepage after successful creation
      navigate("/");
    } catch (err) {
      console.error("Create listing error:", err);

      setError(
        err.response?.data?.message ||
          "Failed to create listing. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="creating-listing-page">

      <div className="creating-listing-container">

        {/* Header */}
        <div className="creating-listing-header">
          <h2 className="creating-listing-title">
            Create Your Stay
          </h2>

          <p className="creating-listing-subtitle">
            Share a beautiful place and welcome travelers from around
            the world.
          </p>
        </div>


        {/* Form */}
        <form
          className="creating-listing-form"
          onSubmit={handleSubmit}
        >

          {/* Title */}
          <div className="listing-form-group">
            <label className="listing-form-label">
              Listing Title
            </label>

            <input
              type="text"
              name="title"
              className="listing-form-input"
              placeholder="e.g. Beautiful Mountain Cabin"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>


          {/* Description */}
          <div className="listing-form-group">
            <label className="listing-form-label">
              Description
            </label>

            <textarea
              name="description"
              className="listing-form-textarea"
              placeholder="Tell travelers what makes this place special..."
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>


          {/* Price + Country */}
          <div className="listing-form-row">

            <div className="listing-form-group">
              <label className="listing-form-label">
                Price per night (₹)
              </label>

              <input
                type="number"
                name="price"
                className="listing-form-input"
                placeholder="e.g. 2500"
                min="0"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>


            <div className="listing-form-group">
              <label className="listing-form-label">
                Country
              </label>

              <input
                type="text"
                name="country"
                className="listing-form-input"
                placeholder="e.g. India"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>

          </div>


          {/* Location + Category */}
          <div className="listing-form-row">

            <div className="listing-form-group">
              <label className="listing-form-label">
                Location
              </label>

              <input
                type="text"
                name="location"
                className="listing-form-input"
                placeholder="e.g. Manali"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>


            <div className="listing-form-group">
              <label className="listing-form-label">
                Category
              </label>

              <select
                name="category"
                className="listing-form-select"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select a category
                </option>

                <option value="Beach">Beach</option>
                <option value="Mountains">Mountains</option>
                <option value="Cabins">Cabins</option>
                <option value="Camping">Camping</option>
                <option value="Forest">Forest</option>
                <option value="City">City</option>
                <option value="Lakefront">Lakefront</option>
                <option value="Treehouses">Treehouses</option>
                <option value="Boats">Boats</option>
              </select>
            </div>

          </div>


          {/* Image Upload */}
          <div className="listing-form-group">

            <label className="listing-form-label">
              Listing Image
            </label>

            <div className="listing-image-upload">

              <div className="listing-image-icon">
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </div>

              <p className="listing-image-text">
                Upload a beautiful image of your stay
              </p>

              <input
                type="file"
                name="image"
                className="listing-image-input"
                accept="image/*"
                onChange={handleImageChange}
                required
              />

            </div>

          </div>


          {/* Error */}
          {error && (
            <div className="listing-form-error">
              {error}
            </div>
          )}


          {/* Submit */}
          <button
            type="submit"
            className="create-listing-btn"
            disabled={loading}
          >
            {loading
              ? "Creating Listing..."
              : "Create Listing"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default CreateListing;