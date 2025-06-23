import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { IoDownloadOutline } from "react-icons/io5";
import "../App.css";

// import "/App.css";

export const Hero = () =>{
    return (
      <div className="holder">
        <div className="hero d-flex flex-column pb-3">
          <div className="hero-content p-0 mx-1 mb-1">
            <div className="profile responsive-profile">
              <img src="/headshot.jpg" className="rounded-8 align-content-center profile-img-responsive" alt="Profile" />
            </div>
            <h1 className="fw-bold">Bineta Diatta</h1>
            <h1 className="hero-title-secondary">Computer Science Student<br/> @ FIU</h1>
            <h1 className="hero-title-tertiary">Software Design & Development Track</h1>
            <Nav.Link as={Link} to="about-title" smooth={true} duration={1000} offset={-145}>
              <button type ="button" className="btn btn-lg btn-portfolio" data-bs-toggle="button">View Portfolio</button>
            </Nav.Link>
          </div>
        </div>
      </div>
    );
};
export default Hero;