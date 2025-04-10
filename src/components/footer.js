import '../style/footer.css'

function footer(){

    return(<>
      <div class="glow-line2"></div>
      <footer>
  <div class="footer-container">
    <div class="footer-left">
      <div class="footer-logo">
        <strong>// WaMa</strong><br />
        waste management
      </div>
      <p>© 2025 CEMEX Innovation Holding Ltd. All rights reserved</p>
      <div class="footer-links">
        <a href="#">Terms & Conditions</a> |
        <a href="#">Privacy Policy</a> |
        <a href="#">Code of Ethics</a> |
        <a href="#">Cookie Declaration</a>
      </div>
    </div>

    <div class="footer-middle">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="about">About us</a></li>
        <li><a href="buyer">Portfolio</a></li>
        <li><a href="sheller">Cleantech</a></li>
      </ul>
    </div>

    <div class="footer-right">
      <ul>
        <li><a href="#">Construction Startup Competition</a></li>
        <li><a href="#">Top 50</a></li>
        <li><a href="#">Leaplab</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="social-icons">
        <a href="#">in</a>
        <a href="#">𝕏</a>
        <a href="#">▶</a>
      </div>
    </div>
  </div>
  <button class="contact-us">Contact Us</button>
</footer>

    
    </>)
}
export default footer;