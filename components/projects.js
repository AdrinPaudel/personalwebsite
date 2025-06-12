"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProjectImage from './ProjectImage';
import './projects.css';

// --- Helper function to generate image paths ---
// This makes it much easier to manage large numbers of images.
const generateImagePaths = (projectId, count, extension = 'png') => {
    const paths = [];
    for (let i = 1; i <= count; i++) {
        paths.push(`/images/project${projectId}-${i}.${extension}`);
    }
    return paths;
};


// --- Updated Project Data ---
// Now using the helper function to create the image arrays.
const projectData = [
  {
    id: 1,
    title: 'Insurance Policy Comparison Web App',
    description: 'An ongoing project to develop a seamless web application using Next.js. The platform allows users to easily compare various life insurance policies, featuring a clean and user-friendly interface designed in Figma.',
    // Generates 18 image paths from project1-1.png to project1-18.png
    images: generateImagePaths(1, 18),
    tech: ['Next.js', 'Figma', 'JavaScript'],
    liveLink: '#',
    githubLink: 'https://github.com/AdrinPaudel',
  },
  {
    id: 2,
    title: 'UI/UX Design for Learn Smart AI',
    description: 'As a volunteer, I designed the complete user interface and experience for "Learn Smart," an AI-based learning platform. My focus was on creating engaging and intuitive web and mobile app designs.',
    // Generates 2 image paths for project 2
    images: generateImagePaths(2, 2),
    tech: ['Figma', 'UI/UX Design'],
    liveLink: '#',
    githubLink: '',
  },
  {
    id: 3,
    title: 'Online Electronics Shop Business Card',
    description: 'Designed a modern and clean business card for an online electronics shop specializing in Arduino and other components. The design focuses on brand identity and clear communication of contact details.',
    // Generates 2 image paths for project 3
    images: generateImagePaths(3, 2),
    tech: ['Graphic Design', 'Branding'],
    liveLink: '#',
    githubLink: '',
  },
  // Project 4 (Personal Portfolio) has been removed.
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to open the modal
  const handleCardClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to the first image
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  // Carousel navigation
  const showNextImage = (e) => {
    e.stopPropagation(); // Prevent modal from closing
    const newIndex = (currentImageIndex + 1) % selectedProject.images.length;
    setCurrentImageIndex(newIndex);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
    setCurrentImageIndex(newIndex);
  };
  
    const goToImage = (e, index) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);


  return (
    <section className="projects-container" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card" onClick={() => handleCardClick(project)}>
              <div className="project-image-container">
                  <ProjectImage src={project.images[0]} alt={`Screenshot of ${project.title}`} />
              </div>
              <div className="project-content">
                  <h3>{project.title}</h3>
                  <div className="project-tech-list">
                      {project.tech.map((tech, i) => ( <li key={i}>{tech}</li> ))}
                  </div>
                  <div className="click-to-expand">View Details</div>
              </div>
          </div>
        ))}
      </div>

      {/* Modal - Rendered when a project is selected */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="modal-close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Image Carousel */}
            <div className="modal-carousel">
                <div className="carousel-image-wrapper">
                    <ProjectImage src={selectedProject.images[currentImageIndex]} alt={`${selectedProject.title} image ${currentImageIndex + 1}`} />
                </div>
                {selectedProject.images.length > 1 && (
                    <>
                        <button onClick={showPrevImage} className="carousel-btn prev">&lt;</button>
                        <button onClick={showNextImage} className="carousel-btn next">&gt;</button>
                        <div className="carousel-dots">
                            {selectedProject.images.map((_, index) => (
                                <span key={index} className={`dot ${currentImageIndex === index ? 'active' : ''}`} onClick={(e) => goToImage(e, index)}></span>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Project Details */}
            <div className="modal-details">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <div className="project-links">
                    {selectedProject.liveLink && selectedProject.liveLink !== '#' && (
                        <Link href={selectedProject.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">View Project</Link>
                    )}
                    {selectedProject.githubLink && (
                        <Link href={selectedProject.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</Link>
                    )}
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
