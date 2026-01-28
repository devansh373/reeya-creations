import React from "react";
import { ArrowRight, Check } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-grid">
            {/* Left Content */}
            <div className="contact-info">
              <div className="trust-badge">
                <Check size={16} strokeWidth={3} />
                <span>India's Most Trusted Clothing Manufacturer</span>
              </div>
              <h2 className="contact-title">
                Your Complete Gifting & <br />
                Uniform Solutions Partner
              </h2>
              <p className="contact-description">
                Just fill the contact form with your details along with your
                clothing requirements and we'll get back to you{" "}
                <strong>within 24hrs</strong>.
              </p>
              <ul className="contact-bullets">
                <li>End to end Design support</li>
                <li>Compliant Facilities</li>
                <li>Door to Door Shipping services</li>
              </ul>
            </div>

            {/* Right Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="Christopher" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="White" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="erick_rowe@gmail.com" />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="tel" placeholder="+0897067599383" />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label className="section-label">
                    What Type of Service Are You Looking for?
                  </label>
                  <div className="select-wrapper">
                    <label className="input-label">Service Interested In</label>
                    <select>
                      <option>Corporate Gifting</option>
                      <option>Uniform Solutions</option>
                      <option>Retail Manufacturing</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <div className="textarea-wrapper">
                    <label>What would you like to say?</label>
                    <textarea placeholder="I am looking for corporate gifting and uniform solutions. Please contact me with available options and pricing."></textarea>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Free Consultation & Quote</span>
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
