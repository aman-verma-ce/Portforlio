import React from 'react';
import { Mail, Briefcase, Code } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section glass-panel">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="nav-logo text-gradient">
              Aman<span>Verma</span>
            </h2>
            <p className="footer-desc">
              Civil Engineering & Technology Innovator
            </p>
          </div>
          
          <div className="footer-links">
            <a href="mailto:aman.verma.civil2003@gmail.com" className="social-link" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/aman-verma-ce" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <Briefcase size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aman Verma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
