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
		url: "mailto:bineta.diatta21@gmail.com",
		icon: process.env.PUBLIC_URL + "/mail-icon.png",
		alt: "Email",
	},
];

const Contact = () => (
	<section
		id="contact"
		className="my-0 bg-pink-100 w-full pb-3 mt-0"
	>
		<hr className="border-none border-t border-gray-300 m-0 mb-3 w-full" />
		<Container
			fluid
			className="max-w-full m-0 py-3 bg-transparent rounded-none shadow-none block"
		>
			<h2 className="fw-bold mb-3 text-3xl text-center mb-3 text-gray-900">
				Contact
			</h2>
			<div className="flex flex-row justify-center items-center gap-6 w-full contact-flex">
				<p className="text-xl text-center m-0 text-gray-600 font-medium">
					Feel free to reach out here:
				</p>
				<div className="flex gap-3 items-center mb-0 mt-0 contact-icons">
					{socials.map((social) => (
						<a
							key={social.name}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center rounded-full bg-transparent shadow-none border-none p-0"
							style={{
								width: 44,
								height: 44,
							}}
							aria-label={social.name}
						>
							<img
								src={social.icon}
								alt={social.alt}
								className="object-contain"
								style={{
									width: 32,
									height: 32,
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

/* Responsive styles for Contact section */
const style = document.createElement('style');
style.innerHTML = `
@media (max-width: 600px) {
  .contact-flex {
    flex-direction: column !important;
    gap: 0.7rem !important;
    align-items: center !important;
  }
  .contact-icons {
    margin-top: 0.7rem !important;
    flex-direction: row !important;
    justify-content: center !important;
  }
}
`;
document.head.appendChild(style);