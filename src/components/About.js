import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Navbar, Nav } from "react-bootstrap";

import { Link } from "react-scroll";
// import "/App.css";
import { Container } from "react-bootstrap";

export const About =() =>{
    return (<div className="holder p-5" >

        <div className="orgs justify-content-evenly pt-3  overflow-x-scroll " id="orgs">
            <ul className="d-flex flex-row hstack gap-5 justify-content-around ">
                <div><li><img src="./nsbe-logo.png" alt="" /></li></div>
                <div><li><img src="./wics-logo.png" alt="" /></li></div>
                <div><li><img src="/init-logo-1.webp" alt="" /></li></div>
                <div><li><img src="./fiu-logo-3.png" alt="" /></li></div>
                {/* <div><li><img src="SWE-logo.jpg" alt="" /></li></div> */}
                <div><li><img src="/mlt-logo.png" alt="" /></li></div>
                <div><li><img src="/rtc-logo.avif" alt="" /></li></div>
                <div><li><img src="/colorstack-logo.png" alt="" /></li></div>
            </ul>
        </div>
      <div className="about-content p-5" style={{backgroundColor: "#F5FBFF"}}>
    <div className="title"><h2 className="fw-bold" style={{ fontSize: '4rem'}}>About</h2></div>
    
    <div className="d-flex p-5">  
      <div className="profile">
            <img src="/headshot.jpg" className="rounded-8 align-content-center border-black"></img>
            <div className="icons pt-4 align-content-end">
              <a href="https://www.linkedin.com/in/bineta-d-394813218/" target="_blank"><img src="linkedin-icon.webp" alt="" /></a>
              <a href="https://github.com/bineta-d" target="_blank"><img src="github-icon1.webp" alt=""/></a>              
<a href="mailto:@bineta.diatta21@gmail.com"> <img src="mail-icon.png" alt="" /></a>
            </div>
      </div>
      <p>I am a student-athlete playing basketball and pursuing a degree in Computer Science,
      with a focus on software design and development at Florida International University.</p>
      
    </div>
    </div>
     

    </div>
    );
};
export default About;