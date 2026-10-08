import React from 'react';
import { Layers, Code, Database, Brain, Wrench } from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const getIcon = (name) => {
    switch (name) {
      case 'code': return <Code size={20} />;
      case 'database': return <Database size={20} />;
      case 'brain': return <Brain size={20} />;
      default: return <Wrench size={20} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag"><Layers size={14} /> Technical Matrix</span>
          <h2 className="section-title">Skills & <span className="gradient-text">Expertise</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {skills.map((cat, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-card-header">
                {getIcon(cat.icon)}
                <h3>{cat.category}</h3>
              </div>

              <div className="skill-items">
                {cat.items.map((item, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${item.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
