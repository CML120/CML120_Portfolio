import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../components/assets/pic1.jpg';
import profilePicture2 from '../components/assets/pic2.jpg';
import './AboutMe.css'; 

const AboutMe = () => {
    const [showProfilePicture2, setShowProfilePicture2] = useState(false);
    const [showH2Pulse, setShowH2Pulse] = useState(false); // State variable for pulsing <h2>
  
    const toggleProfilePicture = () => {
      setShowProfilePicture2(!showProfilePicture2);
    };
  
    const toggleH2Pulse = () => {
      setShowH2Pulse(!showH2Pulse);
    };
  
    const imageStyle = {
      float: 'right',
      margin: '0 0 10px 10px',
      width: '230px',
      height: '300px', 
      borderRadius: '50%',
      overflow: 'hidden',
    };
  
    return (
      <section>
        <h2 className={showH2Pulse ? 'h2-pulse' : ''}>About Me</h2>
        <img
          src={showProfilePicture2 ? profilePicture2 : profilePicture}
          alt="Profile"
          style={imageStyle}
          onMouseEnter={() => {
            toggleProfilePicture();
            toggleH2Pulse();
          }}
          onMouseLeave={() => {
            toggleProfilePicture();
            toggleH2Pulse();
          }}
        />
        <div>
                <p>
                    Welcome to my portfolio! I am a dedicated professional with a background in mechanical engineering and a passion for programming and IT.
                </p>
                <p>
                    In my previous work experience, I focused on maintenance and electrical work with factory equipment, gaining valuable hands-on experience. During this time, I also had the opportunity to work with PLCs, sparking my interest in computers and technology.
                </p>
                <p>
                    This curiosity led me to pursue an Associate's Degree in IT, where I further honed my skills. As an email admin assistant and later as a junior IT analyst, I consistently found myself drawn to the programming aspects of IT, recognizing its potential to drive innovation and solve complex problems.
                </p>
                <p>
                    To expand my knowledge and reach new heights in my career, I made the decision to pursue a Bachelor's degree. I was fortunate to find a program at UW Stout in Wisconsin that acknowledged and accepted a majority of my previous credits from the Associate's program.
                </p>
                <p>
                    After successfully completing the UW Stout program, I recognized the importance of gaining practical programming experience. Determined to excel, I enrolled in a coding boot camp to further refine my coding skills and become a proficient software developer.
                </p>
                <p>
                    The projects showcased in this portfolio represent the beginning of my journey into the world of programming and reflect my commitment to continuous learning and improvement.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
