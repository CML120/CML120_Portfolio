//Importing dependencies and css style sheet
import React from 'react';
import './Portfolio.css';

//Pictures for projects
import mhsproject from '../components/assets/mhsproject.jpg';
import hometownsound from '../components/assets/hometownsound.jpg';
import texteditor from '../components/assets/texteditor.jpg';
import ecommercebackend from '../components/assets/ecommercebackend.jpg';
import employeetracker from '../components/assets/employeetracker.jpg';
import readmegenerator from '../components/assets/readmegenerator.jpg';
import socialnetworkapi from '../components/assets/socialnetworkapi.jpg';
import svglogomaker from '../components/assets/svglogomaker.jpg';
import weatherdashboard from '../components/assets/weatherdashboard.jpg';



const Portfolio = () => {
  // Array of objects representing each portfolio item
  const portfolioItems = [
    {
      title: 'MHS Project',
      imageSrc: mhsproject,
      liveLink: 'https://mhs-project-f0451302321b.herokuapp.com/homepage',
      githubLink: 'https://github.com/CML120/MHS-Project',
    },
    {
      title: 'Home Town Sound',
      imageSrc: hometownsound,
      liveLink: 'https://cml120.github.io/WWWW-Project-1/',
      githubLink: 'https://github.com/CML120/WWWW-Project-1',
    },
    {
      title: 'Text Editor',
      imageSrc: texteditor,
      liveLink: 'https://jate-pwa-cml-f40c199d2ecf.herokuapp.com/',
      githubLink: 'https://github.com/CML120/Text-Editor',
    },
    {
      title: 'Social Network API  (video demo)',
      imageSrc: socialnetworkapi,
      liveLink: 'https://drive.google.com/file/d/13JYQAXErm5AQpvb_ImRuCk9cUlNG_9F_/view?usp=drive_link',
      githubLink: 'https://github.com/CML120/Social-Network-API',
    },
    {
      title: 'E-Commerce Backend (video demo)',
      imageSrc: ecommercebackend,
      liveLink: 'https://drive.google.com/file/d/1NtKs7-XpAJbtasHumcPLU-Tu7Pa9bNGA/view?usp=drive_link',
      githubLink: 'https://github.com/CML120/E-Commerce-backend',
    },
    {
      title: 'SQL Employee Tracker (video demo)',
      imageSrc: employeetracker,
      liveLink: 'https://drive.google.com/file/d/1AC0L4MdV91C1wf7eB_xGVbwvspNWRLnJ/view?usp=drive_link',
      githubLink: 'https://github.com/CML120/SQL-Employee-Tracker',
    },
    {
      title: 'SVG Logo Maker (video demo)',
      imageSrc: svglogomaker,
      liveLink: 'https://drive.google.com/file/d/1EOJE-sG7kMvL0ylA8t8mjVhzfUb17HlJ/view?usp=drive_link',
      githubLink: 'https://github.com/CML120/SVG-Logo-Maker',
    },
    // {
    //   title: 'README Generator (video demo)',
    //   imageSrc: readmegenerator,
    //   liveLink: 'https://drive.google.com/file/d/1QpxHTb1zitsj_9BKa75QRS87MDyrfu-M/view?usp=drive_link',
    //   githubLink: 'https://github.com/CML120/README_Generator',
    // },
    {
      title: 'Weather Dashboard',
      imageSrc: weatherdashboard,
      liveLink: 'https://cml120.github.io/Weather-Dashboard/',
      githubLink: 'https://github.com/CML120/Weather-Dashboard',
    },
  ];

  //Portfolio rendered by mapping each item and displaying them with Project Name, image, and Demo/GitHub links
  return (
    <section className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="portfolio-items-container">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <h3>{item.title}</h3>
            <img src={item.imageSrc} alt={item.title} className="portfolio-image" />
            <div className="links">
              {item.liveLink && (
                <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="live-demo-link">
                  - Demo -
                </a>
              )}
              <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                - GitHub -
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;
