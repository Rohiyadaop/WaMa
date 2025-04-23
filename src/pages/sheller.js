import React, { useState } from 'react';
import '../style/sheller.css';

const wasteCategories = [
  {
    id: 1,
    title: 'Organic/Biodegradable Waste',
    description: 'Food scraps, garden waste, paper, etc. Can decompose naturally and be composted.',
  },
  {
    id: 2,
    title: 'Inorganic/Non-Biodegradable Waste',
    description: 'Plastics, metals, glass, etc. Does not break down easily in nature.',
  },
  {
    id: 3,
    title: 'Hazardous Waste',
    description: 'Chemicals, batteries, medical waste, paints, etc. Harmful to humans, animals, and the environment if not handled properly.',
  },
  {
    id: 4,
    title: 'E-Waste (Electronic Waste)',
    description: 'Old phones, computers, appliances, etc. Requires special recycling methods due to toxic materials.',
  },
];

const Sheller = () => {
  const [selectedWaste, setSelectedWaste] = useState(null);
  const [formData, setFormData] = useState({
    video: null,
    amount: '',
    description: '',
    location: '',
  });
  const [history, setHistory] = useState([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const handleWasteClick = (wasteId) => {
    setSelectedWaste(wasteId);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'video') {
      setFormData({ ...formData, video: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const wasteTitle = wasteCategories.find((w) => w.id === selectedWaste).title;
    const newHistoryItem = {
      title: wasteTitle,
      status: 'Pending Verification',
      date: new Date().toLocaleString(),
    };
    setHistory([...history, newHistoryItem]);
    alert(`Data for ${wasteTitle} sent for verification!`);
    console.log(formData);
  };

  const toggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  return (
    <div className="sheller-container">
      <header className="sheller-header">Waste Categories</header>
      <div className="waste-grid">
        {wasteCategories.map((waste) => (
          <div
            key={waste.id}
            className={`waste-card ${selectedWaste === waste.id ? 'selected' : ''}`}
            onClick={() => handleWasteClick(waste.id)}
          >
            <h3 className="waste-title">{waste.title}</h3>
            <p className="waste-description">{waste.description}</p>
          </div>
        ))}
      </div>
      {selectedWaste && (
        <div className="form-container">
          <h2>Upload Waste Details for {wasteCategories.find((w) => w.id === selectedWaste).title}</h2>
          <form onSubmit={handleSubmit} className="waste-form">
            <label>
              Upload Video:
              <input type="file" name="video" accept="video/*" onChange={handleChange} required />
            </label>
            <label>
              Amount of Waste (in kg):
              <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
            </label>
            <label>
              Description:
              <textarea name="description" value={formData.description} onChange={handleChange} rows="4" required />
            </label>
            <label>
              Location:
              <input type="text" name="location" value={formData.location} onChange={handleChange} required />
            </label>
            <button type="submit">Send for Verification</button>
          </form>
        </div>
      )}
      <button className="toggle-history-button" onClick={toggleHistory}>
        {isHistoryOpen ? 'Close History' : 'View History'}
      </button>
      <div className={`history-section ${isHistoryOpen ? 'open' : ''}`}>
        <h2>Verification History</h2>
        {history.length === 0 ? (
          <p>No history available.</p>
        ) : (
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> - {item.status} (Submitted on: {item.date})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sheller;