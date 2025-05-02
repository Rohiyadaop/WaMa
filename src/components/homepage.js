import React, { useState, useEffect } from "react";
import "../style/homepage.css";
import watch from "../assets/img1.jpg";
import img2 from "../assets/homeIMG2.jpg";
import img1 from "../assets/OIP.jpg";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  const [wasteTypes, setWasteTypes] = useState([
    {
      id: 1,
      title: "Organic/Biodegradable Waste",
      description: "Food scraps, garden waste, paper, etc. Can decompose naturally and be composted.",
    },
    {
      id: 2,
      title: "Inorganic/Non-Biodegradable Waste",
      description: "Plastics, metals, glass, etc. Does not break down easily in nature.",
    },
  ]);
  const [newWaste, setNewWaste] = useState({ title: "", description: "" });


  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Generate multiple floating icons
  const generateIcons = () => {
    const icons = [];
    for (let i = 0; i < 20; i++) {
      const type = i % 2 === 0 ? "bin" : "trash";
      icons.push(
        <div
          key={i}
          className={`floating-icon ${type}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      );
    }
    return icons;
  };


 // Handle form input changes
 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewWaste({ ...newWaste, [name]: value });
};

// Handle adding a new waste type
const handleAddWaste = (e) => {
  e.preventDefault();
  if (newWaste.title && newWaste.description) {
    setWasteTypes([
      ...wasteTypes,
      { id: wasteTypes.length + 1, title: newWaste.title, description: newWaste.description },
    ]);
    setNewWaste({ title: "", description: "" });
    alert("New waste type added successfully!");
  } else {
    alert("Please fill in all fields.");
  }
};


  return (
    <>
    <style>
      {`
      body {
  margin: 0;
  padding: 0;
}
      `}
    </style>
      <div className="homepagebody">
        {/* Background Animation */}
        <div className="background-animation">{generateIcons()}</div>

        <header className="hero">
          <div className="button">
            <a href="login">
              <button>Login</button>
            </a>
          </div>
        </header>
      </div>
      <div className="glow-line2"></div>

      <div className="header">
        <h1>About the existing waste</h1>
        <p>Here the some waste type and their price and we can take your these type of the wastes </p>
      </div>

      <div className="grid-container">
        {/* Product cards */}
        <div className="info-box">
          <div className="product-card">
            <img src={watch} alt="Watch" className="product-image" />
            <h2 className="product-title">F</h2>
            <p className="product-description">Stylish Dial Analogue Watch</p>
            <p className="product-price">
              <strong>Rs. 1999</strong> <span className="old-price">Rs. 3999</span>{" "}
              <span className="discount">(50% OFF)</span>
            </p>
          </div>
        </div>
        <div className="info-box">
          <div className="product-card">
            <img src={watch} alt="Watch" className="product-image" />
            <h2 className="product-title">F</h2>
            <p className="product-description">Stylish Dial Analogue Watch</p>
            <p className="product-price">
              <strong>Rs. 1999</strong> <span className="old-price">Rs. 3999</span>{" "}
              <span className="discount">(50% OFF)</span>
            </p>
          </div>
        </div>
        <div className="info-box">
          <div className="product-card">
            <img src={watch} alt="Watch" className="product-image" />
            <h2 className="product-title">F</h2>
            <p className="product-description">Stylish Dial Analogue Watch</p>
            <p className="product-price">
              <strong>Rs. 1999</strong> <span className="old-price">Rs. 3999</span>{" "}
              <span className="discount">(50% OFF)</span>
            </p>
          </div>
        </div>
        <div className="info-box">
          <div className="product-card">
            <img src={watch} alt="Watch" className="product-image" />
            <h2 className="product-title">F</h2>
            <p className="product-description">Stylish Dial Analogue Watch</p>
            <p className="product-price">
              <strong>Rs. 1999</strong> <span className="old-price">Rs. 3999</span>{" "}
              <span className="discount">(50% OFF)</span>
            </p>
          </div>
        </div>
        <div className="info-box">
          <div className="product-card">
            <img src={watch} alt="Watch" className="product-image" />
            <h2 className="product-title">F</h2>
            <p className="product-description">Stylish Dial Analogue Watch</p>
            <p className="product-price">
              <strong>Rs. 1999</strong> <span className="old-price">Rs. 3999</span>{" "}
              <span className="discount">(50% OFF)</span>
            </p>
          </div>
        </div>
        <div className="info-box">
          <div className="product-card">
            <img src={watch} alt="Watch" className="product-image" />
            <h2 className="product-title">F</h2>
            <p className="product-description">Stylish Dial Analogue Watch</p>
            <p className="product-price">
              <strong>Rs. 1999</strong> <span className="old-price">Rs. 3999</span>{" "}
              <span className="discount">(50% OFF)</span>
            </p>
          </div>
        </div>
        {/* Repeat other product cards */}
      </div>

      <div className="glow-line2"></div>

      <div className="container">
        <div className="info-box2">
          <img src={img1} alt="AI Experience" className="info-box2-image" />
        </div>

        <div className="content">
          <h1>For the Seller</h1>
          <p>Shell scripting automates smart waste monitoring by managing data from sensor-equipped bins.
It tracks fill levels, categorizes waste types, and triggers timely alerts.
Scripts streamline data logging, reporting, and cleanup for efficient municipal operations.
This ensures faster response, cleaner environments, and sustainable city management.</p>
        </div>
      </div>
      <div className="glow-line2"></div>

      <div className="container">
        <div className="content">
          <h1>Its for  the Buyer </h1>
          <p>Learn to automate real-world systems with shell scripting—starting with smart waste management.
Gain hands-on skills in data logging, alert systems, and automated reporting using bash.
Perfect for technicians, trainees, and smart city operators looking to upskill fast.
Practical, project-based training to boost efficiency and job-ready expertise.</p>
        </div>

        <div className="info-box2">
          <img src={img2} alt="w" className="info-box2-image" />
        </div>
      </div>

      {showButton && (
        <button className="go-to-top-button" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

export default HomePage;
