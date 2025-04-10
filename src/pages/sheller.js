import React, { useState } from 'react';

const Sheller = () => {
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [formData, setFormData] = useState({
    video: null,
    amount: '',
    description: '',
    location: '',
  });

  const boxes = [
    { id: 1, title: 'Box 1', details: 'Details about Box 1' },
    { id: 2, title: 'Box 2', details: 'Details about Box 2' },
    { id: 3, title: 'Box 3', details: 'Details about Box 3' },
    { id: 4, title: 'Box 4', details: 'Details about Box 4' },
  ];

  const handleAccountCreation = () => {
    setIsAccountCreated(true);
  };

  const handleBoxClick = (boxId) => {
    setSelectedBox(boxId);
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
    alert(`Data for Box ${selectedBox} sent for verification!`);
    console.log(formData);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {!isAccountCreated ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            padding: '20px',
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            borderRadius: '12px',
            margin: '20px',
          }}
        >
          <img
            src="https://stock.adobe.com/in/templates/futuristic-cyberpunk-titles/342462207" // Replace with your image URL
            alt="Manage Waste"
            style={{
              width: '300px',
              height: '200px',
              marginBottom: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
          <h1
            style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              color: '#333',
              textAlign: 'center',
              lineHeight: '1.5',
            }}
          >
            "Manage waste wisely, protect nature, save resources, inspire change, reduce pollution, embrace sustainability, build a cleaner, greener future—starting now!"
          </h1>
          <button
            onClick={handleAccountCreation}
            style={{
              padding: '12px 24px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.2rem',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Open Me
          </button>
        </div>
      ) : (
        <div>
          <header
            style={{
              textAlign: 'center',
              padding: '20px',
              backgroundColor: '#007BFF',
              color: '#fff',
              fontSize: '1.5rem',
            }}
          >
            Sheller Dashboard
          </header>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              padding: '20px',
            }}
          >
            {boxes.map((box) => (
              <div
                key={box.id}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '16px',
                  textAlign: 'center',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: selectedBox === box.id ? '#e0f7fa' : '#fff',
                }}
              >
                <h3>{box.title}</h3>
                <p>{box.details}</p>
                <button
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleBoxClick(box.id)}
                >
                  Choose
                </button>
              </div>
            ))}
          </div>
          {selectedBox && (
            <div
              style={{
                padding: '20px',
                backgroundColor: '#f1f1f1',
                marginTop: '20px',
                borderTop: '2px solid #ccc',
              }}
            >
              <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
                Upload Waste Details for {boxes.find((box) => box.id === selectedBox).title}
              </h2>
              <form
                onSubmit={handleSubmit}
                style={{
                  maxWidth: '600px',
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <label style={{ fontWeight: 'bold', color: '#555' }}>
                  Upload Video:
                  <input
                    type="file"
                    name="video"
                    accept="video/*"
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      marginTop: '5px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                    }}
                  />
                </label>
                <label style={{ fontWeight: 'bold', color: '#555' }}>
                  Amount of Waste (in kg):
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      marginTop: '5px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                    }}
                  />
                </label>
                <label style={{ fontWeight: 'bold', color: '#555' }}>
                  Description:
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      marginTop: '5px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                    }}
                  />
                </label>
                <label style={{ fontWeight: 'bold', color: '#555' }}>
                  Location:
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      marginTop: '5px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                    }}
                  />
                </label>
                <button
                  type="submit"
                  style={{
                    padding: '10px',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  Send for Verification
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sheller;