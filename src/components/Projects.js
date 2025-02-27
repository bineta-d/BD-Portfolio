import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
// import "/App.css";
import { Container } from "react-bootstrap";

export const Projects = () =>{
    return (<div className="holder">
    <div className="projects-content pt-5 text-center">
      <Container fluid style={{ backgroundColor: "#F5FBFF" }} >

        <div className="title">
           <h2 className="fw-bold" style={{ fontSize: '4rem'}}>Projects</h2>
          </div>
      </Container>
    </div>
     

    </div>
    );
};
export default Projects;