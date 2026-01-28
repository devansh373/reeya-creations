import React from "react";
import "./Process.css";

const Process = () => {
  const topRowSteps = [
    {
      id: 1,
      text: "Share your design, tech pack & order quantity",
    },
    {
      id: 2,
      text: "Get price & time estimate from Reeya Creations",
    },
    {
      id: 3,
      text: "Place order with Advance 30% of total estimated total",
    },
    {
      id: 4,
      text: "Reeya Creations sends you Fit Samples for approval (Est. 2-3 Weeks)",
    },
  ];

  const bottomRowSteps = [
    {
      id: 8,
      text: "Production starts after you approve samples & Pay 40% Advanced",
    },
    {
      id: 7,
      text: "Goods are offered for QC & inspections (Est. 6-8 Weeks)",
    },
    {
      id: 6,
      text: "Goods are shipped after QC and balance 30% payment",
    },
    {
      id: 5,
      text: "You are ready to start selling",
    },
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="process-container-black">
          <div className="process-header">
            <h2>Our 8-Step Manufacturing Process</h2>
            <p>We make manufacturing simple and transparent.</p>
          </div>

          <div className="process-grid-wrapper">
            {/* Top Row: 1 -> 4 */}
            <div className="process-row">
              {topRowSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="step-box">
                    <div className="step-badge">{step.id}</div>
                    <p>{step.text}</p>
                  </div>
                  {index < 3 && (
                    <div className="connector-arrow">
                      <svg
                        width="60"
                        height="24"
                        viewBox="0 0 60 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="0" y1="12" x2="58" y2="12"></line>
                        <polyline points="50 5 58 12 50 19"></polyline>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Vertical Connector between 4 and 5 */}
            <div className="vertical-connector">
              <svg
                width="24"
                height="60"
                viewBox="0 0 24 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="0" x2="12" y2="58"></line>
                <polyline points="19 50 12 58 5 50"></polyline>
              </svg>
            </div>

            {/* Bottom Row: 8 <- 7 <- 6 <- 5 */}
            <div className="process-row">
              {bottomRowSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="step-box">
                    <div className="step-badge">{step.id}</div>
                    <p>{step.text}</p>
                  </div>
                  {index < 3 && (
                    <div className="connector-arrow">
                      <svg
                        width="60"
                        height="24"
                        viewBox="0 0 60 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="60" y1="12" x2="2" y2="12"></line>
                        <polyline points="10 19 2 12 10 5"></polyline>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="process-footer">
            <p>
              Pre-Order Sampling available on Paid basis. Timelines depend on
              materials, order size & style complexity.
            </p>
            <p>Remote QC/video inspection available.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
