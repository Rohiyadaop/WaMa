import React from 'react';
import '../style/admin.css';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();
  const submissions = [
    {
      id: 1,
      location: 'Dehradun',
      payment: 'UPI',
      mobile: '9876543210',
      info: 'Wants pickup service',
    },
    {
      id: 2,
      location: 'Haridwar',
      payment: 'Cash',
      mobile: '9123456780',
      info: 'Wants to drop waste at center',
    },
  ];

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>

      <div className="admin-grid">
        {submissions.map((entry) => (
          <div key={entry.id} className="admin-card">
            <h3>Submission #{entry.id}</h3>
            <p><strong>Location:</strong> {entry.location}</p>
            <p><strong>Payment:</strong> {entry.payment}</p>
            <p><strong>Mobile:</strong> {entry.mobile}</p>
            <p><strong>Info:</strong> {entry.info}</p>
          </div>
        ))}
      </div>
      <div className = "button-container"><button className = "back-to-home" onClick = {() => navigate('/')}>Back to Home</button></div>
    </div>
  );
};

export default Admin;
