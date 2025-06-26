import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = [
	{
		id: 1,
		title: "Recyclepedia MDC",
		description: [
			"Promotes Miami-Dade's zero waste initiative across 35 municipalities",
		],
		details: `Recyclepedia MDC is a comprehensive platform promoting Miami-Dade's zero waste initiative across all 35 municipalities. It provides residents with location-specific recycling guidelines, 
		pickup schedules, and drop-off centers to increase accessibility to recycling services throughout the county. The platform educates students (13-18) and residents on sustainable waste practices through interactive guides, event calendars, and games.
		 By consolidating recycling information for each municipality in one place, it removes barriers to proper waste disposal and helps achieve the county's sustainability goals.\n\nLive Site: https://recyclepediamdc.com/en\n\nTech Stack: JavaScript, Next.js, Tailwind CSS, Firebase, React.js` ,
		image: "dig-logo.png",
		link: "https://github.com/skyler-hall/Recyclepediamdc",
	},
	{
		id: 6,
		title: "CinePals iOS App",
		description: [
			"SwiftUI movie search & social app"
		],
		details: `CinePals — iOS Application  (February 2025 - April 2025)\n• Created API endpoints to serve responsive movie search interface with debounced input handling for less API calls.\n• Implemented dynamic UI screens in Swift (cast, runtime, trailers) using data from The Movie Database (TMDb) API.\n• Integrated Firebase to fetch and dynamically render user profiles on client upon search and for a personalized UX, built with a team of student developers.\n\nTech Stack: Swift, SwiftUI, Firebase, Xcode, MVC principles, TMDb API` ,
		image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
		link: "https://youtube.com/shorts/bJ6iVZQMlqU?si=AF3ASCg5gWDmHfPV",
	},
	{
		id: 7,
		title: "TERRA",
		description: [
			"Centralized real estate solution app for West Africa"
		],
		details: `TERRA is an in-progress cross-platform mobile application designed to provide a centralized platform for real estate solutions tailored to West Africa. The app facilitates both short-term and long-term rental solutions, buying and selling of properties, and tenant management, all in one place. TERRA aims to streamline the real estate process for individuals and businesses, making it easier to find, list, and manage properties securely and efficiently.\n\nTech Stack: React Native, MongoDB, TypeScript, Firebase Auth, Google Maps API, more`,
		image: "granddakar.jpeg",
		link: "https://github.com/bineta-d/TERRA-Mobile",
	},
	{
		id: 4,
		title: "Geek Test",
		description: [
			"Book recommendation REST API"
		],
		details: `Users can discover new books and authors while sorting results based on various criteria. Features include retrieving books by genre, top sellers, and ratings, as well as updating book prices by publisher. Built using REST API principles, handling GET and PUT/PATCH requests to manage book data effectively.\n\nTech Stack: Java, Spring Boot, SQL, Postman` ,
		image: "geek.avif",
		link: "https://github.com/bineta-d/Geek-Test",
	},
	{
		id: 2,
		title: "Harmony Haven",
		description: [
			"Student-athlete resource website"
		],
		details: `Built a dynamic web application using HTML & CSS with resources to guide student-athletes in topics like financial literacy, mental health & professional development. Incorporated interactive elements and animations using JavaScript to enhance user engagement and navigation experience.\n\nTech Stack: HTML, CSS, JavaScript, Bootstrap, Animation Libraries` ,
		image: "sport.jpeg",
		link: "https://github.com/bineta-d/The-Harmony-Haven",
	},
	{
		id: 3,
		title: "Financial Lit App",
		description: [
			"Mobile-friendly financial literacy platform"
		],
		details: `Beginner-friendly financial information that's accessible to all ages, covering topics like credit, taxes, etc. The goal is to offer clear and comprehensive resources to help users build financial literacy and make informed decisions. Built using React, HTML, CSS, JavaScript, and Bootstrap for a responsive and user-friendly interface.\n\nTech Stack: React, JavaScript, HTML, CSS, Bootstrap` ,
		image: "fin-lit.jpeg",
		link: "https://github.com/bineta-d/Financial-Literacy-App",
	},
	{
		id: 5,
		title: "Library Management App",
		description: [
			"React-based library management system"
		],
		details: `A React app for managing a book library, featuring detailed book info, responsive design, and modern UI elements. Integrates with a RESTful API via Axios and uses React Context for state management. Includes custom SVG icons and CSS Grid/Flexbox for layout.\n\nTech Stack: React, JavaScript, CSS, HTML, DraftbitBooks API` ,
		image: "library-pic.jpeg",
		link: "https://github.com/bineta-d/library-management-app",
	},
];

