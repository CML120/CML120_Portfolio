import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import profilePicture from '../components/assets/profilepic.jpg';
import backgroundImage from '../components/assets/bg1.jpg';

const Header = ({ setActivePage }) => {
  const location = useLocation();

  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '10px',
    position: 'relative',
  };

  const textStyle = {
    color: 'lightblue',
    transform: 'scale(0.75)',
  };

  return (
    <header style={headerStyle}>
      <img
        src={profilePicture}
        alt="Profile"
        style={{ width: '50px', borderRadius: '50%', position: 'absolute', top: '10px', right: '10px' }}
      />
      <h1 style={textStyle}>CML120's Portfolio </h1>
      
      <nav id="navbar">
        <ul>
          <li>
            <NavLinkWithActive to="/" onClick={() => setActivePage('AboutMe')}>
              About Me
            </NavLinkWithActive>
          </li>
          <li>
            <NavLinkWithActive to="/portfolio" onClick={() => setActivePage('Portfolio')}>
              Portfolio
            </NavLinkWithActive>
          </li>
          <li>
            <NavLinkWithActive to="/contact" onClick={() => setActivePage('Contact')}>
              Contact
            </NavLinkWithActive>
          </li>
          <li>
            <NavLinkWithActive to="/resume" onClick={() => setActivePage('Resume')}>
              Resume
            </NavLinkWithActive>
          </li>

          <li>
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Custom NavLink component to handle the active class
const NavLinkWithActive = ({ to, onClick, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const linkStyle = {
    color: isActive ? 'lightgreen' : 'lightblue',
  };

  return (
    <Link to={to} onClick={onClick} style={linkStyle}>
      {children}
    </Link>
  );
};

export default Header;
