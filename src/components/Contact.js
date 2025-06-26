import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const socials = [
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/bineta-diatta/",
		icon: process.env.PUBLIC_URL + "/linkedin-icon.webp",
		alt: "LinkedIn",
	},
	{
		name: "Email",
		url: "mailto:binetadiatta@gmail.com",
		icon: process.env.PUBLIC_URL + "/mail-icon.png",
		alt: "Email",
	},
];

const Contact = () => (
	<section
		id="contact"
		className="my-0"
		style={{
			background: "#F5FBFF",
			width: "100%",
			padding: "0 0 0.7rem 0",
			marginTop: 0,
		}}
	>
		<hr
			style={{
				border: "none",
				borderTop: "1.5px solid #e0e0e0",
				margin: 0,
				marginBottom: "0.7rem",
				width: "100%",
			}}
		/>
		<Container
			fluid
			style={{
				maxWidth: "100%",
				margin: 0,
				padding: "0.7rem 0 0 0",
				background: "transparent",
				borderRadius: 0,
				boxShadow: "none",
				display: "block",
			}}
		>
			<h2
				className="fw-bold mb-3"
				style={{
					fontSize: "2.5rem",
					textAlign: "center",
					marginBottom: "1.2rem",
					color: "#111",
				}}
			>
				Contact
			</h2>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					gap: "1.5rem",
					width: "100%",
				}}
			>
				<p
					style={{
						fontSize: "1.2rem",
						textAlign: "center",
						margin: 0,
						color: "#444",
						fontWeight: 500,
					}}
				>
					Feel free to reach out here:
				</p>
				<div
					style={{
						display: "flex",
						gap: "1.2rem",
						alignItems: "center",
						marginBottom: 0,
					}}
				>
					{socials.map((social) => (
						<a
							key={social.name}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: "50%",
								background: "transparent",
								boxShadow: "none",
								width: 44,
								height: 44,
								border: "none",
								padding: 0,
							}}
							aria-label={social.name}
						>
							<img
								src={social.icon}
								alt={social.alt}
								style={{
									width: 32,
									height: 32,
									objectFit: "contain",
								}}
							/>
						</a>
					))}
				</div>
			</div>
		</Container>
	</section>
);

export default Contact;