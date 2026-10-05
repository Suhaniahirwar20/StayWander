import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/ListingDetails.css";

const ListingDetails = () => {
  const { id } = useParams();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/listings/${id}`,
        );

        setListing(response.data.listing);
      } catch (error) {
        console.error("Error fetching listing:", error);
        setError("Failed to load listing.");
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  if (loading) {
    return (
      <div className="listing-details-loading">
        <div className="loading-spinner"></div>
        <p>Loading your stay...</p>
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className="listing-details-error">
        <div className="error-card">
          <h3>Oops!</h3>
          <p>{error || "Listing not found."}</p>

          <Link to="/" className="back-home-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="listing-details-page">

      {/* Back Button */}
      <Link to="/" className="listing-back-link">
        ← Back to Home
      </Link>

      {/* Main Card */}
      <div className="listing-details-card">

        {/* Image */}
        <div className="listing-image-wrapper">
          <img
            src={
              listing.image?.url ||
              "https://via.placeholder.com/800x500?text=No+Image"
            }
            alt={listing.title}
            className="listing-details-image"
          />

          {listing.featured && (
            <span className="listing-featured-badge">
              Featured
            </span>
          )}
        </div>

        {/* Card Content */}
        <div className="listing-details-body">

          {/* Title */}
          <div className="listing-title-section">
            <h1>{listing.title}</h1>

            <p className="listing-location">
              📍 {listing.location}, {listing.country}
            </p>
          </div>

          {/* Category */}
          <div className="listing-info-box">
            <span className="info-label">Category</span>
            <span className="info-value">{listing.category}</span>
          </div>

          {/* About */}
          <div className="listing-section">
            <h2>About this place</h2>

            <p>
              {listing.description ||
                "No description available for this stay."}
            </p>
          </div>

          {/* Host */}
          {listing.owner && (
            <div className="listing-section listing-host-section">
              <h2>Hosted by</h2>

              <div className="host-details">
                <div className="host-avatar">
                  {listing.owner.firstName?.charAt(0)}
                </div>

                <div>
                  <p className="host-name">
                    {listing.owner.firstName}{" "}
                    {listing.owner.lastName}
                  </p>

                  <p className="host-email">
                    {listing.owner.email}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Price */}
          <div className="listing-price-section">

            <div className="price-details">
              <span className="price">
                ₹{Number(listing.price || 0).toLocaleString()}
              </span>

              <span className="price-unit">
                / night
              </span>
            </div>

            {listing.rating && (
              <div className="listing-rating">
                ⭐ {listing.rating}
              </div>
            )}
          </div>

          {/* Reserve */}
          <button className="reserve-btn">
            Reserve
          </button>

        </div>
      </div>
    </div>
  );
};

export default ListingDetails;