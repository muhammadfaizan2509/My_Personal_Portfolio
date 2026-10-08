import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpeg';

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <a href="#hero" className="nav-logo">
              <img src={profileImg} alt={personalInfo.name} className="nav-logo-img" />
              <span className="logo-text">{personalInfo.name}<span className="dot">.</span></span>
            </a>
            <p style={{ marginTop: '0.5rem' }}>{personalInfo.title}</p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-copy">
            <p>&copy; 2026 {personalInfo.name}. All rights reserved. Built with React.js & modern CSS.</p>
          </div>
        </div>
      </footer>

      <button
        className={`back-to-top ${showTopBtn ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
