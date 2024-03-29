import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Brand from '../../assets/images/brand.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Brand} alt="Brand Logo" />
      </div>
    </nav>
  );
};

export default Navbar;