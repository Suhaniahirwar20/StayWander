import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/api";
import "../styles/Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Frontend validation for better user experience
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await signupUser(formData);

      console.log("Signup successful:", response.data);

      // User is automatically logged in after signup
      navigate("/");
    } catch (err) {
      console.error("Signup error:", err);

      setError(
        err.response?.data?.message ||
        "Unable to create account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        <h2 className="signup-title">
          Create Your Account
        </h2>

        <p className="signup-subtitle">
          Start your next adventure with StayWander.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                className="form-control signup-input"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                className="form-control signup-input"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              className="form-control signup-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              className="form-control signup-input"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="form-control signup-input"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && (
            <p className="text-danger mb-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="btn signup-btn w-100"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
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