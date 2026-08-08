import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoImage } from "react-icons/io5";

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
		id: 8,
		title: "Wayfound",
		description: [
			"AI-powered travel planner with itinerary management"
		],
		details: `Wayfound is an AI-powered travel planner that centralizes bookings, maps, and itineraries into one system. It creates optimized, personalized trip plans based on time, budget, and preferences, adapts to real-time changes, and supports group travel with cost-splitting and collaboration tools.\n\nDemo: https://youtu.be/4BSKBTIMWoQ?si=AV4v9tcWLOF1t_A3\n\nTech Stack: React Native, TypeScript, NativeWind, Expo Go, Supabase, Figma`,
		image: "splash-2.png",
		link: "https://youtu.be/4BSKBTIMWoQ?si=AV4v9tcWLOF1t_A3",
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
		id: 6,
		title: "CinePals iOS App",
		description: [
			"SwiftUI movie search & social app"
		],
		details: `CinePals — iOS Application  (February 2025 - April 2025)\n• Created API endpoints to serve responsive movie search interface with debounced input handling for less API calls.\n• Implemented dynamic UI screens in Swift (cast, runtime, trailers) using data from The Movie Database (TMDb) API.\n• Integrated Firebase to fetch and dynamically render user profiles on client upon search and for a personalized UX, built with a team of student developers.\n\nTech Stack: Swift, SwiftUI, Firebase, Xcode, MVC principles, TMDb API`,
		image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
		link: "https://youtube.com/shorts/bJ6iVZQMlqU?si=AF3ASCg5gWDmHfPV",
	},
	{
		id: 9,
		title: "The Commit",
		description: [
			"Anonymous platform for student-athlete college sports experiences"
		],
		details: `The Commit is a cross-platform mobile application that gives student-athletes at college & universities across the nation a safe, anonymous way to share real experiences from inside college sports. Built for accountability and fairness, the platform prioritizes verification, moderation, and thoughtful review—so future athletes can make informed decisions.\n\nTech Stack: React Native, Expo Go, Supabase, Figma`,
		image: "placeholder-thecommit.png",
		link: "#",
	},
	{
		id: 4,
		title: "Geek Test",
		description: [
			"Book recommendation REST API"
		],
		details: `Users can discover new books and authors while sorting results based on various criteria. Features include retrieving books by genre, top sellers, and ratings, as well as updating book prices by publisher. Built using REST API principles, handling GET and PUT/PATCH requests to manage book data effectively.\n\nTech Stack: Java, Spring Boot, SQL, Postman`,
		image: "geek.avif",
		link: "https://github.com/bineta-d/Geek-Test",
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
		<section id="projects-section" style={{ background: '#FFE4E1', width: '100%', padding: '2rem 0 0 0', margin: 0, border: 'none' }}>
			<div className="projects-content pt-3 text-center" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
				<Container fluid style={{ backgroundColor: "#FFE4E1", display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1700px', margin: '0 auto', padding: '0.5rem 1rem 0 1rem' }}>
					<div className="title" style={{ width: '100%', textAlign: 'center', marginTop: '0.1rem' }}>
						<h2 className="projects-title fw-bold mb-2" style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", marginBottom: '1.2rem', textAlign: 'center', fontWeight: 600 }}>Projects</h2>
					</div>

					<Row className="project-row mx-0" style={{
						display: 'grid',
						gridTemplateColumns: `repeat(${columns}, 1fr)`,
						gap: '2.5rem',
						justifyContent: 'center',
						alignItems: 'stretch',
						maxWidth: '1400px',
						margin: '0',
						width: '100%',
						transition: 'transform 0.3s',
					}}>
						{projectData.map((project) => (
							<div key={project.id} style={{
								background: '#fff',
								borderRadius: '1.8rem',
								boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
								padding: '1.8rem 1.5rem 1.5rem 1.5rem',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'space-between',
								minHeight: 'auto',
								maxWidth: '400px',
								width: '100%',
								margin: '0 auto',
								boxSizing: 'border-box',
								transition: 'transform 0.2s, box-shadow 0.2s',
							}}
								onMouseEnter={e => {
									e.currentTarget.style.transform = 'translateY(-4px)';
									e.currentTarget.style.boxShadow = '0 8px 48px rgba(0,0,0,0.15)';
								}}
								onMouseLeave={e => {
									e.currentTarget.style.transform = 'translateY(0)';
									e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.10)';
								}}>
								{project.image === "placeholder-thecommit.png" ? (
									<div
										style={{
											width: '100%',
											height: '180px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											borderRadius: '1.2rem',
											marginBottom: '1rem',
											background: '#f5f5f5',
										}}
									>
										<IoImage size={64} color="#999" />
									</div>
								) : (
									<img
										src={project.image}
										alt={project.title}
										style={{
											width: '100%',
											height: '180px',
											objectFit: 'cover',
											borderRadius: '1.2rem',
											marginBottom: '1rem',
											background: '#f5f5f5',
										}}
									/>
								)}
								<h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.2rem', textAlign: 'center', width: '100%' }}>{project.title}</h2>
								{project.description && project.description[0] && (
									<div style={{
										fontSize: '0.95rem',
										color: '#444',
										fontWeight: 500,
										textAlign: 'center',
										marginBottom: '0.8rem',
										marginTop: '0.3rem',
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
										marginTop: 'auto',
										paddingTop: '0.8rem',
										flexDirection: 'row',
									}}
								>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-portfolio"
										style={{
											fontSize: '0.95rem',
											padding: '0.55rem 1.8rem',
											borderRadius: '1rem',
											fontWeight: 600,
											height: 'auto',
											minHeight: '2.4rem',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											background: '#111',
											color: '#fff',
											border: 'none',
											transition: 'background 0.2s',
											textDecoration: 'none',
											margin: 0,
											flex: '1 1 auto',
										}}
										onMouseOver={e => e.currentTarget.style.background = '#333'}
										onMouseOut={e => e.currentTarget.style.background = '#111'}
									>
										View
									</a>
									<Button
										style={{
											fontSize: '0.95rem',
											padding: '0.55rem 1.8rem',
											borderRadius: '1rem',
											fontWeight: 600,
											height: 'auto',
											minHeight: '2.4rem',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											background: '#111',
											color: '#fff',
											border: 'none',
											transition: 'background 0.2s',
											textDecoration: 'none',
											margin: 0,
											flex: '1 1 auto',
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
									padding: '3rem 2rem',
									width: '100%',
									maxWidth: '100%',
									boxSizing: 'border-box',
									textAlign: 'center',
									margin: '0 auto',
								}}>
									<img src={activeProject.image} alt={activeProject.title} style={{ width: '100%', maxWidth: '380px', height: '260px', objectFit: 'cover', borderRadius: '1.5rem', marginBottom: '1.5rem', background: '#f5f5f5' }} />
									{activeProject.details.split(/\n|\n/).map((line, idx) => {
										if (line.trim().toLowerCase().startsWith('live site:')) {
											const url = line.split('Live Site:')[1].trim();
											return (
												<div key={idx} style={{ marginTop: '1.2em', width: '100%', textAlign: 'center' }}>
													<strong>Live Site:</strong> <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', wordBreak: 'break-all', textDecoration: 'underline', cursor: 'pointer' }}>{url}</a>
												</div>
											);
										}
										if (line.trim().toLowerCase().startsWith('demo:')) {
											const url = line.split('Demo:')[1].trim();
											return (
												<div key={idx} style={{ marginTop: '1.2em', width: '100%', textAlign: 'center' }}>
													<strong>Demo:</strong> <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', wordBreak: 'break-all', textDecoration: 'underline', cursor: 'pointer' }}>{url}</a>
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

					<Row className="justify-content-center" style={{ marginTop: '2rem', paddingTop: '1.5rem', paddingBottom: '1.5rem', width: '100%', position: 'relative', zIndex: 10, background: '#FFE4E1' }}>
						<Col xs="auto">
							<a href="https://github.com/bineta-d" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
								<button type="button" className="btn btn-lg btn-portfolio text-center" data-bs-toggle="button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: 0, marginTop: 0, fontSize: '0.95rem', padding: '0.6rem 1.8rem', minHeight: '2.4rem' }}>
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
