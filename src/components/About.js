import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { Container, Modal, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import "../App.css";
import { IoDownloadOutline, IoLogoLinkedin, IoLogoGithub, IoMail } from "react-icons/io5";

export const About = () => {
  return (
    <div className="holder mb-0 m-0 p-0">
      <div id="about-title" className="about-content pt-1 text-center bg-pink-100 m-0">
        <Container fluid className="bg-pink-100 px-4 py-10 m-0">
          <h2 className="fw-bold text-center text-4xl mb-4 font-semibold">About</h2>
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
            <div className="about-text-col px-2 mx-auto mt-0 text-center" style={{maxWidth: '75vw'}}>
                 <p className="text-start about-paragraph mb-6 mx-auto" style={{maxWidth: '75%'}}>
                I'm Bineta Diatta, a software engineer experienced in mobile, web and full stack development. With a strong foundation in computer science principles and a passion for creating innovative solutions to complex problems within my communities and beyond. 
                My goal is to leverage my skills and knowledge to contribute to impactful projects and make a positive difference in the technology industry and the world.
                <br/> As a former Division I athlete, I am well versed in team collaboration, leadership, and time management and bring a unique perspective to software engineering, combining my technical skills with the ability to work effectively in high-pressure environments.
              </p>
              <div style={{maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'start'}}>
                 <h3 className="text-2xl font-bold mb-3" style={{color: '#232323'}}>Education</h3>
                 <p className="text-start about-paragraph mb-0 w-full">
                   <strong>Florida International University (FIU)</strong><br/>
                   Bachelors of Science (B.S.) in Computer Science<br/>
                   <em>Focus: Software Design & Development</em>
                 </p>
              </div>
            </div>
          </div>
        </Container>
        <Container className="pb-0 px-4 py-6">
          <div><h4 className="title">Learn More</h4></div>
          <div className="learn-more-btns-grid gap-4 mb-0">
            <Nav.Link as={Link} to="skills" smooth={true} duration={600} offset={-100}>
              <button type ="button" className="learn-more-btn">Skills</button>
            </Nav.Link>
            <Nav.Link as={Link} to="affiliations" smooth={true} duration={600} offset={-100}>
              <button type ="button" className="learn-more-btn">Affiliations</button>
            </Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={600} offset={-100}>
              <button type ="button" className="learn-more-btn">Projects</button>
            </Nav.Link>
            <Nav.Link as={Link} to="experience" smooth={true} duration={600} offset={-100}>
              <button type ="button" className="learn-more-btn">Experience</button>
            </Nav.Link>
            <Nav.Link href="/BD-Resume-25-copy.pdf" download className="text-decoration-none">
              <button type="button" className="learn-more-btn w-full flex items-center justify-center">
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
