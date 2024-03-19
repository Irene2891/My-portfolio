import React from 'react'
import './work.css'
import projectImage1 from '../../assets/images/image1.jpg'
import projectImage2 from '../../assets/images/image2.jpg'
import { allIcons } from '../../assets/icons/icons'
const {GitHub}=allIcons;


const projects = [
    {
      id: 1,
      title: 'Data-table',
      description: 'This enables users to add task based on the priority, status and date added. It allows users to keep track of tasks done and those yet to be completed',
      technologies: ['React', 'Node.js', 'CSS'],
      image: projectImage2,
      githubLink: 'https://github.com/Irene2891/Data-table.git',
      Icon: GitHub,
    },
    {
      id: 2,
      title: 'Currency Converter',
      description: 'It conerts FX based on daily rates',
      technologies: ['RestAPI', 'React.js', 'JavaScript'],
      image: projectImage1,
      githubLink: '/',
    },
    {
        id: 2,
        title: 'Currency Converter',
        description: 'It conerts FX based on daily rates',
        technologies: ['RestAPI', 'React.js', 'JavaScript'],
        image: projectImage1,
        githubLink: '/',
      },
      {
        id: 2,
        title: 'Currency Converter',
        description: 'It conerts FX based on daily rates',
        technologies: ['RestAPI', 'React.js', 'JavaScript'],
        image: projectImage1,
        githubLink: '/',
      },
  ];
const Work = () => {
  return (
    <div className="work-container">
      <h2>Projects that I have built</h2>
      <p>Apart from my professional projects, these are the projects I built in my spare time</p>
      <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project">
            <img src={project.image} alt={project.title} />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies used:</strong> {project.technologies.join(', ')}</p>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <GitHub  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work





