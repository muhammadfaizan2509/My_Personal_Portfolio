import React, { useState, useEffect } from 'react';
import { User, Briefcase, GraduationCap, Code, Layers, Mail, Moon, Sun, FileText, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpeg';

export default function Navbar({ theme, toggleTheme, openResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'experience', 'education', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#hero" className="nav-logo">
            <img src={profileImg} alt={personalInfo.name} className="nav-logo-img" />
            <span className="logo-text">Faizan<span className="dot">.</span></span>
          </a>

          <nav className="nav-links">
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}><User size={16} /> About</a>
            <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}><Briefcase size={16} /> Experience</a>
            <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}><GraduationCap size={16} /> Education</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}><Code size={16} /> Projects</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}><Layers size={16} /> Skills</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}><Mail size={16} /> Contact</a>
          </nav>

          <div className="nav-actions">
            <button className="icon-btn" onClick={toggleTheme} title="Toggle Dark/Light Theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="btn btn-outline btn-sm" onClick={openResumeModal}>
              <FileText size={16} /> Resume
            </button>
            <button className="mobile-toggle" onClick={() => setMobileOpen(true)}>
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src={profileImg} alt={personalInfo.name} className="nav-logo-img" />
            <span className="logo-text">Faizan<span className="dot">.</span></span>
          </div>
          <button className="icon-btn" onClick={() => setMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <div className="mobile-menu-links">
          <a href="#about" className="mobile-link" onClick={() => setMobileOpen(false)}><User size={18} /> About Me</a>
          <a href="#experience" className="mobile-link" onClick={() => setMobileOpen(false)}><Briefcase size={18} /> Work Experience</a>
          <a href="#education" className="mobile-link" onClick={() => setMobileOpen(false)}><GraduationCap size={18} /> Education</a>
          <a href="#projects" className="mobile-link" onClick={() => setMobileOpen(false)}><Code size={18} /> Featured Projects</a>
          <a href="#skills" className="mobile-link" onClick={() => setMobileOpen(false)}><Layers size={18} /> Skills & Expertise</a>
          <a href="#contact" className="mobile-link" onClick={() => setMobileOpen(false)}><Mail size={18} /> Contact Me</a>
          <button className="btn btn-primary w-full" onClick={() => { setMobileOpen(false); openResumeModal(); }}>
            <FileText size={16} /> View Resume PDF
          </button>
        </div>
      </div>
    </>
  );
}
