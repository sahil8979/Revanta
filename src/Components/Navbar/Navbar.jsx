import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='container' id='nav'>
      <img src={logo} alt="logoimage" className='logo' />
      <button className='menu-toggle' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isMenuOpen ? 'nav-items open' : 'nav-items'}>
        <li onClick={closeMenu}>Home</li>
        <li onClick={closeMenu}>About</li>
        <li onClick={closeMenu}>Members</li>
        <li onClick={closeMenu}>Achievements</li>
        <li onClick={closeMenu}>Sponsors</li>
        <li onClick={closeMenu}>Gallery</li>
        <li className='btn' id='navcontact' onClick={closeMenu}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
