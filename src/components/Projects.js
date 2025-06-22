import React, { useState } from "react";
import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = [
	{
		id: 1,
		title: "Recyclepedia MDC",
		description: "Sustainability web app for Miami-Dade County.",
		details: "Developed as part of the web development team, this project provides users with a resource to learn about recycling best practices and sustainability efforts. Built using modern web technologies to deliver an engaging and informative experience.",
		image: "dig-logo.png",
		link: "https://github.com/skyler-hall/Recyclepediamdc",
	},
	{
		id: 2,
		title: "Harmony Haven",
		description: "Student-athlete resource website.",
		details: "Built a dynamic web application using HTML & CSS with resources to guide student-athletes in topics like financial literacy, mental health & professional development. Incorporated interactive elements and animations using JavaScript to enhance user engagement and navigation experience.",
		image: "sport.jpeg",
		link: "https://github.com/bineta-d/The-Harmony-Haven",
	},
	{
		id: 3,
		title: "Financial Lit App",
		description: "Mobile-friendly financial literacy platform.",
		details: "Beginner-friendly financial information that's accessible to all ages, covering topics like credit, taxes, etc. The goal is to offer clear and comprehensive resources to help users build financial literacy and make informed decisions. Built using React, HTML, CSS, JavaScript, and Bootstrap for a responsive and user-friendly interface.",
		image: "fin-lit.jpeg",
		link: "https://github.com/bineta-d/Financial-Literacy-App",
	},
	{
		id: 4,
		title: "Geek Test",
		description: "Book recommendation REST API.",
		details: "Users can discover new books and authors while sorting results based on various criteria. Features include retrieving books by genre, top sellers, and ratings, as well as updating book prices by publisher. Built using REST API principles, handling GET and PUT/PATCH requests to manage book data effectively.",
		image: "geek.avif",
		link: "https://github.com/bineta-d/Geek-Test",
	},
	{
		id: 5,
		title: "Library Management App",
		description: "React-based library management system.",
		details: "A React app for managing a book library, featuring detailed book info, responsive design, and modern UI elements. Integrates with a RESTful API via Axios and uses React Context for state management. Includes custom SVG icons and CSS Grid/Flexbox for layout.",
		image: "library-pic.jpeg",
		link: "https://github.com/bineta-d/library-management-app",
	},
];

export const Projects = () => {
	const [showModal, setShowModal] = useState(false);
	const [activeProject, setActiveProject] = useState(null);

	const handleShowModal = (project) => {
		setActiveProject(project);
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
		setActiveProject(null);
	};

	// Responsive grid columns
	const getGridTemplateColumns = () => {
		if (typeof window !== 'undefined' && window.innerWidth < 900) {
			return '1fr';
		}
		return 'repeat(3, 1fr)';
	};

	return (
		<div className="holder" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<div className="projects-content pt-3 text-center" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Container fluid style={{ backgroundColor: "#F5FBFF", display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="p-5 ">
					<div className="title" style={{ width: '100%', textAlign: 'center' }}>
						<h2 className="projects-title fw-bold mb-3" style={{ fontSize: "4rem" }}>Projects</h2>
						<p className="mb-0">Listed below are several personal and academic projects:</p>
					</div>

					<Row className="project-row m-5 mt-0" style={{
						display: 'grid',
						gridTemplateColumns: getGridTemplateColumns(),
						gap: '2.5rem',
						justifyContent: 'center',
						alignItems: 'center',
						maxWidth: '1600px',
						margin: '0 auto',
						width: '100%',
					}}>
						{projectData.map((project) => (
							<div key={project.id} style={{
								background: '#fff',
								borderRadius: '2.5rem',
								boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
								padding: '2.5rem 2rem 2rem 2rem',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'space-between',
								minHeight: '520px',
								maxWidth: '480px',
								width: window.innerWidth < 900 ? '90vw' : '100%',
								margin: '0 auto',
								boxSizing: 'border-box',
								transition: 'transform 0.2s',
							}}>
								<img
									src={project.image}
									alt={project.title}
									style={{
										width: '100%',
										maxWidth: '340px',
										height: '220px',
										objectFit: 'cover',
										borderRadius: '1.5rem',
										marginBottom: '1.2rem',
										background: '#f5f5f5',
									}}
								/>
								<p style={{ fontSize: '1.1rem', color: '#555', fontWeight: 500, marginBottom: '1.2rem', textAlign: 'center', minHeight: '1.5em' }}>{project.description}</p>
								<h2 style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '1.2rem', textAlign: 'center', width: '100%' }}>{project.title}</h2>
								<div
									style={{
										display: 'flex',
										gap: '0.5rem',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										marginTop: 'auto',
										flexDirection: window.innerWidth < 900 ? 'column' : 'row',
									}}
								>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-portfolio"
										style={{
											fontSize: '1.2rem',
											padding: '0.7rem 2.2rem',
											borderRadius: '1.2rem',
											fontWeight: 600,
											height: '52px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											background: '#111',
											color: '#fff',
											border: 'none',
											transition: 'background 0.2s',
											textDecoration: 'none',
											margin: 0,
										}}
										onMouseOver={e => e.currentTarget.style.background = '#333'}
										onMouseOut={e => e.currentTarget.style.background = '#111'}
									>
										View
									</a>
									<Button
										style={{
											fontSize: '1.2rem',
											padding: '0.7rem 2.2rem',
											borderRadius: '1.2rem',
											fontWeight: 600,
											height: '52px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											background: '#111',
											color: '#fff',
											border: 'none',
											transition: 'background 0.2s',
											textDecoration: 'none',
											margin: 0,
											width: window.innerWidth < 900 ? '65vw' : undefined,
											maxWidth: window.innerWidth < 900 ? '65vw' : undefined,
										}}
										onClick={() => handleShowModal(project)}
										onMouseOver={e => e.currentTarget.style.background = '#333'}
										onMouseOut={e => e.currentTarget.style.background = '#111'}
									>
										Details
									</Button>
								</div>
							</div>
						))}
					</Row>

					<Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
						{activeProject && (
							<>
								<Modal.Header closeButton>
									<Modal.Title style={{ fontSize: '2.2rem', fontWeight: 700 }}>{activeProject.title}</Modal.Title>
								</Modal.Header>
								<Modal.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.5rem' }}>
									<img src={activeProject.image} alt={activeProject.title} style={{ width: '100%', maxWidth: '420px', height: '260px', objectFit: 'cover', borderRadius: '1.5rem', marginBottom: '2rem', background: '#f5f5f5' }} />
									<p style={{ fontSize: '1.25rem', color: '#333', textAlign: 'center', marginBottom: 0 }}>{activeProject.details}</p>
								</Modal.Body>
							</>
						)}
					</Modal>

					<Row className="justify-content-center mt-5">
						<Col xs="auto">
							<a href="https://github.com/bineta-d" style={{ textDecoration: "none" }}>
								<button type="button" className="btn btn-lg btn-portfolio text-center" data-bs-toggle="button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
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

export default Projects;
