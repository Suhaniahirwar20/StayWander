import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container">

        <div className="row gy-4">

          {/* Brand */}
          <div className="col-lg-4">
            <h3 className="footer-logo">
              <i className="fa-solid fa-mountain-sun me-2"></i>
              StayWander
            </h3>

            <p className="footer-text">
              Discover beautiful destinations, unique stays,
              and unforgettable travel experiences around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4">
            <h5 className="footer-heading">
              Quick Links
            </h5>

            <ul className="footer-links">

              <li>
                <Link to="/">Explore</Link>
              </li>

              <li>
                <Link to="/create">
                  List Your Place
                </Link>
              </li>

              <li>
                <Link to="/">
                  Experiences
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div className="col-lg-4">
            <h5 className="footer-heading">
              Connect With Us
            </h5>

            <div className="social-icons">

              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>

            </div>
          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2026 StayWander. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;