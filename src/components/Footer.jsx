import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo white">
            <img src={logo} alt="Reeya Creations Logo" className="logo-img" />
          </div>
          <p className="brand-desc">
            Your Premium Partner in high-quality apparel manufacturing and
            export. Delivering excellence worldwide.
          </p>
          <div className="social-links">
            <a href="#">
              <Facebook size={20} />
            </a>
            <a href="#">
              <Instagram size={20} />
            </a>
            <a href="#">
              <Twitter size={20} />
            </a>
            <a href="#">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product Collection</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Manufacturing</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Industries</h3>
          <ul>
            <li>
              <a href="#">Corporate</a>
            </li>
            <li>
              <a href="#">Healthcare</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Hospitality</a>
            </li>
            <li>
              <a href="#">Industrial</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <MapPin size={18} />
              <span>123 Textile Hub, Industrial Area, Mumbai, India</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={18} />
              <span>info@reeyacreations.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; 2024 Reeya Creations. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
