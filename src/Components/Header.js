import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <div className="logo-prism">
              <div className="prism-shape"></div>
            </div>
          </div>
          <span className="logo-text">
            <span className="prism">Education </span>
            <span className="flux">App</span>
          </span>
        </Link>

        <ul className="nav-menu" id="navMenu">
          <li><Link to="/" className="nav-router-link active">Home</Link></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#stats" className="nav-link">Metrics</a></li>
          <li><a href="#skills" className="nav-link">Arsenal</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li><Link to="/login" className="nav-router-link">Login</Link></li>
        </ul>

        <div className="menu-toggle" id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
