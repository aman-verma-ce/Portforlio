import React from 'react';
import { BookOpen, GraduationCap, Award } from 'lucide-react';
import './Education.css';

const educationList = [
  {
    id: 1,
    degree: 'B.Tech in Civil Engineering',
    institution: 'Shri Ramswaroop Memorial College of Engineering & Management',
    date: '2023 - Present',
    percentage: '80.40%',
    icon: <BookOpen size={20} />,
  },
  {
    id: 2,
    degree: 'Class XII (Indian School Certificate)',
    institution: 'Modern Academy',
    date: 'Year of Passing 2022',
    percentage: '91.00%',
    icon: <GraduationCap size={20} />,
  },
  {
    id: 3,
    degree: 'Class X (Board of Secondary Education)',
    institution: 'City Montessori School (CMS) Gomti Nagar Phase 1',
    date: 'Year of Passing 2019',
    percentage: '87.40%',
    icon: <Award size={20} />,
  }
];

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">
          <span>Education</span>
        </h2>
        <div className="edu-timeline">
          {educationList.map((edu) => (
            <div key={edu.id} className="edu-timeline-item">
              <div className="edu-timeline-marker glass-panel">
                {edu.icon}
              </div>
              <div className="edu-timeline-content glass-panel">
                <h3 className="edu-timeline-title">{edu.degree}</h3>
                <h4 className="edu-timeline-institution text-gradient">{edu.institution}</h4>
                <div className="edu-meta">
                  <span className="edu-timeline-date">{edu.date}</span>
                  <span className="edu-percentage badge glass-panel">Percentage: {edu.percentage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
