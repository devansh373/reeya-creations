import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Catalogue.css";

const Catalogue = () => {
  const categories = [
    {
      title: "Corporate Apparel",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop",
      count: "450+ Products",
    },
    {
      title: "School Uniforms",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
      count: "300+ Products",
    },
    {
      title: "Medical Scrubs",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      count: "200+ Products",
    },
    {
      title: "Hotel & Hospitality",
      image:
        "https://images.unsplash.com/photo-1621330396173-e41b16d97eb4?q=80&w=2070&auto=format&fit=crop",
      count: "150+ Products",
    },
  ];

  return (
    <section className="catalogue-section">
      <div className="container">
        <div className="catalogue-header">
          <div className="header-text">
            <h2>Our Catalogue</h2>
            <p>
              Explore our wide range of apparel solutions tailored for every
              industry need.
            </p>
          </div>
          <div className="catalogue-controls">
            <button className="control-btn">
              <ChevronLeft />
            </button>
            <button className="control-btn">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="catalogue-grid">
          {categories.map((cat, index) => (
            <div className="catalogue-card" key={index}>
              <div className="card-image">
                <img src={cat.image} alt={cat.title} />
                <div className="card-overlay">
                  <span className="product-count">{cat.count}</span>
                </div>
              </div>
              <div className="card-info">
                <h3>{cat.title}</h3>
                <button className="view-link">View Collection</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
