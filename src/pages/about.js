import React from 'react';
import '../style/about.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Our Company</h1>
        <p>We are committed to managing waste responsibly and sustainably.</p>
      </header>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a cleaner and greener future by effectively managing waste and
          promoting sustainability. We aim to reduce pollution, conserve resources, and inspire
          communities to embrace eco-friendly practices.
        </p>
      </section>
      <section className="about-section">
        <h2>Company Name</h2>
        <p><strong>WaMa (Waste Management Solutions)</strong></p>
      </section>
      <section className="about-section">
        <h2>Our Branches</h2>
        <ul>
          <li>Mumbai Branch</li>
          <li>Bangalore Branch</li>
          <li>Kolkata Branch</li>
          <li>New Delhi Branch</li>
        </ul>
      </section>
      <section className="about-section">
        <h2>How We Manage Waste</h2>
        <p>
          We use advanced technologies and innovative strategies to manage waste efficiently. Our
          process includes waste segregation, recycling, and safe disposal to minimize environmental
          impact. We also collaborate with local communities to raise awareness about waste
          management practices.
        </p>
      </section>
      <section className="about-section">
        <h2>Amount Management</h2>
        <p>
          We track and manage the amount of waste collected and processed through our state-of-the-art
          systems. This ensures transparency and accountability in our operations, helping us achieve
          our sustainability goals.
        </p>
      </section>
      <footer className="about-footer">
        <p>&copy; 2025 WaMa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;