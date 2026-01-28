import React, { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "./Catalogue.css";
import product2 from "../assets/96137982a94461402be7a4319e5c7deb29f7f679.png";
import product3 from "../assets/e4c047d2593aabf592915acd74bf59edc3211a1e.png";
import product1 from "../assets/edcf5d533edef5699110a9e6f7b6fe1b214e1be2.png";

const Catalogue = () => {
  const categories = [
    "Corporate Gifting",
    "School Clothes",
    "Corporate Garments",
    "Hospital Clothes",
    "Hotel Clothes",
  ];

  const [activeCategory, setActiveCategory] = useState("Corporate Garments");

  const productCards = [
    {
      title: "Office Uniforms",
      image: product1,
    },
    {
      title: "Formal Shirts & Trousers",
      image: product2,
    },
    {
      title: "Industrial & Factory Wear",
      image: product3,
    },
  ];

  const sectorData = [
    {
      title: "Corporate Gifting",
      links: [
        "Customized T-Shirts",
        "Corporate Shirts",
        "Hoodies & Jackets",
        "Caps & Bags",
        "Event & Festive Apparel",
        "Promotional Clothing",
      ],
    },
    {
      title: "School Clothes",
      links: [
        "School Shirts & Trousers",
        "Skirts & Shorts",
        "Tunics & Frocks",
        "Sweaters & Blazers",
        "Sports Uniforms",
        "House & Activity T-Shirts",
      ],
    },
    {
      title: "Corporate Garments",
      links: [
        "Formal Shirts & Trousers",
        "Office Uniforms",
        "Staff Uniforms",
        "Industrial & Factory Wear",
        "Customized Workwear",
      ],
    },
    {
      title: "Hospital Clothes",
      links: [
        "Doctor Coats",
        "Nurse Uniforms",
        "Scrubs & OT Wear",
        "Patient Gowns",
        "Medical Staff Uniforms",
      ],
    },
    {
      title: "Hotel Clothes",
      links: [
        "Front Office Uniforms",
        "Housekeeping Uniforms",
        "Chef Coats & Kitchen Wear",
        "Restaurant & Service Staff Uniforms",
        "Customized Hospitality Apparel",
      ],
    },
  ];

  return (
    <section className="catalogue-section">
      <div className="container">
        {/* Top Header */}
        <div className="catalogue-header">
          <h2>Our Catalogue</h2>
          <p>
            Trusted Manufacturing & Trading of all type garments for{" "}
            <strong>Corporates, Schools, Hospitals</strong>, and{" "}
            <strong>Hotels</strong> Worldwide.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="catalogue-main">
          {/* Sidebar Navigation */}
          <div className="catalogue-sidebar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`nav-item ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {activeCategory === cat && <ArrowRight size={18} />}
              </button>
            ))}
          </div>

          {/* Product Gallery / Slider */}
          <div className="catalogue-gallery-wrapper">
            <button className="slider-btn prev">
              <ChevronLeft size={24} />
            </button>
            <div className="catalogue-gallery">
              {productCards.map((card, idx) => (
                <div className="product-card" key={idx}>
                  <h3>{card.title}</h3>
                  <div className="product-img-wrapper">
                    <img src={card.image} alt={card.title} />
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-btn next">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Black Banner Section */}
        <div className="sector-banner">
          <div className="banner-bg-overlay"></div>
          <div className="banner-content">
            <div className="banner-header">
              <h2>Clothing Solutions for Every Sector</h2>
              <p>Reliable Apparel Solutions for Every Industry</p>
            </div>

            <div className="sector-grid">
              {sectorData.map((sector, idx) => (
                <div className="sector-column" key={idx}>
                  <h4>{sector.title}</h4>
                  <ul>
                    {sector.links.map((link, lIdx) => (
                      <li
                        key={lIdx}
                        className={
                          link === "Tunics & Frocks" ? "highlight" : ""
                        }
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="catalogue-footer">
          <p>
            Not sure which solution fits? <a href="#contact">Contact Us</a> for
            a custom consultation - we'll design an approach just for you
          </p>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
