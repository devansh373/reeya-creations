import React from "react";
import { ArrowRight, Award, ShieldCheck, Globe } from "lucide-react";
import heroBg from "../assets/landing-page-hero-bg.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="overlay"></div>
        <img src={heroBg} alt="Manufacturing Facility" className="hero-img" />
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1>Reliable Apparel Solutions for Every Industry</h1>
          <p>
            Trusted Manufacturing & Trading of all type garments for
            <strong> Corporates, Schools, Hospitals</strong>, and{" "}
            <strong>Hotels</strong> Worldwide.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">
              Free Consultation & Quote
              <ArrowRight size={18} />
            </button>
            <span className="hero-subtext">
              No obligation. 100% confidential
            </span>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="trust-badges">
        <div className="container badges-container">
          <div className="badge-item">
            <div className="badge-icon-wrapper">
              <Award size={24} className="badge-icon" />
            </div>
            <div className="badge-info">
              <h3>Premium Manufacturing</h3>
              <p>We provide thoughtfully designed</p>
            </div>
          </div>
          <div className="badge-item">
            <div className="badge-icon-wrapper">
              <ShieldCheck size={24} className="badge-icon" />
            </div>
            <div className="badge-info">
              <h3>Quality Assured</h3>
              <p>Quality Always Matters</p>
            </div>
          </div>
          <div className="badge-item">
            <div className="badge-icon-wrapper">
              <Globe size={24} className="badge-icon" />
            </div>
            <div className="badge-info">
              <h3>World Wide Export</h3>
              <p>Global Reach, Every Industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
