import "../../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <span className="hero-tag">
          🌿 Discover Nature • Stay Better
        </span>

        <h1 className="hero-title">
          Find your next Unforgettable stay
        </h1>

        <p className="hero-description">
          Discover beautiful cabins, lakeside homes, mountain retreats,
          and unforgettable stays across breathtaking destinations.
        </p>

        <div className="hero-buttons">
          <button className="btn explore-btn">
            Explore Stays
          </button>

          <button className="btn host-btn">
            List Your Place
          </button>
        </div>

      </div>

    </section>
  );
}

export default Hero;