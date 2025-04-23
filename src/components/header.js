import '../style/header.css';

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="" alt="WaMa logo" className="logo-image" />
          <span>WaMa</span>
        </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="buyer">Buyer</a></li>
            <li><a href="sheller">Seller</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contect">Contact</a></li>
          </ul>
        <div>
            user
        </div>
      </nav>
    </>
  );
}

export default Header;