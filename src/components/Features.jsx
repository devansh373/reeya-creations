import React from "react";
import "./Features.css";
import feature1 from "../assets/feature-1-Vector.png";
import feature2 from "../assets/feature-2-Vector.png";
import feature3 from "../assets/feature-3-Vector.png";

const Features = () => {
  const items = [
    {
      image: feature1,
      title: "Premium Manufacturing Standards",
      description:
        "We provide thoughtfully designed gifting and uniform solutions tailored for corporate, hotel, hospital, and school sectors, ensuring consistency, comfort, and a strong brand presence.",
    },
    {
      image: feature2,
      title: "Excellence in Gifting & Uniforms",
      description:
        "Our products are manufactured using high-quality materials, precise processes, and strict quality checks to ensure durability, superior finish, and reliable performance for bulk and customized orders.",
    },
    {
      image: feature3,
      title: "Customer-Centric Approach",
      description:
        "Your satisfaction is our utmost priority. With a dedicated customer-centric approach, we tailor our garments to meet your unique preferences and values, ensuring a seamless and personalized experience with every purchase.",
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Reason For Choosing Us</h2>
        </div>

        <div className="features-grid">
          {items.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="feature-img"
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
