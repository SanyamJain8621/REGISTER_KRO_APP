import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Footer () {
  return (
    <footer className="footer-container">
      <div className="footer-flex">
      <div className="footer-top">
        <p className="footer-description">
          Design outstanding interfaces with advanced Figma features in a matter of minutes.
        </p>
        <div className="footer-icons">
          <FaFacebook className="icon"/>
          <FaGoogle className="icon"/>
          <FaApple className="icon"/>
          <FaInstagram className="icon"/>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4 className="footer-heading">START A BUSINESS</h4>
          <ul>
            <li>Features</li>
            <li>Solutions</li>
            <li>Integrations</li>
            <li>Enterprise</li>
            <li>Solutions</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">GOVERNMENT REGISTRATION</h4>
          <ul>
            <li>Partners</li>
            <li>Community</li>
            <li>Developers</li>
            <li>App</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">COMPLIANCE & TAX</h4>
          <ul>
            <li>Channels</li>
            <li>Scale</li>
            <li>Watch the Demo</li>
            <li>Our Competition</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">BIS & CDSCO</h4>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Leadership</li>
            <li>Media Kit</li>
          </ul>
        </div>
      </div>
      </div>
      <div className="footer-bottom">
        <button className="scroll-up-button">↑</button>
        <p>© 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

