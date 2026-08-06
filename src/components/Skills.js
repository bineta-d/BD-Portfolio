import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoGithub
} from "react-icons/io5";
import {
  SiMysql,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiSwift,
  SiNodedotjs,
  SiMongodb,
  SiFigma,
  SiDart
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "../App.css";

export const Skills = () => {
  const skills = [
    { icon: <FaJava size={80} color="#007396" />, name: "Java" },
    { icon: <IoLogoJavascript size={80} color="#f7df1e" />, name: "JavaScript" },
    { icon: <SiTypescript size={80} color="#3178c6" />, name: "TypeScript" },
    { icon: <IoLogoHtml5 size={80} color="#e34c26" />, name: "HTML" },
    { icon: <IoLogoCss3 size={80} color="#1572b6" />, name: "CSS" },
    { icon: <IoLogoReact size={80} color="#61dafb" />, name: "React JS" },
    { icon: <IoLogoReact size={80} color="#00d8ff" />, name: "React Native" },
    { icon: <SiSwift size={80} color="#fa7343" />, name: "SwiftUI" },
    { icon: <IoLogoGithub size={80} color="#333" />, name: "GitHub" },
    { icon: <SiNodedotjs size={80} color="#339933" />, name: "Node.js" },
    { icon: <SiMysql size={80} color="#00758f" />, name: "MySQL" },
    { icon: <SiTailwindcss size={80} color="#38bdf8" />, name: "Tailwind CSS" },
    { icon: <div className="flex items-center justify-center w-20 h-20 rounded bg-blue-400 text-white text-xs font-bold">Flutter</div>, name: "Flutter" },
    { icon: <SiFigma size={80} color="#F24E1E" />, name: "Figma" },
    { icon: <SiDart size={80} color="#0175C2" />, name: "Dart" },
  ];

  return (
    <div className="holder px-2 pb-0 bg-pink-100 py-8 px-4 m-0 border-none">
      <div className="skills-content" id="skills-content" className="py-4 m-0">
        <div className="title" id="skills-title">
          <h2 className="fw-bold text-4xl mb-6 font-semibold">Skills & Experience</h2>
        </div>
       
      </div>
      {/* Cycling Carousel */}
      <div className="skills-carousel-wrapper">
        <div className="skills-carousel">
          {[...skills, ...skills].map((skill, idx) => (
            <div className="skill-icon" key={idx}>
              {skill.icon}
              <span className="skill-label">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;