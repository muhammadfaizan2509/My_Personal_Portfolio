import React from 'react';
import { Briefcase, Building, CheckCircle, Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div class="container">
        <div className="section-header text-center">
          <span className="section-tag"><Briefcase size={14} /> Career Journey</span>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          {experience.map(exp => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <div>
                    <span className={`badge badge-${exp.badgeType}`}>{exp.status}</span>
                    <h3 className="timeline-title">{exp.role}</h3>
                    <h4 className="timeline-company">
                      <Building size={16} /> {exp.company} &bull; {exp.location}
                    </h4>
                  </div>
                  <div className="timeline-date">
                    <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> {exp.period}
                  </div>
                </div>

                {exp.subjects && (
                  <p style={{ fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
                    Subjects: {exp.subjects}
                  </p>
                )}

                <ul className="timeline-bullets">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>
                      <CheckCircle size={14} />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="tag-cloud">
                  {exp.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
