import React, { useState, useEffect } from 'react';
import '../style/sheller.css';

const wasteCategories = [
  {
    id: 1,
    title: 'Organic/Biodegradable Waste',
    description: 'Food scraps, garden waste, paper, etc. Can decompose naturally and be composted.',
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=eVMa27X8&id=7614CF1B20F32FC3D80291F27D91995FFB1DF17C&thid=OIP.eVMa27X8xZjK3pscVOQc8gHaEK&mediaurl=https%3a%2f%2fwww.cheaperwaste.co.uk%2fwp-content%2fuploads%2f2020%2f02%2fWaste-Management-Cover-Photo.png&exph=1080&expw=1920&q=waste+url&simid=608047119686645080&FORM=IRPRST&ck=257A97B1E7D769E0AE224EA8A821EB68&selectedIndex=4&itb=0', 
  },
  {
    id: 2,
    title: 'Inorganic/Non-Biodegradable Waste',
    description: 'Plastics, metals, glass, etc. Does not break down easily in nature.',
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=V11oPbch&id=227DA3B33F216F4627DA1C7EE4CDF45480E8B329&thid=OIP.V11oPbch4iOoJUVbnifSRwHaDt&mediaurl=https%3a%2f%2fwww.techyv.com%2fsites%2fdefault%2f2023%2f04%2fusers%2fRajen%2fPrevent-Contamination-of-the-Environment.png&exph=300&expw=600&q=waste+url&simid=607991044619918906&FORM=IRPRST&ck=274A10A782CB931F37F55F54E51DCEC7&selectedIndex=1&itb=0',
  },
  {
    id: 3,
    title: 'Hazardous Waste',
    description: 'Chemicals, batteries, medical waste, paints, etc. Harmful to humans, animals, and the environment if not handled properly.',
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=2mziTjyd&id=7B809A0B5687FB28ACD7493DE4C1970E9A536C6E&thid=OIP.2mziTjydlV4mb4rniMUKsgHaE8&mediaurl=https%3a%2f%2fwww.umweltbundesamt.de%2fsites%2fdefault%2ffiles%2fmedien%2f378%2fbilder%2fdeponie_airart_fotolia_33491092_m.jpg&exph=1126&expw=1688&q=waste+url&simid=607992230006573123&FORM=IRPRST&ck=655B4C75E59FBCA7CDD738573CD82060&selectedIndex=16&itb=0',
  },
  {
    id: 4,
    title: 'E-Waste (Electronic Waste)',
    description: 'Old phones, computers, appliances, etc. Requires special recycling methods due to toxic materials.',
    image: 'https://www.bing.com/images/search?view=detailV2&ccid=6QKPRhtG&id=4A3E9E40C09E2DF0AB0159905D97B2F309FBE8F9&thid=OIP.6QKPRhtGcfMTm0PQ8yQnKAHaEL&mediaurl=https%3a%2f%2fwww.cosmoconsult.com%2f_next%2fimage%3furl%3dhttps%3a%252F%252Fbackend.cosmoconsult.com%252Ffileadmin%252F_processed_%252Fa%252Fa%252Fcsm_2.2.13_Waste_and_Recycling_2_e00df17210.jpg%26w%3d3840%26q%3d75&exph=1986&expw=3524&q=waste+url&simid=608000222886193855&FORM=IRPRST&ck=BBCF80EDF05AA6149CE2B46B76F0A726&selectedIndex=29&itb=0',
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