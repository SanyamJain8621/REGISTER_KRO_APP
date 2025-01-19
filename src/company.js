import "./Company.css"
import coinbaseLogo from "./l6.png"; // Replace with correct paths
import spotifyLogo from "./l5.png";
import slackLogo from "./l3.png";
import dropboxLogo from "./l2.png";
import webflowLogo from "./l4.png";
import zoomLogo from "./l1.png";
export default function (){
    return (
      <div className="logo-bar">
        <div className="logo-container">
          <img src={coinbaseLogo} alt="Coinbase" />
        </div>
        <div className="logo-container">
          <img src={spotifyLogo} alt="Spotify" />
        </div>
        <div className="logo-container">
          <img src={slackLogo} alt="Slack" />
        </div>
        <div className="logo-container">
          <img src={dropboxLogo} alt="Dropbox" />
        </div>
        <div className="logo-container">
          <img src={webflowLogo} alt="Webflow" />
        </div>
        <div className="logo-container">
          <img src={zoomLogo} alt="Zoom" />
        </div>
      </div>
    );
  };
  
