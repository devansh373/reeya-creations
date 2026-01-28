import React from "react";
import "./Footer.css";
import logo from "../assets/logo-black.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main-card">
          <div className="footer-grid">
            {/* Logo and Copyright Column */}
            <div className="footer-col brand-col">
              <img src={logo} alt="Reeya Creations" className="footer-logo" />
              <div className="copyright-text">
                <p>Copyright © 2024 All Rights Reserved.</p>
                <p>All rights reserved</p>
              </div>
            </div>

            {/* Company Column - Two sub-columns */}
            <div className="footer-col links-col">
              <h4 className="footer-heading">Company</h4>
              <div className="links-sub-grid">
                <ul className="footer-links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">Certificates</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                </ul>
                <ul className="footer-links">
                  <li>
                    <a href="#">Our Mission</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Catalog Column */}
            <div className="footer-col links-col">
              <h4 className="footer-heading">Catalog</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Corporate Gifting</a>
                </li>
                <li>
                  <a href="#">School Clothes</a>
                </li>
                <li>
                  <a href="#">Corporate Garments</a>
                </li>
                <li>
                  <a href="#">Hospital Clothes</a>
                </li>
                <li>
                  <a href="#">Hotel Clothes</a>
                </li>
              </ul>
            </div>

            {/* Help Column */}
            <div className="footer-col links-col">
              <h4 className="footer-heading">Help</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Press Inquiries</a>
                </li>
                <li>
                  <a href="#">Shop Account</a>
                </li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="footer-col contact-col">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="contact-details">
                <p>
                  Office No. 304, Stellar Tower, Sector 62, Noida - 201309, UP,
                  India
                </p>
                <p>
                  <a href="mailto:info@reeyacreations.com">
                    info@reeyacreations.com
                  </a>
                </p>
                <p>
                  <a href="tel:+918178874181">+91 8178874181</a>
                </p>
                <p className="live-chat">Live Chat</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom-line"></div>

          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Terms and Conditions</a>
            <span className="separator">|</span>
            <a href="#">Refund Policy</a>
            <span className="separator">|</span>
            <a href="#">Certificates Of Analysis</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
