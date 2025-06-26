import React from "react";
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

const Experience = () => {
	return (
		<div className="holder" id="experience">
			<Container fluid className="experience-section p-5 text-center">
				<div className="title">
					<h2 className="experience-title fw-bold mb-3" style={{ fontSize: "4rem" }}>
						Experience
					</h2>
				</div>
				<div className="experience-list experience-list-multi">
					{experienceData.map((exp, idx) => (
						<div className="experience-card active" key={idx}>
							<div className="exp-header">
								<h3 className="exp-role">{exp.role}</h3>
								<span className="exp-company">{exp.company}</span>
							</div>
							<div className="exp-meta">
								<span className="exp-date">{exp.date}</span> | <span className="exp-location">{exp.location}</span>
							</div>
							<div className="exp-stack">
								{exp.company === "Comcast NBCUniversal" ? (
									<><strong>Concepts:</strong> {exp.concepts}</>
								) : null}
								{exp.company === "Dream in Green x INIT Build" ? (
									<><strong>Tech Stack:</strong> {exp.stack}</>
								) : null}
							</div>
							<ul className="exp-details">
								{exp.details.map((d, i) => (
									<li key={i}>{d}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Experience;
