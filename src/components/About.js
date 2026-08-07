import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "../App.css";
import { IoDownloadOutline, IoLogoLinkedin, IoLogoGithub, IoMail } from "react-icons/io5";

export const About = () => {
  return (
    <div className="holder mb-0" style={{margin: 0, padding: 0}}>
      <div id="about-title" className="about-content pt-1 text-center" style={{ backgroundColor: "#FFE4E1", margin: 0 }}>
        <Container fluid style={{ backgroundColor: "#FFE4E1", padding: '2.5rem 1rem', margin: 0 }}>
          <h2 className="fw-bold text-center" style={{ fontSize: "2.8rem", marginBottom: "1rem", fontWeight: 600 }}>About</h2>
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
            <div className="about-text-col px-auto text-center" >
                 <p className="text-center about-paragraph px-4 py-2" >
                I'm Bineta Diatta, a software engineer experienced in mobile, web and full stack development. With a strong foundation in computer science principles and a passion for creating innovative solutions to complex problems within my communities and beyond. 
                <hr/>My goal is to leverage my skills and knowledge to contribute to impactful projects and make a positive difference in the technology industry and the world. As a former Division I athlete, I am well versed in team collaboration, leadership, and time management and bring a unique perspective to software engineering, combining my technical skills with the ability to work effectively in high-pressure environments.
              </p>
              <div className= "text-center px-5" style={{maxWidth: '100%', overflow: 'hidden'}}>
                 <h3 style={{fontSize: '1.6rem', fontWeight: '700', marginBottom: '0.8rem', color: '#232323'}}>Education</h3>
                 <p className="text-start about-paragraph" style={{maxWidth: '100%', overflow: 'hidden', wordWrap: 'break-word'}}>
                   <strong> Florida International University (2026)</strong><br/>
                   <em>Bachelors of Science (B.S.) in Computer Science</em>
                 </p>    
                <p className="text-start focus-text" style={{maxWidth: '100%', overflow: 'hidden'}}>Focus: <strong>Software Design & Development</strong></p>

              </div>
            </div>
          </div>
        </Container>
        <Container className="pb-0" style={{padding: '0.5rem 1rem 1.5rem 1rem'}}>
          <div><h4 className="title">Learn More</h4></div>
          <div className="learn-more-btns-grid" style={{gap: '1rem', marginBottom: '0rem'}}>
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
            {/* <Nav.Link href="/BD-Resume-25-copy.pdf" target="_blank" download className="text-decoration-none">
              <button type="button" className="learn-more-btn" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                Resume <IoDownloadOutline size={24} style={{marginLeft: '8px'}} />
              </button>
            </Nav.Link> */}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
