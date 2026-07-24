import React from "react";
import "../styles/frontPage.css";

const FrontPage = ({ onNavigate }) => {
  const features = [
    "Applied to 12 Companies",
    "3 Interviews this week",
    "1 Offer received",
  ];

  const buttons = ["Log In", "Sign Up"];

  return (
    <section className="front-page">
      <div className="container">

        {/* Left Side */}
        <div className="left-panel">

          <h2 className="header">JobTracker</h2>

          <h1 className="hero-title">
            Your placement journey, tracked{" "}
            <span className="orange-text">beautifully</span>
          </h1>

          <p className="description">
            From first application to final offer — keep every company,
            every round, every note in one place.
          </p>

          <ul className="feature-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                {feature}
              </li>
            ))}
          </ul>

          <p className="footer">
            Made for campus placement grind
          </p>

        </div>

        {/* Right Side */}
        <div className="right-panel">

          <div className="form-container">

            <h1 className="welcome-title">
              Welcome Back.
            </h1>

            <p className="welcome-subtitle">
              Log in to your tracker.
            </p>

            <div className="button-group">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`tab-button ${index === 0 ? "active-tab" : ""}`}
                >
                  {button}
                </button>
              ))}
            </div>

            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                onNavigate("dashboard");
              }}
            >

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>

                <input
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <p className="forgot-password">
                Forgot Password?
              </p>

              <button
                type="submit"
                className="login-btn"
              >
                Log In
              </button>

            </form>

            <p className="signup-text">
              Don't have an account?

              <button
                className="signup-btn"
                type="button"
                onClick={() => onNavigate("dashboard")}
              >
                Sign Up
              </button>

            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FrontPage;
