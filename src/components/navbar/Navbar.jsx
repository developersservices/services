import React, { useState, useEffect } from 'react';
import './Style.css';
import Logo from './logo/Logo';
import { Link } from 'react-router-dom';
import { FcMenu } from "react-icons/fc";
import { FcCollapse } from "react-icons/fc";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 750) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <Logo />
      <div className="menu_icon" onClick={toggleMenu}>
        {showMenu ? (
          <FcCollapse className="icon close-icon" />
        ) : (
          <FcMenu className="icon menu-icon" />
        )}
      </div>
      <ul className={`menu ${showMenu ? 'active' : ''}`}>
        <li onClick={closeMenuOnMobile}>
          <Link to='/services'>Home</Link>
        </li>
        <li onClick={closeMenuOnMobile}>
          <Link to='/about'>About</Link>
        </li>
        <li onClick={closeMenuOnMobile}>
          <Link to='/contact'>Contact</Link>
        </li>
        <li onClick={closeMenuOnMobile}>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
