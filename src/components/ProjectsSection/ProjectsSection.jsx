import React from "react";
import "./ProjectsSection.css";


const projects = [
  {
    image: "image/web devlopment.jpg", 
    title: "CC Web Application Design",
    author: "Mehu DK",
    date: "11/09/21",
  },
  {
    image: "image/digital.jpg",
    title: "Camarix Website",
    author: "MeDinka",
    date: "12/09/21",
  },
  {
    image: "image/graphic design.jpg",
    title: "Sweetie Day Mobile App",
    author: "Mehu DK",
    date: "11/09/21",
  },
  {
    image: "image/web devlopment.jpg",
    title: "CC Web Application Design",
    author: "Mehu DK",
    date: "11/09/21",
  },
  {
    image: "image/digital.jpg",
    title: "Camarix Website",
    author: "MeDinka",
    date: "12/09/21",
  },
  {
    image: "image/graphic design.jpg",
    title: "Sweetie Day Mobile App",
    author: "Mehu DK",
    date: "11/09/21",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Recently Completed Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-author">By {project.author}</p>
            <p className="project-card-date">Completed on: {project.date}</p>
          </div>
        ))}
      </div>
      <button className="browse-button">Browse All →</button>
    </section>
  );
};

export default ProjectsSection;
