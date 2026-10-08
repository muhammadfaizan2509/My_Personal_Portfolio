import React, { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import { triggerResumeDownload } from './utils/downloadResume';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [activeProject, setActiveProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    addToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
  };

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  return (
    <div className="app-root">
      <ParticleCanvas theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} openResumeModal={() => setIsResumeOpen(true)} />
      
      <main>
        <Hero openResumeModal={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <Education />
        <Projects openProjectModal={(p) => setActiveProject(p)} />
        <Skills />
        
        {/* Resume Banner */}
        <section className="section resume-banner-section">
          <div className="container">
            <div className="resume-banner glass-card">
              <div className="banner-content">
                <div className="banner-icon">
                  <span style={{ fontSize: '1.8rem' }}>📄</span>
                </div>
                <div>
                  <h3>Curriculum Vitae / Resume</h3>
                  <p>Download or view the official PDF resume of Muhammad Faizan (BS CS, CGPA 3.88/4.00).</p>
                </div>
              </div>
              <div className="banner-actions">
                <button className="btn btn-primary" onClick={() => setIsResumeOpen(true)}>
                  Quick Preview
                </button>
                <button className="btn btn-glass" onClick={triggerResumeDownload}>
                  Direct Download
                </button>
              </div>
            </div>
          </div>
        </section>

        <Contact addToast={addToast} />
      </main>

      <Footer />

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <Toast toasts={toasts} />
    </div>
  );
}
