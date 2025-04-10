import React , { useState, useEffect } from "react";
import '../style/homepage.css'
import video2 from '../assets/video2.mp4'
import watch from '../assets/watch.webp'

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
      <div  className="homepagebody">
       <header class="hero">
        <h2 class="product-name">Waste Managemant </h2>
        <h1 class="headline">Here your slogen ......</h1>
        <div class="glow-line"></div>
        <h1 className="headline2">create you account to save your life </h1>
        <div className="button">
     <a href="login"> <button >For the buyer</button></a>
        <a href="login"><button> For the sheller</button></a> </div>
    </header></div>
        <div class="glow-line2"></div>


        <div class="header">
        <h1>Experience the Power of AI</h1>
        <p>Designed for performance, efficiency, and seamless integration into your daily workflow.</p>
    </div>

    <div class="grid-container">
 
        <div class="info-box">
        <div class="product-card">
    <img src={watch} alt="Watch" class="product-image" />
    <h2 class="product-title">Fastrack</h2>
    <p class="product-description">Stylish Dial Analogue Watch</p>
    <p class="product-price"><strong>Rs. 1999</strong> <span class="old-price">Rs. 3999</span> <span class="discount"> (50% OFF)</span></p>
  </div>
        </div>

        <div class="info-box">
            <div class="product-card">
    <img src={watch} alt="Watch" class="product-image" />
    <h2 class="product-title">Fastrack</h2>
    <p class="product-description">Stylish Dial Analogue Watch</p>
    <p class="product-price"><strong>Rs. 1999</strong> <span class="old-price">Rs. 3999</span> <span class="discount"> (50% OFF)</span></p>
  </div>
        </div>

        <div class="info-box">
            <div class="product-card">
    <img src={watch} alt="Watch" class="product-image" />
    <h2 class="product-title">Fastrack</h2>
    <p class="product-description">Stylish Dial Analogue Watch</p>
    <p class="product-price"><strong>Rs. 1999</strong> <span class="old-price">Rs. 3999</span> <span class="discount"> (50% OFF)</span></p>
  </div>
        </div>

        <div class="info-box">
            <div class="product-card">
    <img src={watch} alt="Watch" class="product-image" />
    <h2 class="product-title">Fastrack</h2>
    <p class="product-description">Stylish Dial Analogue Watch</p>
    <p class="product-price"><strong>Rs. 1999</strong> <span class="old-price">Rs. 3999</span> <span class="discount"> (50% OFF)</span></p>
  </div>
        </div>

        <div class="info-box">
            <div class="product-card">
    <img src={watch} alt="Watch" class="product-image" />
    <h2 class="product-title">Fastrack</h2>
    <p class="product-description">Stylish Dial Analogue Watch</p>
    <p class="product-price"><strong>Rs. 1999</strong> <span class="old-price">Rs. 3999</span> <span class="discount"> (50% OFF)</span></p>
  </div>
        </div>

        <div class="info-box">
            <div class="product-card">
    <img src={watch} alt="Watch" class="product-image" />
    <h2 class="product-title">Fastrack</h2>
    <p class="product-description">Stylish Dial Analogue Watch</p>
    <p class="product-price"><strong>Rs. 1999</strong> <span class="old-price">Rs. 3999</span> <span class="discount"> (50% OFF)</span></p>
  </div>
        </div>

        <div class="info-box">
            <div class="product-card">
    <img src={watch} alt="Watch" class="product-image" />
    <h2 class="product-title">Fastrack</h2>
    <p class="product-description">Stylish Dial Analogue Watch</p>
    <p class="product-price"><strong>Rs. 1999</strong> <span class="old-price">Rs. 3999</span> <span class="discount"> (50% OFF)</span></p>
  </div>
        </div>

        <div class="info-box">
            <div class="product-card">
    <img src={watch} alt="Watch" class="product-image" />
    <h2 class="product-title">Fastrack</h2>
    <p class="product-description">Stylish Dial Analogue Watch</p>
    <p class="product-price"><strong>Rs. 1999</strong> <span class="old-price">Rs. 3999</span> <span class="discount"> (50% OFF)</span></p>
  </div>
        </div>
    </div>




        <div class="glow-line2"></div>

    <div class="container">
        
        <div class="info-box2">
            <p class="small-text">Built for</p>
            <h2 class="gradient-text">Apple Intelligence.</h2>
        </div>

        <div class="content">
            <h3>Experience the power of AI.</h3>
            <p>Designed for performance, efficiency, and seamless integration into your daily workflow.</p>
        </div>
    </div>
        <div class="glow-line2"></div>

    <div class="container">
        
        <div class="content">
            <h3>Experience the power of AI.</h3>
            <p>Designed for performance, efficiency, and seamless integration into your daily workflow.</p>
        </div>

        <div class="info-box2">
        <video src={video2} loop muted  />
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
