import "../../styles/DestCard.css";

const DestCard = ({ destination }) => {
  return (
    <div className="destination-card">

      <div className="destination-image">

        <img
          src={destination.image}
          alt={destination.name}
        />

      </div>

      <div className="destination-content">

        <div className="destination-top">

          <div>

            <h4>{destination.name}</h4>

            <span>{destination.country}</span>

          </div>

          <div className="destination-rating">
            ⭐ {destination.rating}
          </div>

        </div>

        <p>
          {destination.description}
        </p>

        <div className="destination-footer">

          <span>{destination.stays} Stays</span>

          <button>
            Explore →
          </button>

        </div>

      </div>

    </div>
  );
};

export default DestCard;