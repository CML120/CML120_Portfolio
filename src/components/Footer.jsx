import React from 'react';
import './Footer.css'; 
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="footer-container"> 
      <div > 
        <a href="https://github.com/CML120" target="_blank" rel="noopener noreferrer" class="footers">GitHub : 
          <i className="fa fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/chee-meng-lor-a72a84a1/" target="_blank" rel="noopener noreferrer" class="footers">LinkedIn :
          <i className="fa fa-linkedin"></i>
        </a>

        <a href="https://twitter.com/LowKeyMoKei" target="_blank" rel="noopener noreferrer" class="footers">Twitter :
          <i className="fa fa-twitter"></i>
        </a>

        {/* Add links to other platforms */}
        {/* For example, you can use icons from FontAwesome */}
        {/* Make sure to include the respective icon libraries */}
        
      </div>
    </footer>
  );
};

export default Footer;
