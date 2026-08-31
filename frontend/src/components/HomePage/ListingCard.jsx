import React from "react";
import "../../styles/ListingCard.css";

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <div className="listing-image">
        <img src={listing.image.url} alt={listing.title} />
        {listing.featured && <span className="featured-badge">Featured</span>}
      </div>
      <div className="listing-content">
        <div className="listing-top">
          <h5>{listing.title}</h5>
          <span className="listing-rating">⭐ {listing.rating}</span>
        </div>
        <p className="listing-location">
          {listing.location}, {listing.country}
        </p>

        <p className="listing-price">
          ₹{listing.price.toLocaleString()}
          <span> / night</span>
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
