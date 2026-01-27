import React from "react";
import "./Categories.css";

const Categories = () => {
  const seasons = [
    {
      title: "Men Collection",
      items: ["Formal Suits", "Casual Shirts", "Working Trousers"],
    },
    {
      title: "Women Collection",
      items: ["Office Wear", "Hospitality Uniforms", "Casual Blouses"],
    },
    {
      title: "Industrial Gear",
      items: ["High-Vis Jackets", "Safety Coveralls", "Protective Gloves"],
    },
    {
      title: "Accessories",
      items: ["Ties & Belts", "Corporate Bags", "Safety Shoes"],
    },
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-header">
          <h2>Clothing Solutions for Every Season</h2>
          <p>Carefully Crafted. Extensively Tested.</p>
        </div>

        <div className="categories-grid">
          {seasons.map((season, index) => (
            <div className="season-card" key={index}>
              <h3>{season.title}</h3>
              <ul>
                {season.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="link-btn">Explore Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
