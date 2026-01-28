import React from "react";
import { ArrowRight } from "lucide-react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Create and sell premium custom clothes easily
          </h2>
          <p className="cta-subtitle">
            Design premium, stylish, eco-friendly apparel and dropship it
            globally.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">
              <span>Free Consultation & Quote</span>
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">
              <span>Watch Our Story</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
