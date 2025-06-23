import React from "react";
import "../App.css";

// Affiliations images (add or update paths as needed)
const affiliations = [
  { src: "nsbe-logo.png", alt: "NSBE" },
  { src: "wics-logo.png", alt: "WiCS" },
  { src: "init-logo-1.webp", alt: "INIT" },
  { src: "fiu-logo-3.png", alt: "FIU" },
  { src: "mlt-logo.png", alt: "MLT" },
  { src: "rtc-logo.avif", alt: "RTC" },
  { src: "colorstack-logo.png", alt: "ColorStack" },
];

const Affiliations = () => {
  return (
    <div id="affils-content" className="affiliations-section">
      <h2 className="fw-bold text-center" style={{ fontSize: "2.2rem", marginBottom: "1.2rem" }}>Affiliations</h2>
      <div className="affiliations-carousel-wrapper">
        <div className="affiliations-carousel">
          {[...affiliations, ...affiliations].map((affil, idx) => (
            <div className="affiliation-icon" key={idx}>
              <img src={affil.src} alt={affil.alt} className="affiliation-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Affiliations;
