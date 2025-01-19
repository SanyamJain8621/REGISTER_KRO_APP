import React from "react";
import "./header.css"; // CSS file for styling
import logo from "./logo.png";
export default function Header() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img
          src={logo} // Replace with actual logo URL
          alt="RegisterKaro Logo"
          className="logo-img"
        />
        <span className="logo-text">
          Register<span className="highlight">Karo</span>
        </span>
      </div>

      <div className="navbar-main">
        
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li className="dropdown">
          <a href="#services">Our Services</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
      </ul>

      <div className="navbar-actions">
        <span className="search-icon">🔍</span>
        <button className="cta-button">Talk An Expert</button>
      </div>
      </div>
    </nav>
  );
};
