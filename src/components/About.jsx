import React from 'react';
import { Target, GraduationCap, Award, MapPin, Mail, Code2, Server, Brain, Shield, Cpu, Database, MessageSquare, Users } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag"><UserIcon /> Professional Summary</span>
          <h2 className="section-title">About <span className="gradient-text">{personalInfo.name}</span></h2>
          <div className="section-divider"></div>
        </div>

        <div class="about-grid">
          <div className="about-card glass-card">
            <div className="card-icon"><Target size={24} /></div>
            <h3 style={{ marginTop: '0.75rem' }}>Software Engineer & Educator</h3>
            <p style={{ marginTop: '0.75rem' }}>
              I am a Computer Science graduate with a <strong>Bachelor of Science in Computer Science</strong> from <strong>Shah Abdul Latif University</strong>, graduating with a high honors <strong>CGPA of 3.88/4.00</strong>.
            </p>
            <p>
              I possess expertise in full-stack development, including front-end (<strong>React, JavaScript, HTML5/CSS3, Bootstrap</strong>), back-end (<strong>Node.js, Express.js, Python</strong>), and database architecture (<strong>PostgreSQL, MongoDB, MySQL</strong>). I am also experienced in building responsive RESTful APIs, IoT microcontrollers (Arduino), and Machine Learning models (Image Processing, NLP, Neural Networks).
            </p>
            <p>
              Along with software engineering, I serve as a <strong>Lecturer</strong> at Shah Abdul Latif University (Ghotki Campus) and a <strong>Course Instructor</strong> at NAVTTC, delivering lectures on OOP, AI, Network Security, and Web Technologies.
            </p>
          </div>

          <div className="about-info-cards">
            <div className="info-card glass-card">
              <div className="info-icon"><GraduationCap size={24} /></div>
              <div className="info-body">
                <span className="info-title">Degree</span>
                <span className="info-value">BS Computer Science (CGPA 3.88/4.0)</span>
                <span className="info-sub">Shah Abdul Latif University, Khairpur</span>
              </div>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon"><Award size={24} /></div>
              <div className="info-body">
                <span className="info-title">Diploma</span>
                <span className="info-value">DIT (Percentage 79.2%)</span>
                <span className="info-sub">Trade Testing Board Sindh</span>
              </div>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon"><MapPin size={24} /></div>
              <div className="info-body">
                <span class="info-title">Location</span>
                <span className="info-value">{personalInfo.location}</span>
                <span className="info-sub">Open to On-site & Remote Roles</span>
              </div>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon"><Mail size={24} /></div>
              <div className="info-body">
                <span className="info-title">Email</span>
                <span className="info-value">{personalInfo.email}</span>
                <span className="info-sub">Direct Channel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Competencies */}
        <div className="competencies-container">
          <h3 className="text-center mb-4">Technical Domain & Tools</h3>
          <div className="competencies-grid">
            <div className="comp-badge"><Code2 size={16} /> React.js</div>
            <div className="comp-badge"><Server size={16} /> Node.js / Express</div>
            <div className="comp-badge"><Code2 size={16} /> Python 3</div>
            <div className="comp-badge"><Database size={16} /> PostgreSQL & MongoDB</div>
            <div className="comp-badge"><Server size={16} /> Firebase</div>
            <div className="comp-badge"><Brain size={16} /> Machine Learning & NLP</div>
            <div className="comp-badge"><Shield size={16} /> Image Processing</div>
            <div className="comp-badge"><Cpu size={16} /> Arduino IoT</div>
            <div className="comp-badge"><MessageSquare size={16} /> Academic Teaching</div>
            <div className="comp-badge"><Users size={16} /> Agile Teamwork</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UserIcon() {
  return <span style={{ marginRight: '4px' }}>👤</span>;
}
