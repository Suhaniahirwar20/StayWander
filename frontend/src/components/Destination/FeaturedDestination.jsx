import "../../styles/FeaturedDestination.css";

const FeaturedDestination = () => {
  return (
    <section className="featured-section">
      <div className="container-fluid px-5">
        <div className="featured-card">
          <div className="featured-image">
            <div className="featured-content">
              <span className="featured-badge">FEATURED DESTINATION</span>

              <h2>Bali, Indonesia</h2>

              <p>
                Tropical paradise with stunning beaches, vibrant culture and
                unforgettable sunsets.
              </p>

              <button className="featured-btn">Explore Bali</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestination;
