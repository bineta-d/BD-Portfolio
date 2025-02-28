import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "../App.css";

// import "/App.css";

export const Hero = () =>{
    return (<div className="holder mb-3 " >
    <div className="hero d-flex flex-column ">
    <div className="hero-content p-5 m-5">
        <div className="profile mt-5">
            <img src="/headshot.jpg" className="rounded-8 align-content-center"></img>
        </div>
        <h1 className="fw-bold" style={{ fontSize: '5rem'}}>Bineta Diatta</h1>
        <h1 className="p-5 pt-0 pb-0" style={{ fontSize: '3.5rem', fontWeight:'700'} }>Computer Science Student<br/> @ FIU</h1>
        <h1 className="p-5 pt-0" >Software Design & Development Track</h1>
        <Nav.Link as={Link} to="about-content" smooth={true} duration={1000}>
        <button type ="button" className="btn btn-lg mt-5" data-bs-toggle="button">View Portfolio</button>
        </Nav.Link>

        

      </div>
  
    </div>
     

    </div>
    );
};
export default Hero;