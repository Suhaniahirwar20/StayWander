import destinations from "../../data/Destinations";
import DestinationCard from "./DestCard";
import "../../styles/DestGrid.css";

const DestGrid = () => {
  return (
    <section className="destination-section">
      <div className="container">
        <div className="section-heading">
          <h2>Explore Amazing Destinations</h2>

          <p>
            Discover breathtaking places around the world for your next
            unforgettable adventure.
          </p>
        </div>

        <div className="destination-grid">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestGrid;
