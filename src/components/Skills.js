import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "../App.css";
import { Container } from "react-bootstrap";

export const Skills = () =>{
    return (<div className="holder p-5 pb-0">
    <div className="skills-content" id="skills-content">
    <div className="title " id="skills-title">
      <h2 className="fw-bold" style={{ fontSize: '4rem'}}>Skills</h2></div>
      <p className="mb-5">I'm dedicated to continuous learning & listed below are some of my skills: </p>
    </div>
{/* ---------------------------------------------------------- */}
    <div className="skills-grid row justify-content-end" >
      {/* <div className="container"> */}
      <div className="col-md-4">
        <span><img src="java-icon.webp" alt="" class="image-fluid" id="skill"/></span>
        <h4>Java</h4>
      </div>

      <div className="col-md-4">
        <span><img src="js-icon.webp" alt="" class="image-fluid" id="skill"/></span>
        <h4>JavaScript</h4>
      </div>
      <div className="col-md-4">
        <span><img src="html-icon.webp" alt="" class="image-fluid" id="skill"/></span>
        <h4>HTML</h4>
      </div>
   
            {/* Row 2 */}
      <div className="row">  
       <div className="col-md-4">
        <span><img src="css-icon.webp" alt="" class="image-fluid" id="skill"/></span>
        <h4>CSS</h4>
        </div>

        <div className="col-md-4">
        <span><img src="react-icon.webp" alt="" class="image-fluid" id="skill"/></span>
        <h4>React JS</h4>

        </div>
        <div className="col-md-4"s>
        <span><img src="GH-icon.webp" alt="" class="image-fluid" id="skill"/></span>
        <h4>Git Version Control</h4>
        </div>

         {/* Row 2 */}
         <div className="row">  
       <div className="col-md-4">
        <span><img src="sql-icon.jpeg" alt="" class="image-fluid" id="skill"/></span>
        <h4>MySQL</h4>
        </div>

        <div className="col-md-4">
        <span><img src="tw-icon.png" alt="" class="image-fluid" id="skill"/></span>
        <h4>Tailwind CSS</h4>

        </div>
        <div className="col-md-4"s>
        <span><img src="spring-icon.png" alt="" class="image-fluid" id="skill"/></span>
        <h4>Spring Boot</h4>
        </div>
      </div> 
      </div> 
    </div> 
      

    {/* </div> */}
    </div>
    );
};
export default Skills;