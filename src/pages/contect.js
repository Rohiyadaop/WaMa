import React from 'react';
import '../style/contect.css'; // Import the CSS file for styling

const Contect = () => {
  return (
    <div className="contect-container">
      <h1 className="contect-header">Contact Us</h1>
      <div className="contect-info">
        <p><strong>Email:</strong> <a href="mailto:rohityadav@gmail.com">rohityadav@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:9532593289">9532593289</a></p>
        <p><strong>Location:</strong> 123 Main Street, New Delhi, India</p>
        <p><strong>Branches:</strong></p>
        <ul>
          <li>Mumbai Branch</li>
          <li>Bangalore Branch</li>
          <li>Kolkata Branch</li>
        </ul>
        <p><strong>Working Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
};

export default Contect;