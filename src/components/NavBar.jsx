import React from 'react';
import './NavBar.css';

function NavBar({ sections, currentSection, onChange }) {
  return (
    <nav className="navbar">
      {sections.map((section) => (
        <button
          key={section}
          className={`nav-button ${currentSection === section ? 'active' : ''}`}
          onClick={() => onChange(section)}
        >
          {section}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
