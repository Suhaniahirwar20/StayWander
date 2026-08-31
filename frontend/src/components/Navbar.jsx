import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("explore")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top p-3">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand logo" to="/">
          <i className="fa-solid fa-mountain-sun me-3"></i>
          StayWander
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          {/* Center Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <button
                className="nav-link border-0 bg-transparent"
                onClick={handleExploreClick}
              >
                Explore
              </button>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/destination">
                Destinations
              </Link>
            </li>
          </ul>

          {/* Search */}
          <div className="search-container me-4">
            <i className="fa-solid fa-magnifying-glass sw-search-icon"></i>
            <input
              type="search"
              className="form-control search-box"
              placeholder="Search destinations..."
            />
          </div>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            <Link className="wishlist-link" to="/wishlist">
              <i className="fa-regular fa-heart me-2"></i>
              Wishlist
            </Link>

            <Link
              className="btn px-3"
              to="/create"
              style={{
                backgroundColor: "#3A7D44",
                color: "white",
                fontSize: "15px",
              }}
            >
              List Your Property
            </Link>

            <Link
              className="btn btn-outline-success rounded-pill px-4"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
