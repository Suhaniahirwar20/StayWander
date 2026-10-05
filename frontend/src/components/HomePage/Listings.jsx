import { useEffect, useState } from "react";

import api from "../../api/api";
import ListingCard from "./ListingCard";
import "../../styles/Listings.css";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchListings = async () => {
    try {
      const response = await api.get("/listings");

      console.log("Fetched listings:", response.data);

      setListings(response.data.listings);
    } catch (err) {
      console.error("Error fetching listings:", err);

      setError(
        err.response?.data?.message ||
          "Failed to load listings. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className="listings-section">
        <div className="container">
          <p>Loading listings...</p>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="listings-section">
        <div className="container">
          <p className="text-danger">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="explore" className="listings-section">
      <div className="container">
        <div className="section-header">
          <h2>Popular Stays</h2>
          <p>Handpicked stays loved by travelers around the world.</p>
        </div>

        <div className="listings-grid">
          {listings.length > 0 ? (
            listings.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))
          ) : (
            <p>No listings available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Listings;
