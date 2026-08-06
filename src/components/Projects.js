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
		id: 9,
		title: "The Commit",
		description: [
			"Anonymous platform for student-athlete college sports experiences"
		],
		details: `The Commit is a cross-platform mobile application that gives student-athletes at college & universities across the nation a safe, anonymous way to share real experiences from inside college sports. Built for accountability and fairness, the platform prioritizes verification, moderation, and thoughtful review—so future athletes can make informed decisions.\n\nTech Stack: React Native, Expo Go, Supabase, Figma`,
		image: "placeholder-thecommit.png",
		link: "#",
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
		<section id="projects-section" className="bg-pink-100 w-full py-8 px-0 m-0 border-none">
			<div className="projects-content pt-3 text-center flex flex-col items-center w-full m-0">
				<Container fluid className="bg-pink-100 flex flex-col items-center max-w-7xl m-auto px-4">
					<div className="title w-full text-center mt-0">
						<h2 className="projects-title fw-bold mb-2 text-4xl font-semibold text-center">Projects</h2>
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
							<div key={project.id} className="bg-white rounded-3xl shadow-lg p-7 flex flex-col items-center justify-between min-h-auto max-w-md w-full mx-auto box-border transition-all"
							onMouseEnter={e => {
								e.currentTarget.style.transform = 'translateY(-4px)';
								e.currentTarget.style.boxShadow = '0 8px 48px rgba(0,0,0,0.15)';
							}}
							onMouseLeave={e => {
								e.currentTarget.style.transform = 'translateY(0)';
								e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.10)';
							}}>
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-44 object-cover rounded-xl mb-4 bg-gray-100"
								/>
								<h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.2rem', textAlign: 'center', width: '100%' }}>{project.title}</h2>
								<h2 className="text-2xl font-bold mb-1 text-center w-full">{project.title}</h2>
								{project.description && project.description[0] && (
									<div className="text-sm text-gray-600 font-medium text-center mb-3 mt-1 leading-tight w-full">
										{project.description[0]}
									</div>
								)}
								<div
									className="flex gap-2 justify-center items-center w-full mt-auto pt-2 flex-wrap"
								>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-portfolio text-sm px-7 py-2 rounded-2xl font-semibold h-auto min-h-10 flex items-center justify-center bg-gray-900 text-white border-none m-0 hover:bg-gray-700"
									>
										View
									</a>
									<Button
										className="text-sm px-7 py-2 rounded-2xl font-semibold h-auto min-h-10 flex items-center justify-center bg-gray-900 text-white border-none m-0 hover:bg-gray-700"
										onClick={() => handleShowModal(project)}
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
									<Modal.Title className="text-4xl font-bold">{activeProject.title}</Modal.Title>
								</Modal.Header>
								<Modal.Body className="flex flex-col items-center justify-center p-12 w-full max-w-full box-border text-center mx-auto">
									<img src={activeProject.image} alt={activeProject.title} className="w-full max-w-96 h-64 object-cover rounded-2xl mb-6 bg-gray-100" />
									{activeProject.details.split(/\n|\n/).map((line, idx) => {
										if (line.trim().toLowerCase().startsWith('live site:')) {
											const url = line.split('Live Site:')[1].trim();
											return (
												<div key={idx} className="mt-3 w-full text-center">
													<strong>Live Site:</strong> <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 break-all">{url}</a>
												</div>
											);
										}
										if (line.trim().toLowerCase().startsWith('tech stack:')) {
											return <div key={idx} className="font-bold mt-3 w-full text-center">{line}</div>;
										}
										return <p key={idx} className={`text-base text-gray-700 text-center ${columns === 1 ? '' : 'lg:text-xl'} mb-0`}>{line}</p>;
									})}
								</Modal.Body>
							</>
						)}
					</Modal>

					<Row className="justify-content-center mt-8 pt-6 pb-6 w-full relative z-10 bg-pink-100">
						<Col xs="auto">
							<a href="https://github.com/bineta-d" className="no-underline" target="_blank" rel="noopener noreferrer">
								<button type="button" className="btn btn-lg btn-portfolio text-center flex justify-center items-center mb-0 mt-0 text-sm px-7 py-1 min-h-10">
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
