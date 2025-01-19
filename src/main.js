import React from "react";
import "./main.css"; // Assuming you have a CSS file for styling
import man from "./F1.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Rating */}
        <div className="rating">
          <span>⭐ Google Rating</span>
          <span className="stars">★★★★★</span>
        </div>

        {/* Main Text */}
        <h1 style={{textAlign: 'left'}}>Your trusted partner for compliance business needs</h1>
        <p style={{textAlign: 'left'}}>
          An online business compliance platform that helps entrepreneurs and
          other individuals with various, <span>registrations</span>,{" "}
          <span>tax filings</span>, and other <span>legal matters</span>.
        </p>

        {/* Key Metrics */}
        <div className="metrics">
          <div>
            <strong>4.5+</strong>
            <p>Customer Rating</p>
          </div>
          <div>
            <strong>20,000+</strong>
            <p>Clients</p>
          </div>
          <div>
            <strong>99.8%</strong>
            <p>Financial Stability</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons" style={{textAlign: 'left'}}>
          <button className="btn-primary">Talk An Expert</button>
          <button className="btn-secondary">See how it works</button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="hero-sidebar">
        <button>Annual Compliance</button>
        <button>Payroll Services</button>
        <button>Company Formation</button>
        <button>Annual Compliance</button>
      </div>

      {/* Illustration */}
      <div className="hero-illustration">
        <img
          src={man} alt="Illustration"
        />
      </div>
    </section>
  );
};

export default HeroSection;
