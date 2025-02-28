import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAlignJustify } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    title: "Recyclepedia MDC",
    description: "A sustainability web application built for Miami-Dade County.",
    details: "Developed as part of the web development team, this project provides users with a resource to learn about recycling best practices and sustainability efforts. Built using modern web technologies to deliver an engaging and informative experience.",
    image: "dig-logo.png",
    link: "https://github.com/skyler-hall/Recyclepediamdc",
  },
  {
    id: 2,
    title: "Harmony Haven",
    description: "A student resource website for student-athletes.",
    details: "Built a dynamic web application using HTML & CSS with resources to guide student-athletes in topics like financial literacy, mental health & professional development. Incorporated interactive elements and animations using JavaScript to enhance user engagement and navigation experience.",
    image: "sport.jpeg",
    link: "https://github.com/bineta-d/The-Harmony-Haven",
  },
  {
    id: 3,
    title: "Financial Lit App",
    description: "A mobile-friendly financial literacy platform.",
    details: "Beginner-friendly financial information that's accessible to all ages, covering topics like credit, taxes, etc. The goal is to offer clear and comprehensive resources to help users build financial literacy and make informed decisions. Built using React, HTML, CSS, JavaScript, and Bootstrap for a responsive and user-friendly interface.",
    image: "fin-lit.jpeg",
    link: "https://github.com/bineta-d/Financial-Literacy-App",
  },
  {
    id: 4,
    title: "Geek Test",
    description: "A book recommendation REST API.",
    details: "Users can discover new books and authors while sorting results based on various criteria. Features include retrieving books by genre, top sellers, and ratings, as well as updating book prices by publisher. Built using REST API principles, handling GET and PUT/PATCH requests to manage book data effectively.",
    image: "geek.avif",
    link: "https://github.com/bineta-d/Geek-Test",
  },
  {
    id: 5,
    title: "Library Management App",
    description: "A React-based library management system.",
    details: "A React app for managing a book library, featuring detailed book info, responsive design, and modern UI elements. Integrates with a RESTful API via Axios and uses React Context for state management. Includes custom SVG icons and CSS Grid/Flexbox for layout.",
    image: "library-pic.jpeg",
    link: "https://github.com/bineta-d/library-management-app",
  },
];

export const Projects = () => {
  return (
    <div className="holder">
      <div className="projects-content pt-3 text-center">
        <Container fluid style={{ backgroundColor: "#F5FBFF" }} className="p-5 ">
          <div className="title">
            <h2 className="projects-title fw-bold mb-3" style={{ fontSize: "4rem" }}>Projects & Experience</h2>
            <p className="mb-0">Listed below are several personal and academic projects:</p>
          </div>

          {/* Projects */}
          <Row className="project-row m-5 mt-0">
            {projectData.map((project) => (
              <ProjectCard key={project.id} project={project}/>
            ))}
          </Row>

          <Row>
            <Col>
              <a href="https://github.com/bineta-d" style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-lg mt- btn-dark" data-bs-toggle="button">
                  View My Github
                </button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Col md={4} sm={8} className="project">
      <Card
        className="border border-black shadow project-card"
        style={{
          width: "100%",
          transition: "transform 0.3s ease-in-out",
          marginTop: "3rem",
          borderRadius: "10%",
        }}
      >
        <Card.Img
          variant="top"
          src={project.image}
          className="border-bottom border-black"
          style={{
            height: "250px",
            objectFit: "fill",
            borderTopLeftRadius: "10%",
            borderTopRightRadius: "10%",
          }}
        />
        <Card.Body className="p-3 row" style={{ minHeight: "380px", overflow: "hidden",  fontWeight:"800", alignContent:"start" }}>
          <h1 style={{ fontSize: "1.7rem", fontWeight:"800" }}>{project.title}</h1>
          
          <p style={{ fontSize: "1.3rem", 
          color: "gray", fontWeight:"800", 
          minHeight:"40px", paddingLeft:"6%", 
          paddingRight:"6%" }}>{project.description}
          </p>
         
          <div
            style={{
              maxHeight: expanded ? "none" : "80px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              transition: "max-height 0.3s ease-in-out",
            }}
          >
            <p className="px-5" style={{ fontSize: "1.3rem", color: "black" }}>{project.details}</p>
          </div>
          <div className="col">
          <button
            onClick={() => setExpanded(!expanded)}
            className="btn btn-link mt-2"
            style={{
            padding:"0",
            width:"fit-content",
            // backgroundColor:"red",
            height:"100%"}}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
          </div>

          <div className="mt-3" style={{alignItems: "center"}}>
            <a href={project.link} target="_blank" style={{ textDecoration: "none", fontSize: "1.2rem", width: "fit-content" }}>
              <button
                type="button"
                className="btn btn-dark pb-0"
                data-bs-toggle="button"
                style={{ scale: "0.8", 
                padding: "20px", 
                width: "fit-content" ,
                height:"100%",
                alignContent:"center",
                boxShadow:"black 5px 5px"

              }}
              >
                View Project
              </button>
            </a>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Projects;
