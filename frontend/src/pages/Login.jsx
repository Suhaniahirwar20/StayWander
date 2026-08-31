import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">

        <h2 className="login-title">
          Welcome
        </h2>

        <p className="login-subtitle">
          Sign in to continue your travel journey.
        </p>

        <form>

          <div className="mb-3">
            <label className="form-label">
              Email Address
            </label>

            <input
              type="email"
              className="form-control login-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control login-input"
              placeholder="Enter your password"
            />
          </div>

          <button className="btn login-btn w-100">
            Login
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?
          <Link to="/signup" className="signup-link">
            {" "}Create one
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;