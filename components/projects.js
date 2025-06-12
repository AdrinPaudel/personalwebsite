"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProjectImage from './ProjectImage';
import './projects.css';

// Helper function to generate image paths.
const generateImagePaths = (projectId, count, extension = 'png') => {
    return Array.from({ length: count }, (_, i) => `/images/project${projectId}-${i + 1}.${extension}`);
};

// Full project data with new categories.
const allProjects = [
  {
    id: 1,
    title: 'Insurance Policy Comparison Web App "Insurance-Sathi"',
    description: 'A comprehensive web application built with Next.js that allows users to compare life insurance policies. Features a clean, user-friendly interface designed in Figma to simplify complex information.',
    images: generateImagePaths(1, 18),
    tech: ['React', 'AI', 'Vercel'],
    liveLink: '#',
    githubLink: 'https://github.com/AdrinPaudel/FinalWebsite',
    category: 'WebDev',
  },
  {
    id: 4,
    title: 'Ant Crawl : Prank App',
    description: 'A fun and harmless prank application for Android, developed using Flutter. The app overlays a realistic, animated ant that walks across the screen over any other application, creating a surprising and amusing user experience.',
    images: generateImagePaths(4, 2),
    tech: ['Flutter', 'Cart', 'Android'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.adrin.antapp',
    githubLink: 'https://github.com/AdrinPaudel/antapp',
    category: 'AppDev',
  },
  {
    id: 2,
    title: 'UI/UX Design "Learn Smart"',
    description: 'I designed the initial user interface and experience for "Learn Smart", an AI-based learning platform. My focus was on creating engaging and intuitive web and mobile app designs.',
    images: generateImagePaths(2, 2),
    tech: ['Figma', 'UI/UX Design', 'Wireframing'],
    liveLink: '#',
    githubLink: '',
    category: 'UI/UX',
  },
   {
    id: 5,
    title: 'Game Testing "Project Prison"',
    description: 'Performed comprehensive Quality Assurance testing for the indie game "Project Prison" on Steam. Identified, documented, and reported bugs related to gameplay, UI, and performance, contributing to a more stable final release.',
    images: generateImagePaths(5, 3),
    tech: ['Testing', 'Bug Reporting', 'Steam'],
    liveLink: '#',
    githubLink: '',
    category: 'Testing',
  },
  {
    id: 6,
    title: 'Business Card "Tech-Nova"',
    description: 'Made Business card for online first Electronics shop "Tech-Nova" selling electronics like Arduino,Sensors,etv',
    images: generateImagePaths(3, 2),
    tech: ['Graphics', 'Photoshop'],
    liveLink: '#',
    githubLink: '',
    category: 'UI/UX',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeProject, setActiveProject] = useState(allProjects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'WebDev', 'AppDev', 'UI/UX', 'Testing', 'Content'];

  // Effect to filter projects when category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

  // Effect to update the featured project when the filtered list changes
  useEffect(() => {
    setActiveProject(filteredProjects[0]);
  }, [filteredProjects]);
  
  // Effect to reset image carousel when the featured project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeProject]);
  
  // Handlers
  const handleProjectSelect = (project) => setActiveProject(project);
  const showNextImage = () => setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
  const showPrevImage = () => setCurrentImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);

  return (
    <section className="projects-container" id="projects">
      <h2 className="section-title">Projects & Works Details</h2>
      
      {/* Functional Filter Buttons */}
      <div className="filter-buttons">
        {categories.map(category => (
          <button 
            key={category} 
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 && activeProject ? (
        <div className="projects-layout">
          {/* Featured Project Column (Left) */}
          <div className="featured-project">
            <div className="featured-carousel">
              <div className="carousel-image-wrapper">
                <ProjectImage 
                  src={activeProject.images[currentImageIndex]} 
                  alt={`${activeProject.title} screenshot ${currentImageIndex + 1}`} 
                />
              </div>
              {activeProject.images.length > 1 && (
                <>
                  <button onClick={showPrevImage} className="carousel-btn prev">&lt;</button>
                  <button onClick={showNextImage} className="carousel-btn next">&gt;</button>
                </>
              )}
            </div>
            <div className="featured-details">
              <h3>{activeProject.title}</h3>
              <ul className="project-tech-list">
                  {activeProject.tech.map((tech, i) => ( <li key={i}>{tech}</li> ))}
              </ul>
              <p>{activeProject.description}</p>
              <div className="project-links">
                {activeProject.liveLink && activeProject.liveLink !== '#' && (
                    <Link href={activeProject.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">View Live</Link>
                )}
                {activeProject.githubLink && (
                    <Link href={activeProject.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</Link>
                )}
              </div>
            </div>
          </div>

          {/* Project List Column (Right) */}
          <div className="project-list">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className={`project-list-item ${project.id === activeProject.id ? 'active' : ''}`}
                onClick={() => handleProjectSelect(project)}
              >
                <img src={project.images[0]} alt={project.title} className="list-item-image" />
                <h4 className="list-item-title">{project.title}</h4>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="no-projects-message">
          <p>No projects found in this category.</p>
        </div>
      )}
    </section>
  );
};

export default Projects;