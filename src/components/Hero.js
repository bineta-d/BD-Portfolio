import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { IoDownloadOutline } from "react-icons/io5";
import "../App.css";

// Typing Effect Component
const TypingEffect = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <>{displayedText}</>;
};

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
            <h1 className="hero-title-secondary">Software Engineer<br/></h1>
            <h1 className="hero-title-tertiary"><TypingEffect text="Mobile • Web • Full Stack" speed={60} /></h1>
            <Nav.Link as={Link} to="about" smooth={true} duration={1000} offset={-100}>
              <button type ="button" className="btn btn-lg btn-portfolio" data-bs-toggle="button">View Portfolio</button>
            </Nav.Link>
          </div>
        </div>
      </div>
    );
};
export default Hero;