import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Experience.css";

const experienceData = [
	{
		company: "Comcast NBCUniversal",
		role: "ERP Technology Intern - iOS Software QA",
		date: "May 2025 – current",
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

const ArrowIcon = ({ direction, onClick }) => (
	<span
		className={`exp-arrow-icon ${direction}`}
		onClick={onClick}
		role="button"
		tabIndex={0}
		aria-label={
			direction === "left" ? "Previous experience" : "Next experience"
		}
		style={{ userSelect: "none" }}
	>
		{direction === "left" ? (
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20 8L12 16L20 24"
					stroke="#222"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		) : (
			<svg
				width="32"
			height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 8L20 16L12 24"
					stroke="#222"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)}
	</span>
);

const Experience = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const intervalRef = useRef();

	useEffect(() => {
		if (!isPaused) {
			intervalRef.current = setInterval(() => {
				setActiveIndex((prev) => (prev + 1) % experienceData.length);
			}, 9000); 
		} else if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		return () => clearInterval(intervalRef.current);
	}, [isPaused]);

	const handlePrev = () => {
		setActiveIndex((prev) =>
			prev === 0 ? experienceData.length - 1 : prev - 1
		);
	};

	const handleNext = () => {
		setActiveIndex((prev) =>
			prev === experienceData.length - 1 ? 0 : prev + 1
		);
	};

	const exp = experienceData[activeIndex];

	return (
		<div className="holder" id="experience">
			<Container fluid className="experience-section p-5 text-center">
				<div className="title">
					<h2
						className="experience-title fw-bold mb-3"
						style={{ fontSize: "4rem" }}
					>
						Experience
					</h2>
				</div>
				<div
					className="experience-slider"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
					onTouchStart={() => setIsPaused(true)}
					onTouchEnd={() => setIsPaused(false)}
				>
					<ArrowIcon direction="left" onClick={handlePrev} />
					<div className="experience-list">
						<div
							className="experience-card active"
							style={{
								maxWidth: "700px",
								minHeight: "420px",
								height: "480px",
								padding: "2.5rem 2rem 2rem 2rem",
								margin: "0 auto",
								background: "#fff",
								borderRadius: "2.5rem",
								boxShadow: "0 4px 32px rgba(0,0,0,0.1)",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								position: "relative",
								transition: "all 0.7s cubic-bezier(.77,0,.18,1)",
								overflow: "hidden",
							}}
						>
							<div className="exp-header">
								<h3 className="exp-role">{exp.role}</h3>
								<span className="exp-company">{exp.company}</span>
							</div>
							<div className="exp-meta">
								<span className="exp-date">{exp.date}</span> |{" "}
								<span className="exp-location">{exp.location}</span>
							</div>
							<div className="exp-stack">
								{exp.company === "Comcast NBCUniversal" ? (
									<><strong>Concepts:</strong> {exp.concepts}</>
								) : null}
								{exp.company === "Dream in Green x INIT Build" ? (
									<><strong>Tech Stack:</strong> {exp.stack}</>
								) : null}
							</div>
							<ul
								className="exp-details"
								style={{
									overflowY: "auto",
									maxHeight: "160px",
									width: "100%",
									margin: 0,
									padding: 0,
									listStyle: "inside",
									textAlign: "left",
								}}
							>
								{exp.details.map((d, i) => (
									<li key={i}>{d}</li>
								))}
							</ul>
						</div>
					</div>
					<ArrowIcon direction="right" onClick={handleNext} />
				</div>
			</Container>
		</div>
	);
};

export default Experience;
