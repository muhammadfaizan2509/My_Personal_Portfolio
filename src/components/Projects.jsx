import React, { useState } from 'react';
import { Code, Expand, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects({ openProjectModal }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag"><Code size={14} /> Engineering Portfolio</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="section-divider"></div>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            All Projects ({projects.length})
          </button>
          <button className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`} onClick={() => setFilter('fullstack')}>
            Full-Stack & Web
          </button>
          <button className={`filter-btn ${filter === 'ai' ? 'active' : ''}`} onClick={() => setFilter('ai')}>
            AI & ML
          </button>
          <button className={`filter-btn ${filter === 'iot' ? 'active' : ''}`} onClick={() => setFilter('iot')}>
            IoT & Hardware
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <button className="btn btn-primary btn-sm" onClick={() => openProjectModal(project)}>
                    <Expand size={16} /> View Details
                  </button>
                </div>
                <span className={`project-badge ${project.category}`}>
                  {project.categoryLabel}
                </span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.summary}</p>

                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <button className="link-btn" onClick={() => openProjectModal(project)}>
                    Project Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
