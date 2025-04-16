import React, { useState, useEffect } from "react";
import "../style/homepage.css";
import video2 from "../assets/video2.mp4";
import watch from "../assets/watch.webp";
import img2 from "../assets/homeIMG2.jpg";
import img1 from "../assets/OIP.jpg";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

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

  return (
    <>
      <div className="homepagebody">
        <header className="hero">
          <h2 className="product-name">Waste Management</h2>
          <h1 className="headline">Here your slogan ......</h1>
          <div className="glow-line"></div>
          <h1 className="headline2">Create your account to save your life</h1>
          <div className="button">
            <a href="login">
              <button>For the buyer</button>
            </a>
            <a href="login">
              <button>For the seller</button>
            </a>
          </div>
        </header>
      </div>
      <div className="glow-line2"></div>

      <div className="header">
        <h1>Experience the Power of AI</h1>
        <p>Designed for performance, efficiency, and seamless integration into your daily workflow.</p>
      </div>

      <div className="grid-container">
        {/* Product cards */}
        <div className="info-box">
          <div className="product-card">
            <img src={watch} alt="Watch" className="product-image" />
            <h2 className="product-title">Fastrack</h2>
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
            <h2 className="product-title">Fastrack</h2>
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
            <h2 className="product-title">Fastrack</h2>
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
            <h2 className="product-title">Fastrack</h2>
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
            <h2 className="product-title">Fastrack</h2>
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
            <h2 className="product-title">Fastrack</h2>
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
            <h2 className="product-title">Fastrack</h2>
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
            <h2 className="product-title">Fastrack</h2>
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
            <h2 className="product-title">Fastrack</h2>
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
            <h2 className="product-title">Fastrack</h2>
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
            <h2 className="product-title">Fastrack</h2>
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
          <h3>Experience the power of AI.</h3>
          <p>Designed for performance, efficiency, and seamless integration into your daily workflow.</p>
        </div>
      </div>
      <div className="glow-line2"></div>

      <div className="container">
        <div className="content">
          <h3>Experience the power of AI.</h3>
          <p>Designed for performance, efficiency, and seamless integration into your daily workflow.</p>
        </div>

        <div className="info-box2">
          <img src={img2} alt="AI Experience" className="info-box2-image" />
        
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
