import { Link } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-container">

        <h2 className="signup-title">
          Create Your Account
        </h2>

        <p className="signup-subtitle">
          Start your next adventure with StayWander.
        </p>

        <form>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>

              <input
                id="firstName"
                type="text"
                className="form-control signup-input"
                placeholder="John"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>

              <input
                id="lastName"
                type="text"
                className="form-control signup-input"
                placeholder="Doe"
              />
            </div>

          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              className="form-control signup-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              id="password"
              type="password"
              className="form-control signup-input"
              placeholder="Create a password"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              className="form-control signup-input"
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="btn signup-btn w-100">
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account?
          <Link to="/login" className="login-link">
            {" "}Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;