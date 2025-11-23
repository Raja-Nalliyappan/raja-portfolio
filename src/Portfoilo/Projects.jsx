import React from "react";
import "./Projects.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import portfolio from "../assets/projects/portfolio.png"
import ixbrl from "../assets/projects/iXBRL clean.png"

export const Projects = () => {
  const projectList = [
    {
      title: "My Personal Portfolio",
      tools: "React.jsx",
      desc: [
              "This website showcases my skills, projects, and experience in web development. Here, you can explore interactive projects built using modern technologies like React",
              "The portfolio is designed to be clean, responsive, and user-friendly, making it easy for anyone to navigate and learn about my work and achievements."
            ],  
      demo: "https://raja-nalliyappan.github.io/dev-portfolio",
      code: "https://github.com/Raja-Nalliyappan/dev-portfolio.git",
      img: portfolio,
    },
    {
      title: "iXBRL to XBRL Coverstion",
      tools: "HTML, CSS , JS",
      desc: [
              "This project automates the process of cleaning iXBRL documents by removing all iXBRL-specific tags while preserving the underlying HTML content.",
              "It converts complex iXBRL reports into clean, readable HTML files that are easier to work with for reporting and analysis. The solution ensures data integrity while simplifying the HTML structure, making it suitable for further processing or web presentation."
            ],
      demo: "https://raja-nalliyappan.github.io/XBRL---iXBRL-Covert",
      code: "https://github.com/Raja-Nalliyappan/XBRL---iXBRL-Covert.git",
      img: ixbrl,
    },
    // {
    //   title: "Project Three",
    //   desc: "Portfolio site with animations and modern responsive design.",
    //   demo: "#",
    //   code: "#",
    //   img: "https://via.placeholder.com/200x150.png?text=Web",
    // },
  ];

  return (
    <>
    {/* <Navbar /> */}

    <h2 className="projects-section-heading">My Projects</h2>

    <section className="projects-section">
      

      {projectList.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-info">
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.tools && <h6>{project.tools}</h6>}
              </div>

            {Array.isArray(project.desc) ? (
              project.desc.map((line, i) => <p key={i}>{line}</p>)
            ) : (
              <p>{project.desc}</p>
            )}

            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </div>
          </div>
          <div className="project-img">
            <img src={project.img} alt={project.title} />
          </div>
        </div>
      ))}
    </section>
    {/* <Footer /> */}
    </>
  );
};