import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export const Affiliations = () => {
  const affiliations = [
    { src: "/mlt-logo.png", alt: "MLT" },
    {src: "gwc.png" , alt: "Girls Who Code"},
    { src: "/rtc-logo.avif", alt: "RTC" },
    { src: "/init-logo-1.webp", alt: "INIT" },
    { src: "/colorstack-logo.png", alt: "ColorStack" },
    { src: "./nsbe-logo.png", alt: "NSBE" },
    {src: "codepath-logo.png" , alt: "Society of Women Engineers"},
    { src: "./wics-logo.png", alt: "WiCS" },
    {src: "SWE-logo.jpg" , alt: "Society of Women Engineers"}

  ]
  return (
    <div className="holder p-5 pb-0">
      <div className="affils-content">
        <div className="title">
          <h2 className="fw-bold" style={{ fontSize: '4rem' }}>Affiliations</h2>
        </div>
        <Container className="pt-3 justify-content-between">
          <Row className="justify-content-center pb-5">
            {affiliations.map((org, index) => (
              <Col key={index} md={4} sm={6} xs={12} className="mb-4 d-flex justify-content-center p-2" style={{backgroundColor:""}}>
                <img
                  src={org.src}
                  alt={org.alt}
                  className="img-fluid org-logo"
                  style= {{width:"225px",
                  height:"210px"
                   }}          />
              </Col>
            ))}

           
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Affiliations;