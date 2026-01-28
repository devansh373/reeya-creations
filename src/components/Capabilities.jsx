import React from "react";
import "./Capabilities.css";
import capabilitiesImg from "../assets/d20227d066870e38b6831bcc2bf194f22d15dcb8.jpg";

const Capabilities = () => {
  return (
    <section className="capabilities-section">
      <div className="container">
        <div className="section-header">
          <h2>
            Our high quality manufacturing capabilities <br /> have made us
            world leaders
          </h2>
        </div>

        <div className="capabilities-grid">
          <div className="capabilities-image-wrapper">
            <img
              src={capabilitiesImg}
              alt="Manufacturing Capabilities"
              className="capabilities-img"
            />
          </div>

          <div className="capabilities-content">
            <p className="main-desc">
              <strong>
                <em>Reeya Creations</em>
              </strong>{" "}
              is a trusted manufacturer of premium garments and customized
              uniform solutions for corporate, healthcare, hospitality,
              educational, and institutional sectors. We focus on quality,
              comfort, and customization to deliver stylish, durable apparel
              that strengthens brand identity. With reliable service,
              competitive pricing, and timely delivery, we are committed to
              long-term client satisfaction.
            </p>

            <div className="capability-item">
              <h3>Design & Innovation</h3>
              <p>
                Bringing imagination to functional reality, shaping a chic
                tomorrow of comfort and luxury.
              </p>
            </div>

            <div className="capability-item">
              <h3>Quality</h3>
              <p>
                Quality isn't just a standard; it's our commitment to
                perfection.
              </p>
            </div>

            <div className="capability-item">
              <h3>Manufacturing</h3>
              <p>
                Keeping quality at the forefront of our manufacturing, we
                leverage state-of-the-art technology to deliver excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
