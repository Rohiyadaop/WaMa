import React, { useState, useEffect } from 'react';
import '../style/sheller.css';
import axios from 'axios';

const wasteCategories = [
  {
    id: 1,
    title: 'Organic/Biodegradable Waste',
    description: 'Food scraps, garden waste, paper, etc. Can decompose naturally and be composted.',
    image: 'https://www.cheaperwaste.co.uk/wp-content/uploads/2020/02/Waste-Management-Cover-Photo.png',
  },
  {
    id: 2,
    title: 'Inorganic/Non-Biodegradable Waste',
    description: 'Plastics, metals, glass, etc. Does not break down easily in nature.',
    image: 'https://www.techyv.com/sites/default/files/Prevent-Contamination-of-the-Environment.png',
  },
  {
    id: 3,
    title: 'Hazardous Waste',
    description: 'Chemicals, batteries, medical waste, paints, etc. Harmful to humans, animals, and the environment if not handled properly.',
    image: 'https://www.umweltbundesamt.de/sites/default/files/medien/378/bilder/deponie_airart_fotolia_33491092_m.jpg',
  },
  {
    id: 4,
    title: 'E-Waste (Electronic Waste)',
    description: 'Old phones, computers, appliances, etc. Requires special recycling methods due to toxic materials.',
    image: 'https://backend.cosmoconsult.com/fileadmin/_processed_/a/a/csm_2.2.13_Waste_and_Recycling_2_e00df17210.jpg',
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

  // State for the auto-sliding carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % wasteCategories.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, []);

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

  // Function to handle the upload of video and other data
  const [video, setVideo] = useState(null);

  const handleChange1 = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('video', video);

    try {
      const res = await axios.post('http://localhost:8080/sheller', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sheller-container">
      <header className="sheller-header">Waste Categories</header>

      {/* Auto-Sliding Image Carousel */}
      <div className="carousel">
        {wasteCategories.map((waste, index) => (
          <div
            key={waste.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={waste.image} alt={waste.title} className="carousel-image" />
            <div className="carousel-caption">
              <h3>{waste.title}</h3>
              <p>{waste.description}</p>
            </div>
          </div>
        ))}
      </div>

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
              <input type="file" name="video" accept="video/*" onChange={handleChange1} required />
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
            <button type="submit" onClick={handleUpload}>Send for Verification</button>
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
