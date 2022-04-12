import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'
import { Nav } from 'react-bootstrap';

// -*- Styles -*- \\
import '../css/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              StreamEZ
              <i className='fab fa-typo3'/>
            </Link>
            <Link to='/' className='navbar-home-logo'>Home</Link>
            <Link to='/about' className='navbar-home-logo'>About Us</Link>
            <Link to='/' className='navbar-home-logo'>Watchlist</Link>
            <SearchBar/>
        </div>
      </nav>
);

}

export default Navbar;
