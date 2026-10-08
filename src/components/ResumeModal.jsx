import React from 'react';
import { X, FileText, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { resumePdfFile, triggerResumeDownload } from '../utils/downloadResume';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="modal-card glass-card resume-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3><FileText size={20} /> Resume Preview - {personalInfo.name}</h3>
          <div className="modal-actions">
            <button onClick={triggerResumeDownload} className="btn btn-primary btn-sm">
              <Download size={16} /> Download PDF
            </button>
            <button className="modal-close" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="modal-body pdf-body">
          <iframe src={resumePdfFile} title="Muhammad Faizan Resume PDF" className="pdf-iframe"></iframe>
        </div>
      </div>
    </div>
  );
}
