import React from 'react';
import './Footer.css'; // Import the style sheet for Footer
import 'font-awesome/css/font-awesome.min.css'; // Import the FontAwesome CSS file for icons

const Footer = () => {
  return (
    <footer className="footer-container"> 
      <div> 
        {/* Link to GitHub profile */}
        <a href="https://github.com/CML120" target="_blank" rel="noopener noreferrer" class="footers">
          GitHub : <i className="fa fa-github"></i> {/* GitHub icon */}
        </a>

        {/* Link to LinkedIn profile */}
        <a href="https://www.linkedin.com/in/chee-meng-lor-a72a84a1/" target="_blank" rel="noopener noreferrer" class="footers">
          LinkedIn : <i className="fa fa-linkedin"></i> {/* LinkedIn icon */}
        </a>

        {/* Link to Twitter profile */}
        <a href="https://twitter.com/LowKeyMoKei" target="_blank" rel="noopener noreferrer" class="footers">
          Twitter : <i className="fa fa-twitter"></i> {/* Twitter icon */}
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
