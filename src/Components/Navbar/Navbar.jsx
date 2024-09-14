import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='container' id='nav'>
      <img src={logo} alt="logoimage" className='logo' />
      <button className='menu-toggle' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isMenuOpen ? 'nav-items open' : 'nav-items'}>
        <li>Home</li>
        <li>About</li>
        <li>Members</li>
        <li>Achievements</li>
        <li>Sponsors</li>
        <li>Gallery</li>
        <li className='btn' id='navcontact'>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
