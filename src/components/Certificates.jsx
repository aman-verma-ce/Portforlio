import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: 'ACI Certificate',
      issuer: 'American Concrete Institute',
      file: '/ACI certificate.pdf.pdf',
    },
    {
      title: 'IEI Certificate',
      issuer: 'Institution of Engineers (India)',
      file: '/IEI Certificate.pdf',
    },
    {
      title: 'ASCE Certificate',
      issuer: 'American Society of Civil Engineers',
      file: '/certificate.pdf.pdf',
    }
  ];

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <h2 className="section-title">
          <span>Certifications</span>
        </h2>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card glass-panel">
              <div className="cert-icon-container">
                <Award size={32} className="cert-icon" />
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer text-gradient">{cert.issuer}</p>
              <a href={cert.file} target="_blank" rel="noopener noreferrer" className="cert-link glass-panel">
                View Certificate <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
