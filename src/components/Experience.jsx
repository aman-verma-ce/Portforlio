import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    title: 'Training in Artificial Intelligence and Machine Learning',
    company: 'Basics and Generative AI',
    date: 'Recent',
    icon: <GraduationCap />,
    description: 'Acquired foundational knowledge in AI/ML paradigms and explored modern generative AI capabilities, strengthening the bridge between traditional engineering and modern tech.'
  },
  {
    id: 2,
    title: 'Structural Design Trainee',
    company: 'STAAD Pro Technical Training',
    date: 'Sep 2025 - Sep 2025',
    icon: <Briefcase />,
    description: 'Performed comprehensive structural analysis and load testing simulations using STAAD Pro. Gained intermediate proficiency in evaluating structural integrity.'
  },
  {
    id: 3,
    title: 'AutoCAD Intern',
    company: 'Shri Balaji Infotech Experts',
    date: 'Sep 2024 - Sep 2024',
    icon: <Briefcase />,
    description: 'Acquired hands-on experience in drafting and detailing civil engineering layouts. Improved drafting efficiency and applied theoretical design parameters to floor plans.'
  },
  {
    id: 4,
    title: 'Industrial Visits & Academic Exposure',
    company: 'RSAC, L&T, Adani Cement, UltraTech',
    date: 'Ongoing',
    icon: <MapPin />,
    description: 'Attended 14 specialized guest lectures and visited major construction sites to bridge the gap between curriculum and practical industry execution.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">
          <span>Experience & Training</span>
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker glass-panel">
                {exp.icon}
              </div>
              <div className="timeline-content glass-panel">
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company text-gradient">{exp.company}</h4>
                <p className="timeline-date">{exp.date}</p>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
