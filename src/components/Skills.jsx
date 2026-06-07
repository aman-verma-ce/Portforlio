import React from 'react';
import { Code2, PenTool, Layout, Terminal, Box } from 'lucide-react';
import './Skills.css';

const civilSkills = ['AutoCAD', 'Revit', 'STAAD Pro', 'ETABS', 'Optum G2', 'QGIS'];
const techSkills = ['Python', 'JavaScript', 'React', 'FastAPI', 'Vector Embeddings', 'Git'];
const managementSkills = ['MS Project', 'MS Excel', 'Team Management', 'Effective Communication'];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">
          <span>Technical Arsenal</span>
        </h2>
        
        <div className="skills-grid">
          <div className="skill-category glass-panel">
            <div className="skill-icon text-gradient">
              <PenTool size={32} />
            </div>
            <h3>Core Civil Software</h3>
            <ul className="skill-list">
              {civilSkills.map((skill, index) => (
                <li key={index}>
                  <Box size={14} className="list-icon" /> {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="skill-category glass-panel featured-category">
            <div className="skill-icon text-gradient">
              <Code2 size={32} />
            </div>
            <h3>Programming & Tech</h3>
            <ul className="skill-list">
              {techSkills.map((skill, index) => (
                <li key={index}>
                  <Terminal size={14} className="list-icon" /> {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="skill-category glass-panel">
            <div className="skill-icon text-gradient">
              <Layout size={32} />
            </div>
            <h3>Project Management</h3>
            <ul className="skill-list">
              {managementSkills.map((skill, index) => (
                <li key={index}>
                  <Box size={14} className="list-icon" /> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
