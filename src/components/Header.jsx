// Import necessary dependencies
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import profilePicture from '../components/assets/profilepic.jpg';
import backgroundImage from '../components/assets/bg1.jpg';

const Header = ({ setActivePage }) => {
  // Get the current location using the useLocation hook from react-router-dom
  const location = useLocation();

  // Style for the header element with background image
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '10px',
    position: 'relative',
  };

  // Style for the text in the header
  const textStyle = {
    color: 'lightblue',
    transform: 'scale(0.75)', // Scale down the text
  };

  return (
    <header style={headerStyle}>
      {/* Display the profile picture */}
      <img
        src={profilePicture}
        alt="Profile"
        style={{ width: '50px', borderRadius: '50%', position: 'absolute', top: '10px', right: '10px' }}
      />
      {/* Display the header text */}
      <h1 style={textStyle}>CML120's Portfolio</h1>
      
      {/* Navigation links */}
      <nav id="navbar">
        <ul>
          {/* Custom NavLinkWithActive component for handling active class */}
          {/* Highlight the current active link */}
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
        </ul>
      </nav>
    </header>
  );
};

// Custom NavLink component to handle the active class
const NavLinkWithActive = ({ to, onClick, children }) => {
  // Get the current location using the useLocation hook from react-router-dom
  const location = useLocation();
  // Check if the current link is active based on the pathname
  const isActive = location.pathname === to;

  // Style for the link, change color if active
  const linkStyle = {
    color: isActive ? 'lightgreen' : 'lightblue',
  };

  // Return the Link component with the custom style
  return (
    <Link to={to} onClick={onClick} style={linkStyle}>
      {children}
    </Link>
  );
};

export default Header;
