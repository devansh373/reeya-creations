import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Set the second item open by default like in the target

  const faqs = [
    {
      question: "Can I get custom labels, hang tags, bags, and inserts?",
      answer:
        "Yes, we provide end-to-end branding solutions including custom woven labels, hang tags, printed polybags, and premium packaging inserts to ensure your brand identity is consistent across all touchpoints.",
    },
    {
      question:
        "What printing and customization techniques does Reeya Creations offer?",
      answer: (
        <div className="faq-detailed-answer">
          <p>
            Reeya Creations offers several high-quality printing techniques,
            depending on the type of item selected:
          </p>
          <ul>
            <li>
              <strong>Direct-To-Garment (DTG) Printing:</strong> We use top of
              the range Brother and Kornit machines with eco-friendly,
              water-based inks to print vibrant long-lasting designs directly
              onto garments.
            </li>
            <li>
              <strong>Direct-To-Film (DTF) Printing:</strong> We use premium
              transfer films and advanced heat press equipment to ensure
              accurate, durable prints.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Do you offer samples?",
      answer:
        "Yes, we offer pre-production samples on a paid basis. Sampling typically takes 2-3 weeks and allows you to verify the fit, fabric quality, and branding before proceeding with bulk production.",
    },
    {
      question: "How do you ensure product quality?",
      answer:
        "We follow a rigorous 10-point quality control process. From fabric testing and GSM verification to final stitching inspections and needle detection, every garment undergoes multiple checks before being packed.",
    },
    {
      question: "Do you export internationally?",
      answer:
        "Absolutely. We have a robust logistics network that handles door-to-door shipping to major global markets including the USA, UK, Europe, and UAE, managing all customs documentation for a hassle-free experience.",
    },
    {
      question: "How can I place a bulk or B2B enquiry?",
      answer:
        "You can simply fill out our contact form above or reach out to us directly via email. Our team will get back to you within 24 hours with a custom quote and timeline based on your specific requirements.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-subtitle">
            Have more questions? Find answers in our{" "}
            <a href="#contact">help center</a>.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp size={20} className="faq-icon" />
                ) : (
                  <ChevronDown size={20} className="faq-icon" />
                )}
              </button>

              <div className="faq-answer-wrapper">
                <div className="faq-answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
