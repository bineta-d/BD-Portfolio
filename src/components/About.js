import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { Container, Modal, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import "../App.css";
import { IoDownloadOutline, IoLogoLinkedin, IoLogoGithub, IoMail } from "react-icons/io5";

export const About = () => {
  return (
    <div className="holder mb-5">
      <div id="about-title" className="about-content pt-1 text-center" style={{ backgroundColor: "#F5FBFF" }}>
        <Container fluid style={{ backgroundColor: "#F5FBFF" }}>
          <h2 className="fw-bold text-center" style={{ fontSize: "3rem", marginBottom: "1.2rem" }}>About</h2>
          <div className="about-content-row">
            <div className="about-icons-col">
              <div className="about-icons d-flex justify-content-center align-items-center">
                <a href="https://www.linkedin.com/in/bineta-d-394813218/" target="_blank" rel="noopener noreferrer">
                  <IoLogoLinkedin className="about-social-icon" />
                </a>
                <a href="https://github.com/bineta-d" target="_blank" rel="noopener noreferrer">
                  <IoLogoGithub className="about-social-icon" />
                </a>
                <a href="mailto:bineta.diatta21@gmail.com">
                  <IoMail className="about-social-icon" />
                </a>
              </div>
            </div>
            <div className="about-text-col px-2 mx-auto" style={{marginTop:0, textAlign: 'center', maxWidth: '75vw'}}>
                 <p className="text-center about-paragraph" style={{marginBottom: "0.3rem", maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto', }}>
                I'm currently an undergraduate student-athlete working towards my Bachelors of Science (B.S.) degree in Computer Science with an expected graduation date of December 2025.
                <br /> My interests include the development of full stack web applications, mobile application development, front/backend development, and database management.
                <br/> I've played Division I basketball for four years, most recently a member of the Women's Basketball Team at Florida International University.
              </p>
            </div>
          </div>
        </Container>
        <Container className="pb-5">
          <div><h4 className="title">Learn More</h4></div>
          <div className="learn-more-btns-grid">
            <Nav.Link as={Link} to="skills-title" smooth={true} duration={600} offset={-70}>
              <button type ="button" className="learn-more-btn" data-bs-toggle="button">Skills</button>
            </Nav.Link>
            <Nav.Link as={Link} to="affils-content" smooth={true} duration={600} offset={-70}>
              <button type ="button" className="learn-more-btn" data-bs-toggle="button">Affiliations</button>
            </Nav.Link>
            <Nav.Link as={Link} to="projects-title" smooth={true} duration={600} offset={-70}>
              <button type ="button" className="learn-more-btn" data-bs-toggle="button">Projects</button>
            </Nav.Link>
            <Nav.Link as={Link} to="experience-title" smooth={true} duration={600} offset={-70}>
              <button type ="button" className="learn-more-btn" data-bs-toggle="button">Experience</button>
            </Nav.Link>
            <Nav.Link href="/BD-Resume-2025.pdf" download="BD-Resume-2025.pdf" className="text-decoration-none">
              <button type="button" className="learn-more-btn" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                Resume <IoDownloadOutline size={24} style={{marginLeft: '8px'}} />
              </button>
            </Nav.Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
