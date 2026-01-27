import React from "react";
import { ShieldCheck, Zap, Heart } from "lucide-react";
import "./Features.css";

const Features = () => {
  const items = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Premium Quality Fabrics",
      description:
        "We source the finest materials to ensure durability, comfort, and a professional look for all our garments.",
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Turnaround",
      description:
        "Our efficient manufacturing processes allow us to deliver high-quality apparel solutions in record time.",
    },
    {
      icon: <Heart size={32} />,
      title: "Customized for You",
      description:
        "Every industry has unique needs. We tailor our designs and production to match your specific requirements.",
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
              <div className="feature-icon">{item.icon}</div>
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
