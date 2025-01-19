import "./Company Names.css";
import oracle from "./P1.png";
import morpheus from "./P2.png";
import samsung from "./P3.png";
import monday from "./P4.png";
import segment from "./P5.png";

export default function TrustedBy() {
    return (
      <div className="trusted-by-section">
        <h2>Trusted By Over 100+ Startups and Freelance Business</h2>
        <div className="logo-bar">
          <div className="logo-container">
            <img src={oracle} alt="ORACLE" />
          </div>
          <div className="logo-container">
            <img src={morpheus} alt="MORPHEUS" />
          </div>
          <div className="logo-container">
            <img src={morpheus} alt="MORPHEUS" />
          </div>
          <div className="logo-container">
            <img src={samsung} alt="SAMSUNG" />
          </div>
          <div className="logo-container">
            <img src={monday} alt="MONDAY.com" />
          </div>
          <div className="logo-container">
            <img src={segment} alt="segment" />
          </div>
        </div>
      </div>
    );
  }
