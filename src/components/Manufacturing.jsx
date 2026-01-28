import React from "react";
import "./Manufacturing.css";

// Background Image
import manufacturingBg from "../assets/79e7fda29b3080000713e5f731cace8393ab27a7.jpg";

// Brand Logos
import brand1 from "../assets/manufacture-brands/18da4f5e173b4759eaceb4e67e22985a290add3f.png";
import brand6 from "../assets/manufacture-brands/5a43859859137722551472d2120e87d961a2b9e2.png";
import brand5 from "../assets/manufacture-brands/7718eb849366ad0a8309248e4f4c472121cfcc1a.png";
import brand4 from "../assets/manufacture-brands/da7ca7a8f2c4bfd359d0f1ddfd194a1d733f7da3.png";
import brand2 from "../assets/manufacture-brands/e3382395ece4fc0a6001ca81082af76081ceba72.png";
import brand3 from "../assets/manufacture-brands/f6a76bfed9ffe98688d77bf1671db83b658865ad.png";

const Manufacturing = () => {
  const certifications = [
    { name: "Better Cotton", logo: brand1 },
    { name: "ISO Certified", logo: brand2 },
    { name: "GOTS", logo: brand3 },
    { name: "Plant Based Dyes", logo: brand4 },
    { name: "Global Recycled Standard", logo: brand5 },
    { name: "OEKO-TEX", logo: brand6 },
  ];

  return (
    <section className="manufacturing-section" id="manufacturing">
      <div className="manufacturing-bg">
        <img src={manufacturingBg} alt="Manufacturing Facility" />
        <div className="bg-overlay"></div>
      </div>

      <div className="container">
        <div className="manufacturing-content">
          <h2 className="manufacturing-title">
            Manufacturing <br /> Facilities
          </h2>
          <p className="manufacturing-desc">
            Manufacturing plants located in India and Indonesia are equipped
            with the latest machinery for Cutting, Stitching, Embroidery and
            Washing and boast of a combined production capacity of approx 1.25
            million pieces per month in peak season.
          </p>
        </div>

        <div className="certification-container">
          <h3 className="certification-heading">
            India's Top Mill Partners with Globally Recognised Certifications
          </h3>
          <div className="cert-logos-row">
            {certifications.map((cert, idx) => (
              <div className="cert-card" key={idx}>
                <img src={cert.logo} alt={cert.name} title={cert.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
