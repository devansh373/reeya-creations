import React from "react";
import "./Brands.css";

const Brands = () => {
  const brands = [
    {
      name: "Brand 1",
      logo: "https://cdn.worldvectorlogo.com/logos/nike-11.svg",
    },
    {
      name: "Brand 2",
      logo: "https://cdn.worldvectorlogo.com/logos/adidas-8.svg",
    },
    {
      name: "Brand 3",
      logo: "https://cdn.worldvectorlogo.com/logos/puma-logo.svg",
    },
    {
      name: "Brand 4",
      logo: "https://cdn.worldvectorlogo.com/logos/levi-s.svg",
    },
    {
      name: "Brand 5",
      logo: "https://cdn.worldvectorlogo.com/logos/zara-1.svg",
    },
    {
      name: "Brand 6",
      logo: "https://cdn.worldvectorlogo.com/logos/h-m-2.svg",
    },
  ];

  return (
    <section className="brands-section">
      <div className="container">
        <div className="brands-header">
          <h2>Trust of Top Brands across the Globe</h2>
        </div>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div className="brand-item" key={index}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