export const Projects = () => {
	const [showModal, setShowModal] = useState(false);
	const [activeProject, setActiveProject] = useState(null);
	const [columns, setColumns] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 700) setColumns(1);
			else if (window.innerWidth < 1100) setColumns(2);
			else setColumns(3);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleShowModal = (project) => {
		setActiveProject(project);
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
		setActiveProject(null);
	};

	return (
		<section id="projects-section" style={{ background: '#F5FBFF', width: '100%', padding: '0 0 1rem 0' }}>
			<div className="projects-content pt-3 text-center" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Container fluid style={{ backgroundColor: "#F5FBFF", display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1700px', margin: '0 auto', padding: '0.5rem 1rem 2.5rem 1rem' }}>
					<div className="title" style={{ width: '100%', textAlign: 'center', marginTop: '0.1rem' }}>
						<h2 className="projects-title fw-bold mb-2" style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", marginBottom: '0.5rem', textAlign: 'center' }}>Projects</h2>
						<p className="mb-0" >Listed below are several personal, academic and club projects:</p>
					</div>

					<Row className="project-row mx-0" style={{
						display: 'grid',
						gridTemplateColumns: `repeat(${columns}, 1fr)`,
						gap: '2.5rem',
						justifyContent: 'center',
						alignItems: 'stretch',
						maxWidth: '1400px',
						margin: '0 auto 0 auto',
						width: '90%',
						transform: 'scale(0.92)',
						transition: 'transform 0.3s',
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
								width: '100%',
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
								<h2 style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '0.3rem', textAlign: 'center', width: '100%' }}>{project.title}</h2>
								{project.description && project.description[0] && (
									<div style={{
										fontSize: '1.13rem',
										color: '#444',
										fontWeight: 500,
										textAlign: 'center',
										marginBottom: '0.25rem',
										marginTop: '-0.2rem',
										minHeight: '1.5em',
										lineHeight: 1.3,
										width: '100%'
									}}>
										{project.description[0]}
									</div>
								)}
								<div
									style={{
										display: 'flex',
										gap: '0.5rem',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										marginTop: '0.5rem',
										flexDirection: columns === 1 ? 'column' : 'row',
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
											width: columns === 1 ? '65vw' : undefined,
											maxWidth: columns === 1 ? '65vw' : undefined,
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

					<Modal show={showModal} onHide={handleCloseModal} size="lg" centered dialogClassName="custom-modal-responsive">
						{activeProject && (
							<>
								<Modal.Header closeButton>
									<Modal.Title style={{ fontSize: '2.2rem', fontWeight: 700 }}>{activeProject.title}</Modal.Title>
								</Modal.Header>
								<Modal.Body style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									padding: columns === 1 ? '4vw 2vw' : '5vw 6vw',
									width: '100%',
									maxWidth: '100%',
									boxSizing: 'border-box',
									textAlign: 'center',
									margin: '0 auto',
								}}>
									<img src={activeProject.image} alt={activeProject.title} style={{ width: columns === 1 ? '90vw' : '100%', maxWidth: columns === 1 ? '320px' : '420px', height: columns === 1 ? '160px' : '260px', objectFit: 'cover', borderRadius: '1.5rem', marginBottom: '1.2rem', background: '#f5f5f5' }} />
									{activeProject.details.split(/\n|\n/).map((line, idx) => {
										if (line.trim().toLowerCase().startsWith('live site:')) {
											const url = line.split('Live Site:')[1].trim();
											return (
												<div key={idx} style={{ marginTop: '1.2em', width: '100%', textAlign: 'center' }}>
													<strong>Live Site:</strong> <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', wordBreak: 'break-all' }}>{url}</a>
												</div>
											);
										}
										if (line.trim().toLowerCase().startsWith('tech stack:')) {
											return <div key={idx} style={{ fontWeight: 'bold', marginTop: '1.2em', width: '100%', textAlign: 'center' }}>{line}</div>;
										}
										return <p key={idx} style={{ fontSize: columns === 1 ? '1rem' : '1.25rem', color: '#333', textAlign: 'center', marginBottom: 0 }}>{line}</p>;
									})}
								</Modal.Body>
							</>
						)}
					</Modal>

					<Row className="justify-content-center mt-0">
						<Col xs="auto">
							<a href="https://github.com/bineta-d" style={{ textDecoration: "none" }} target="_blank">
								<button type="button" className="btn btn-lg btn-portfolio text-center" data-bs-toggle="button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
									View My Github
								</button>
							</a>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	);
};

export default Projects;
