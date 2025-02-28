import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Container, Modal, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
// import "./App.css";
import "../App.css";
import { FaDownload } from "react-icons/fa"; 


export const About = () => {
  return (
    <div className="holder mb-5">
      {/* Organization Logos Section */}
      {/* <div className="orgs justify-content-evenly pt-3 overflow-x-auto" id="orgs">
        <ul className="d-flex flex-nowrap justify-content-between gap-4 unstyled">
          <li><img src="./nsbe-logo.png" alt="" className="org-logo" /></li>
          <li><img src="./wics-logo.png" alt="" className="org-logo" /></li>
          <li><img src="/init-logo-1.webp" alt="" className="org-logo" /></li>
          <li><img src="./fiu-logo-3.png" alt="" className="org-logo" /></li>
          <li><img src="/mlt-logo.png" alt="" className="org-logo" /></li>
          <li><img src="/rtc-logo.avif" alt="" className="org-logo" /></li>
          <li><img src="/colorstack-logo.png" alt="" className="org-logo" /></li>
        </ul>
      </div> */}

      {/* About Section */}
      <div className="about-content pt-5 text-center" style={{ backgroundColor: "#F5FBFF" }}>
        <Container fluid style={{ backgroundColor: "#F5FBFF" }} >
          <h2 className="fw-bold text-center" style={{ fontSize: "4rem",backgroundColor:"red" }}>About</h2>

          <Row className="align-items-center justify-content-center mt-1">
            {/* Profile Image & Social Icons */}
            <Col xs={12} md={5} lg={4} className="text-center mb-4">
              <div className="">
              <Row>
                <Col className="profile ">
                 <img src="/headshot.jpg" className="rounded-8 align-content-center border-black"></img>
               </Col>
               </Row>
                <Row className="icons pt-3 d-flex justify-content-center gap-3 ">
                 <Col>
                  <a href="https://www.linkedin.com/in/bineta-d-394813218/" target="_blank">
                    <img src="linkedin-icon.webp" alt="" className="icon" />
                  </a>
                </Col>

                <Col>
                  <a href="https://github.com/bineta-d" target="_blank">
                    <img src="github-icon1.webp" alt="" className="icon" />
                  </a>
                </Col>
                 <Col>
                  <a href="mailto:bineta.diatta21@gmail.com">
                    <img src="mail-icon.png" alt="" className="icon" />
                  </a>
                </Col>

                </Row>
              </div>
            </Col>

            {/* About Text */}
            <Col xs={12} md={7} lg={6} className=" p-5">
              <h1 className="fw-bold text-md-start" style={{fontSize: "2.8rem"}}>Bineta Diatta</h1>
              <p className="text-center text-md-start" style={{fontSize:'2rem'}}>
              <em>Computer Science - Software Design & Development Track</em>
              </p>
              <p className="text-center text-md-start">
                I'm currently an undergraduate student-athlete working towards my Bachelors of Science (B.S.) degree in Computer Science 
                with an expected graduation date of Spring 2026. 
              </p>
              <p className="text-center text-md-start">
              My interests include the development of full stack web applications, mobile application development, backend engineering and database management. 
              </p>

              <p className="text-center text-md-start">
                I'm a member of the Women's Basketball Team
            at Florida International University.
              </p>
            </Col>
          </Row>
        </Container>

        {/* next section */}

          <Container className="pb-5">
            <div><h4 className="title">Learn More</h4></div>
            <Row>
              <Col>
                <Nav.Link as={Link} to="skills-title" smooth={true} duration={600}>
                <button type ="button" className="btn btn-lg mt-5 btn-dark" data-bs-toggle="button">My Skills</button>
                </Nav.Link>
              </Col>

              <Col >
                <Nav.Link as={Link} to="projects-title" smooth={true} duration={600}>
                <button type ="button" className="btn btn-lg mt-5 btn-dark" data-bs-toggle="button">My Projects & Experience</button>
                </Nav.Link>
              </Col>

              <Col >
                <Nav.Link as={Link} to="affils-content" smooth={true} duration={600}>
                <button type ="button" className="btn btn-lg mt-5 btn-dark" data-bs-toggle="button">My Affiliations</button>
                </Nav.Link>
              </Col>
            

              <Col>
               <a href="/BD-Resume-2025.pdf" download="BD-Resume-2025.pdf" className="text-decoration-none">
                 <button type="button" className="btn btn-lg mt-5 btn-dark gap-2 align-items-center">
                    Resume <FaDownload size={50} />
                 </button>
                </a>
              </Col>           
             
            </Row>
          </Container>





      </div>
    </div>
  );
};

export default About;
