import { Link } from "react-router-dom";
import "../../styles/ListingCard.css";

const ListingCard = ({ listing }) => {
  return (
    <Link
      to={`/listings/${listing._id}`}
      className="text-decoration-none text-dark"
    >
      <div className="listing-card">
        <div className="listing-image">
          <img
            src={
              listing.image?.url ||
              "https://via.placeholder.com/400x250?text=No+Image"
            }
            alt={listing.title}
          />

          {listing.featured && <span className="featured-badge">Featured</span>}
        </div>

        <div className="listing-content">
          <div className="listing-top">
            <h5>{listing.title}</h5>

            {listing.rating && (
              <span className="listing-rating">⭐ {listing.rating}</span>
            )}
          </div>

          <p className="listing-location">
            {listing.location}
            {listing.country && `, ${listing.country}`}
          </p>

          <p className="listing-price">
            ₹{Number(listing.price || 0).toLocaleString()}
            <span> / night</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
