import React from "react";
import "./Process.css";

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "Understanding your specific requirements and goals.",
    },
    {
      num: "02",
      title: "Fabric Selection",
      desc: "Choosing the best materials for durability and comfort.",
    },
    {
      num: "03",
      title: "Design & Proto",
      desc: "Creating initial samples according to your specs.",
    },
    {
      num: "04",
      title: "Approval",
      desc: "Final review and sign-off on the design and material.",
    },
    {
      num: "05",
      title: "Mass Production",
      desc: "Precision manufacturing using advanced machinery.",
    },
    {
      num: "06",
      title: "Quality Check",
      desc: "Rigorous 10-point inspection for every piece.",
    },
    {
      num: "07",
      title: "Packaging",
      desc: "Secure and professional packing for transit.",
    },
    {
      num: "08",
      title: "Delivery",
      desc: "Global shipping and door-to-door delivery.",
    },
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="process-header">
          <h2>Our 8-Step Manufacturing Process</h2>
          <p>Excellence in every thread, from concept to delivery.</p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-num">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
