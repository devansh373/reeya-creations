import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar-wrapper ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span>वसुधैव कुटुंबकम</span>
            <span className="separator">|</span>
            <span>Vasudhaiva Kutumbakam - "The world is one family."</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="main-nav">
        <div className="container main-nav-content">
          <div className="logo">
            <img src={logo} alt="Reeya Creations Logo" className="logo-img" />
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="with-dropdown">
              <a href="#products">
                Product Collection <ChevronDown size={14} />
              </a>
            </li>
            <li>
              <a href="#about">Why Reeya Creation</a>
            </li>
            <li>
              <a href="#mission">Our Mission</a>
            </li>
            <li>
              <a href="#manufacturing">Manufacturing</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="enquire-btn">
              <div className="avatar-group">
                <div className="avatar"></div>
              </div>
              Enquire Now
            </button>
            <div className="delivery-info">
              <span className="delivery-label">Deliver to:</span>
              <div className="country-selector">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="India"
                  width="20"
                />
                <ChevronDown size={14} />
              </div>
            </div>
            <button className="cart-btn">
              <ShoppingCart size={20} />
              <span className="cart-count">3</span>
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
