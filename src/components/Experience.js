import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Experience.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const experienceData = [
	{
		company: "Comcast NBCUniversal",
		role: "CORE Technology Associate",
		date: "June 2026 –Current",
		location: "Philadelphia, PA",
		team: "Global Design Engineering",
		concepts: "High-level prototyping, Cross-platform app development, Flutter, UI/UX Design Game development, Godot, CI/CD, Software testing",
		details: [
			"Develop cross-platform tools and high-level prototypes to test and drive product shipment for the company.",
			"Collaborate with global team of engineers to design and produce engineering solutions for TV, mobile, and web apps & libraries for internal and production use.",
		],
	},
	{
		company: "Comcast NBCUniversal",
		role: "ERP Technology Intern - iOS Software QA",
		date: "May 2025 – August 2025",
		location: "Philadelphia, PA",
		concepts: "QA, Regression Testing, iOS, VoLTE, RCS/SMS/MMS, Test Automation",
		details: [
			"Tested mobile iOS telecom features (VoLTE, messaging, handovers) and performed regression testing.",
			"Identified and reported bugs, validated mobile releases with Apple teams.",
			"Strengthened mobile testing and deployment stability for pre-release software.",
		],
	},
	{
		company: "Dream in Green x INIT Build",
		role: "Student Web Developer",
		date: "Oct 2024 – Dec 2024",
		location: "Miami, FL",
		stack: "JavaScript, Next.js, Tailwind CSS, Firebase, React.js",
		details: [
			"Enhanced Recyclepedia app and website to educate communities on recycling.",
			"Built features for location-based recycling info and community engagement.",
			"Improved UI/UX for accessibility, multilingual support, and gamification.",
		],
	},
];

const Experience = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderRef = useRef(null);

	const handlePrevious = () => {
		setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === experienceData.length - 1 ? experienceData.length - 1 : prev + 1));
	};

	const handleTouchStart = (e) => {
		const touchStart = e.touches[0].clientX;
		const handleTouchEnd = (e) => {
			const touchEnd = e.changedTouches[0].clientX;
			const swipeDistance = touchStart - touchEnd;
			if (Math.abs(swipeDistance) > 50) {
				if (swipeDistance > 0) {
					handleNext();
				} else {
					handlePrevious();
				}
			}
			sliderRef.current.removeEventListener('touchend', handleTouchEnd);
		};
		sliderRef.current.addEventListener('touchend', handleTouchEnd);
	};

	return (
		<div className="holder" id="experience" style={{ margin: 0, padding: 0 }}>
			<Container fluid className="experience-section p-5 text-center" style={{ padding: '2rem 2rem !important', margin: 0, maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
				<div className="title">
					<h2 className="experience-title fw-bold mb-3" style={{ fontSize: "2.8rem", fontWeight: 600 }}>
						Experience
					</h2>
				</div>
				<div className="experience-slider" ref={sliderRef} onTouchStart={handleTouchStart}>
					<div className="exp-arrow-icon left" onClick={handlePrevious}>
						<IoChevronBack size={32} color="#232323" />
					</div>
					<div className="experience-list experience-list-multi" style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: '1rem', paddingRight: '1rem' }}>
						{experienceData.map((exp, idx) => (
							<div className={`experience-card ${idx === currentIndex ? 'active' : ''}`} key={idx} style={{ display: idx === currentIndex ? 'flex' : 'none' }}>
								<div className="exp-header">
									<h3 className="exp-role">{exp.role}</h3>
									<span className="exp-company">{exp.company}</span>
								</div>
								<div className="exp-meta">
									<span className="exp-date">{exp.date}</span> | <span className="exp-location">{exp.location}</span>
									{exp.team && <><br /><span className="exp-team" style={{ fontSize: '0.95rem', color: '#555' }}><strong>Team:</strong> {exp.team}</span></>}
								</div>
								<div className="exp-stack">
									{exp.concepts && (
										<><strong>Concepts:</strong> {exp.concepts}</>
									)}
									{exp.stack && (
										<><strong>Tech Stack:</strong> {exp.stack}</>
									)}
								</div>
								<ul className="exp-details">
									{exp.details.map((d, i) => (
										<li key={i}>{d}</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="exp-arrow-icon right" onClick={handleNext}>
						<IoChevronForward size={32} color="#232323" />
					</div>
				</div>
				<div className="experience-dots">
					{experienceData.map((_, idx) => (
						<div
							key={idx}
							className={`experience-dot ${idx === currentIndex ? 'active' : ''}`}
							onClick={() => setCurrentIndex(idx)}
						/>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Experience;
