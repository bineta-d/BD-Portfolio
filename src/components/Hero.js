import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
// import "/App.css";

export const Hero = () =>{
    return (<div className="holder" >
    <div className="hero d-flex flex-column">
    <div className="hero-content ">
        <div className="profile">
            <img src="/headshot.jpg" className="rounded-8 align-content-center "></img>
        </div>
        <h1 className="fw-bold" style={{ fontSize: '7rem'}}>Bineta Diatta</h1>
        <h1 style={{ fontSize: '4rem', fontWeight:'700'} }>Computer Science Student @ FIU</h1>
        <h1 >Software Design & Development Track</h1>
        <Nav.Link as={Link} to="orgs" smooth={true} duration={1000}>
        <button type ="button" className="btn btn-lg mt-5" data-bs-toggle="button">View Portfolio</button>
        </Nav.Link>

        

      </div>
  
    </div>
     

    </div>
    );
};
export default Hero;