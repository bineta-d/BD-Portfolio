import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";
import "./App.css";
import { FaDownload } from "react-icons/fa"; 
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Affiliations from "./components/Affiliations";
import Footer from "./components/Footer";



const App = () => {
  return (
    <>
    <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </Helmet>
      
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="navbar-expand-lg p-1">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home" >My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"  >
            <Nav className="ms-auto" >
              <Nav.Link as={Link} to="about" smooth={true} duration={1000}>About</Nav.Link>
              <Nav.Link as={Link} to="skills" smooth={true} duration={1000}>Skills</Nav.Link>
              <Nav.Link as={Link} to="projects" smooth={true} duration={1000}>Projects</Nav.Link>
              <Nav.Link as={Link} to="contact" smooth={true} duration={1000}>Contact</Nav.Link>
              <Nav.Link as={Link} to="more" smooth={true} duration={1000}>More</Nav.Link>
              <Nav.Link href="/public/BD-Resume-2025.pdf" target="_blank" download="/public/BD-Resume-2025.pdf" style={{color:"white"}}>
                   Resume<FaDownload size={30} style={{marginLeft:"2px"}} />
             
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Hero/>
      </div>
    
      <div fluid className="section  text-center" id="about">
      <About/>
 
      </div>

      <div fluid className="section text-center" id="skills">
      <Skills/>
      </div>

      <div fluid className="section text-center" id="projects">
      <Projects/>      
    
      </div>
{/* 
      <div fluid className="section text-center" id="contact">
      <Contact/>
      <hr/>
      </div> */}

      <div fluid className="section text-center" id="more">
      <Affiliations/>
      </div>

      <div fluid className="section text-center" id="more">
      <Footer/>
      </div>

      
    </>
  );
};

export default App;
