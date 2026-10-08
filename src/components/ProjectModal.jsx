import React from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ marginBottom: '1.5rem' }}>
          <span className="project-badge web" style={{ position: 'static', marginBottom: '0.75rem', display: 'inline-block' }}>
            {project.categoryLabel}
          </span>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{project.title}</h2>
        </div>

        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            maxHeight: '350px',
            objectFit: 'cover',
            borderRadius: 'var(--radius-md)',
            marginBottom: '1.5rem',
            border: '1px solid var(--border-glass)'
          }}
        />

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>Project Overview</h3>
          <p style={{ lineHeight: 1.7, color: 'var(--text-muted)' }}>{project.description}</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>Key Features & Highlights</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                <CheckCircle size={16} style={{ position: 'absolute', left: 0, top: '4px', color: 'var(--accent-emerald)' }} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>Technologies Used</h3>
          <div className="tag-cloud">
            {project.tech.map((t, i) => (
              <span key={i} style={{ background: 'rgba(99, 102, 241, 0.15)', color: 'var(--accent-indigo)', fontWeight: 600, padding: '0.4rem 0.85rem', borderRadius: '8px' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
