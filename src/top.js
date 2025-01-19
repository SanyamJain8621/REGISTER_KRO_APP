import React from "react";
import "./top.css"; 
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function()  {
  return (
    <div className="top-bar">
      <div className="contact-info">
        <div className="icon-email">
          <MdEmail /> 
          <a href="mailto:www.registerkaro.in" style={{marginLeft: 10 + 'px'}}>www.registerkaro.in</a>
        </div>
        <span> | </span>
        <div className="icon-email">
          <FaPhoneAlt /> <a href="tel:+918447746183" style={{marginLeft: 10 + 'px'}}>+91 8447746183</a>
        </div>
        <span> | </span>
      </div>
      <div className="logo">
        <FaFacebook className="top-icons"/>
        <FaApple className="top-icons"/>
        <FaInstagram className="top-icons"/>
        <FaTwitter className="top-icons"/>
      </div>
    </div>
  );
};

