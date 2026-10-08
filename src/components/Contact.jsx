import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Building, Copy, Check, User, Heading, MessageSquare, Loader2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ addToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    addToast(`${field} copied to clipboard!`, 'success');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      addToast(`Thank you, ${formData.name}! Message sent successfully.`, 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag"><Send size={14} /> Get In Touch</span>
          <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass-card">
            <h3>Let's Collaborate & Connect</h3>
            <p>
              Whether you are looking to discuss software development opportunities, full-stack engineering roles, technical projects, or university teaching collaborations, feel free to get in touch!
            </p>

            <div className="contact-methods">
              <div className="contact-item">
                <div className="item-icon"><Mail size={20} /></div>
                <div className="item-details">
                  <span className="item-label">Email Address</span>
                  <div className="copy-row">
                    <a href={`mailto:${personalInfo.email}`} className="item-value">{personalInfo.email}</a>
                    <button className="copy-btn" onClick={() => handleCopy(personalInfo.email, 'Email')} title="Copy Email">
                      {copiedField === 'Email' ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="item-icon"><Phone size={20} /></div>
                <div className="item-details">
                  <span className="item-label">Phone Number</span>
                  <div className="copy-row">
                    <a href={`tel:${personalInfo.phone}`} className="item-value">{personalInfo.phone}</a>
                    <button className="copy-btn" onClick={() => handleCopy(personalInfo.phone, 'Phone')} title="Copy Phone">
                      {copiedField === 'Phone' ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="item-icon"><MapPin size={20} /></div>
                <div className="item-details">
                  <span className="item-label">Location</span>
                  <span className="item-value">{personalInfo.location}</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="item-icon"><Building size={20} /></div>
                <div className="item-details">
                  <span className="item-label">Academic Affiliation</span>
                  <span className="item-value">Shah Abdul Latif University (SALU), Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <div className="input-icon-wrapper">
                  <User size={18} />
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Recruiter / Collaborator"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <div className="input-icon-wrapper">
                  <Mail size={18} />
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. contact@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <div className="input-icon-wrapper">
                  <Heading size={18} />
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="e.g. Software Engineering Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <div className="input-icon-wrapper textarea-wrapper">
                  <MessageSquare size={18} />
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span>Sending...</span> <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span> <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
