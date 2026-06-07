import React from 'react';
import { ExternalLink, Database, Server, Cpu } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">
          <span>Featured Project</span>
        </h2>
        
        <div className="project-card glass-panel">
          <div className="project-content">
            <div className="project-header">
              <h3 className="project-title">AI-Powered System for Rate Extraction from DSR</h3>
              <p className="project-subtitle text-gradient">BOQ Estimation & Costing System</p>
            </div>
            
            <p className="project-description">
              An automated full-stack software application engineered to extract and compute rates directly from the Delhi Schedule of Rates (DSR), streamlining the Bill of Quantities (BOQ) estimation process for civil engineering projects. 
              <br/><br/>
              By integrating semantic search capabilities, this system significantly reduces manual table lookups and human error, transforming traditional estimation workflows. Authored a review paper on the project methodology; technical paper accepted for presentation in an engineering conference.
            </p>
            
            <div className="tech-stack">
              <div className="tech-tag glass-panel"><Server size={14} /> FastAPI</div>
              <div className="tech-tag glass-panel"><Database size={14} /> Vector Embeddings</div>
              <div className="tech-tag glass-panel"><Cpu size={14} /> Python</div>
              <div className="tech-tag glass-panel">React</div>
              <div className="tech-tag glass-panel">MS Excel</div>
            </div>
          </div>
          
          <div className="project-visual">
            <div className="abstract-graphic">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
              <div className="data-node node-1"></div>
              <div className="data-node node-2"></div>
              <div className="data-node node-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
