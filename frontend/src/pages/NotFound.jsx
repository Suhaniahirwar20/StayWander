import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-card">

        <i className="fa-solid fa-mountain-sun notfound-icon"></i>

        <h1 className="error-code">404</h1>

        <h2 className="notfound-title">
          Looks like you're off the map!
        </h2>

        <p className="notfound-text">
          The destination you're looking for doesn't exist or may have been
          moved. Let's get you back on your next adventure.
        </p>

        <Link to="/" className="btn home-btn">
          <i className="fa-solid fa-house me-2"></i>
          Explore StayWander
        </Link>

      </div>
    </div>
  );
}

export default NotFound;