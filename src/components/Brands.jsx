import React from "react";
import "./Brands.css";

const Brands = () => {
  const brandLogos = [
    // Using high-quality SVGs for clear branding
    {
      name: "CK",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/CK_logo.pnm.png",
    }, // Simplified for placeholder
    {
      name: "Vans",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vans_logo.svg/2560px-Vans_logo.svg.png",
    },
    {
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
    },
    {
      name: "New Balance",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png",
    },
    {
      name: "Levi's",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Levi_brand_logo.svg/2560px-Levi_brand_logo.svg.png",
    },
    {
      name: "Boss",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Hugo_Boss_logo.svg/2560px-Hugo_Boss_logo.svg.png",
    },
    {
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",
    },
    {
      name: "Puma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puma_complete_logo.svg/2560px-Puma_complete_logo.svg.png",
    },
    {
      name: "Zara",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png",
    },
    {
      name: "Uniqlo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UNIQLO_logo.svg/2560px-UNIQLO_logo.svg.png",
    },
  ];

  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <div className="section-header">
          <h2>
            Over the Years, we have gained the Trust of <br /> Top Brand across
            the Globe
          </h2>
        </div>

        <div className="brands-container">
          {/* Row 1 */}
          <div className="brands-row">
            {brandLogos.slice(0, 5).map((brand, idx) => (
              <div className="brand-card shadow-sm" key={idx}>
                <img src={brand.logo} alt={brand.name} className="brand-img" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="brands-row">
            {brandLogos.slice(5, 10).map((brand, idx) => (
              <div className="brand-card shadow-sm" key={idx}>
                <img src={brand.logo} alt={brand.name} className="brand-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="brands-footer">
          <p>
            Not sure which solution fits? <a href="#contact">Contact Us</a> for
            a custom consultation - we'll design an approach just for you
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brands;
