import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="section hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge glass-panel">Civil Engineering <span>&times;</span> Technology</div>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Aman Verma</span>
          </h1>
          <h2 className="hero-subtitle">
            Bridging the gap between the physical and digital world.
          </h2>
          <p className="hero-description">
            I'm a B.Tech Civil Engineering student with a strong foundation in modern software development. I specialize in applying technology—like AI, Python, and React—to solve complex engineering problems, from structural design to automated BOQ estimation.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={20} />
            </a>
            <a href="/AmanVermaResume.pdf" download className="btn btn-secondary glass-panel">
              Download Resume <Download size={20} />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-wrapper glass-panel">
            <img src="/MyPhoto.png" alt="Aman Verma" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
