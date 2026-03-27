import React from 'react';

function Header({ onLoginClick }) {
  return (
    <header className="header" id="header">
      <nav className="nav-container">
        <a href="#home" className="logo">
          <div className="logo-icon">
            <div className="logo-prism">
              <div className="prism-shape"></div>
            </div>
          </div>
          <span className="logo-text">
            <span className="prism">Education </span>
            <span className="flux">App</span>
          </span>
        </a>

        <ul className="nav-menu" id="navMenu">
          <li><a href="#home" className="nav-link active">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#stats" className="nav-link">Metrics</a></li>
          {/* <li><a href="#skills" className="nav-link">Arsenal</a></li> */}
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li><a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); onLoginClick(); }}>Login</a></li>
        </ul>

        <div className="menu-toggle" id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <section className="skills-section1" id="skills">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="category-tab active" data-category="all">All</div>
            <div className="category-tab" data-category="Demo">Demo</div>
            <div className="category-tab" data-category="backend">Backend</div>
            <div className="category-tab" data-category="cloud">Cloud & DevOps</div>
            <div className="category-tab" data-category="emerging">Emerging Tech</div>
            <div className="category-tab" data-category="all">All Skills</div>
            <div className="category-tab" data-category="Demo">Demo</div>
            <div className="category-tab" data-category="backend">Backend</div>
            <div className="category-tab" data-category="cloud">Cloud & DevOps</div>
            <div className="category-tab" data-category="emerging">Emerging Tech</div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
