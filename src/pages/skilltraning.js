import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/skilltraining.css'; // Import the CSS file for styling

const Skilltraining = () => {
  const navigate = useNavigate();

  const skills = [
    { id: 1, title: 'Web Development', description: 'Learn HTML, CSS, JavaScript, and React.' },
    { id: 2, title: 'Data Science', description: 'Master Python, Machine Learning, and AI.' },
    { id: 3, title: 'Graphic Design', description: 'Explore Photoshop, Illustrator, and Figma.' },
    { id: 4, title: 'Digital Marketing', description: 'Understand SEO, Social Media, and Ads.' },
  ];

  return (
    <div className="skilltraining-container">
      <header className="skilltraining-header">
        <h1>Skill Training</h1>
        <p>Enhance your skills with our expert-led training programs.</p>
      </header>
      <div className="skills-section">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-block">
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
            <button onClick={() => navigate(`/classes/${skill.id}`)}>Go to Classes</button>
          </div>
        ))}
      </div>
      <div className="live-class-section">
        <button onClick={() => navigate('/LiveClass')} className="live-class-button">
          Join Live Class
        </button>
      </div>
      <footer className="skilltraining-footer">
        <h3>About Our Classes</h3>
        <p>
          Our classes are designed to provide hands-on experience and practical knowledge. Join us to
          learn from industry experts and take your skills to the next level.
        </p>
      </footer>
    </div>
  );
};

export default Skilltraining;

