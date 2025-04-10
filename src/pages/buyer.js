import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';

export const Buyer = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: 1,
      image: require('../assets/reading.jpeg'),
      amount: '10 kg',
      price: '$50',
      location: 'New York',
    },
    {
      id: 2,
      image: require('../assets/listeaing.jpeg'),
      amount: '20 kg',
      price: '$90',
      location: 'Los Angeles',
    },
    {
      id: 3,
      image: require('../assets/reading.jpeg'),
      amount: '15 kg',
      price: '70 Rs',
      location: 'Chicago',
    },
    {
      id: 4,
      image: require('../assets/reading.jpeg'),
      amount: '25 kg',
      price: '120 Rs',
      location: 'Houston',
    },
    {
      id: 5,
      image: require('../assets/reading.jpeg'),
      amount: '25 kg',
      price: '120 Rs',
      location: 'Houston',
    },
    {
      id: 6,
      image: require('../assets/reading.jpeg'),
      amount: '25 kg',
      price: '120 Rs',
      location: 'Houston',
    },
    {
      id: 7,
      image: require('../assets/reading.jpeg'),
      amount: '25 kg',
      price: '120 Rs',
      location: 'Houston',
    },
  ];

  return (
    <>
      <header
        style={{
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          marginBottom: '20px',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>Buy the Waste</h1>
      </header>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '20px',
        }}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={section.image}
              alt={`Section ${section.id}`}
              style={{ width: '150px', height: '150px', marginBottom: '8px' }}
            />
            <h3>Amount: {section.amount}</h3>
            <p>Price: {section.price}</p>
            <p>Location: {section.location}</p>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/buyer/details')}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
      <div style={{ padding: '20px', backgroundColor: '#f1f1f1', marginTop: '20px' }}>
  <h3>Buyer Location</h3>
  <p>Location will be displayed here after submission.</p>
</div>
      <Footer />
    </>
  );
};

export default Buyer;