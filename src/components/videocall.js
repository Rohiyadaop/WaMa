import React from 'react'
import '../style/videocall.css';
import writingIcon from '../assets/writing.jpeg';



const videocall = () => {
  return (
   <>
   <header>
    <div class="logo">LOGO</div>
    <nav>
      <ul>
        <li><a class="active" href="/">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="buyer">Services</a></li>
        <li><a href="contect">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="text-section">
      <h1>LIVE TRAINING CLASS</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#" class="sign-in-btn">Join class</a>
    </section>

    <section class="image-section">
      <div class="phone">
        <div class="video-call">
          <img src={writingIcon} alt="Caller" class="caller-pic" />
          <img src={writingIcon}alt="You" class="you-pic" />
          <div class="call-info">
            <p>00:53</p>
            <button class="end-call">📞</button>
          </div>
        </div>
      </div>
    </section>
  </main>
   </>
  )
}

export default videocall;