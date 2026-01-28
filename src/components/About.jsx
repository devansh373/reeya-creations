import React from "react";
import { ArrowRight } from "lucide-react";
import "./About.css";
import aboutImgMain from "../assets/c124383773855444a27b3b4b4239109ea62d0c2e.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-top-header">
          <h2>We are committed to deliver quality products</h2>
          <p>Sustainable Fabrics With a Focus On Quality.</p>
        </div>

        <div className="about-grid">
          {/* Left: Image Placeholder Area */}
          <div className="about-images">
            <div className="image-wrapper-main">
              <img
                src={aboutImgMain}
                alt="About Reeya"
                className="about-img-main"
              />
            </div>
            {/* Secondary overlapping image */}
            <div className="image-wrapper-sub">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Production"
                className="about-img-sub"
              />
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="about-content">
            <h2 className="main-title">About Reeya Creations</h2>
            <h3 className="sub-title-main">
              Reliable Apparel Solutions for <span>Every Industry</span>
            </h3>
            <p className="description">
              <strong>Reeya Creations</strong> is a trusted manufacturer of
              premium garments and customized uniform solutions for corporate,
              healthcare, hospitality, educational, and institutional sectors.
              We focus on quality, comfort, and customization to deliver
              stylish, durable apparel that strengthens brand identity. With
              reliable service, competitive pricing, and timely delivery, we are
              committed to long-term client satisfaction.
            </p>

            <button className="read-more-btn">
              Read More About Us
              <ArrowRight size={18} />
            </button>

            {/* New Commitments Section */}
            <div className="commitments-section">
              <h3 className="commitment-title">We Stand by Our Commitments</h3>
              <p className="commitment-desc">
                We use the exact grade and quality of raw materials that you pay
                for and we commit to.
              </p>

              <div className="commitment-stats">
                <div className="stat-item">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">Quality Products</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">5%</span>
                  <span className="stat-label">All are hand-made products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
