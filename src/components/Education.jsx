import React from 'react';
import { GraduationCap, Award, Laptop, School, Star, Trophy, Percent } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag"><GraduationCap size={14} /> Academic Background</span>
          <h2 className="section-title">Education & <span className="gradient-text">Qualifications</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="education-grid">
          {education.map(edu => (
            <div key={edu.id} className={`edu-card glass-card ${edu.isHonors ? 'main-edu' : ''}`}>
              <div className="edu-header">
                <div className="edu-icon">
                  {edu.isHonors ? <Award size={24} /> : edu.id === 2 ? <Laptop size={24} /> : <School size={24} />}
                </div>
                <div className="edu-meta">
                  <span className="edu-badge">
                    {edu.isHonors ? <Trophy size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> : <Percent size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />}
                    {edu.score}
                  </span>
                  <span className="edu-years">{edu.period}</span>
                </div>
              </div>

              <h3 className="edu-title">{edu.degree}</h3>
              <h4 className="edu-institution">{edu.institution}</h4>
              <p className="edu-desc">{edu.description}</p>

              {edu.isHonors && (
                <div className="edu-highlights">
                  <div className="highlight-item"><Star size={16} style={{ color: 'var(--accent-amber)' }} /> Final CGPA: <strong>3.88 / 4.00</strong></div>
                  <div className="highlight-item"><Award size={16} style={{ color: 'var(--accent-emerald)' }} /> Highest Academic Distinction</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
