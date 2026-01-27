import React from "react";
import "./About.jsx"; // Actually just creating the component here
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div className="about-images">
          <div className="image-main">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
              alt="Quality Control"
            />
          </div>
          <div className="image-secondary">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop"
              alt="Team at work"
            />
          </div>
          <div className="experience-badge">
            <span className="years">15+</span>
            <span className="exp-text">Years of Experience</span>
          </div>
        </div>

        <div className="about-content">
          <span className="sub-heading">About Reeya Creations</span>
          <h2>We Deliver more than high-quality products...</h2>
          <p>
            Reeya Creations is a leading manufacturer and exporter of
            high-quality apparel. With a focus on innovation and excellence, we
            provide customized solutions for various industries worldwide. Our
            dedication to quality and sustainability sets us apart in the
            textile industry.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-num">500k+</span>
              <span className="stat-label">Products Delivered</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">95%</span>
              <span className="stat-label">Customer Satisfaction</span>
            </div>
          </div>

          <button className="outline-btn">Learn More About Us</button>
        </div>
      </div>
    </section>
  );
};

export default About;
