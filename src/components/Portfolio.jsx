//Importing dependencies and css style sheet
import React, { useState } from 'react';
import './Portfolio.css';

//Pictures for projects
import mhsproject from '../components/assets/mhsproject.jpg';
import hometownsound from '../components/assets/hometownsound.jpg';

import ecommercebackend from '../components/assets/ecommercebackend.jpg';
import employeetracker from '../components/assets/employeetracker.jpg';

import socialnetworkapi from '../components/assets/socialnetworkapi.jpg';
import svglogomaker from '../components/assets/svglogomaker.jpg';
import weatherdashboard from '../components/assets/weatherdashboard.jpg';
import GHero from '../components/assets/GHero.jpg';
import ABCGoat from '../components/assets/ABCGoat.jpg';


const Portfolio = () => {
  // Array of objects representing each portfolio item
  const portfolioItems = [
    {
      title: 'ABC Goat',
      imageSrc: ABCGoat,
      liveLink: 'https://abc-goat-ddaec4f82441.herokuapp.com/',
      githubLink: 'https://github.com/CML120/ABC_Goat',
      description: "A fun learning app to help kids learn the alphabet and spelling. Made using React and annyang voice module."
    },
    {
      title: 'MHS Project',
      imageSrc: mhsproject,
      liveLink: 'https://mhs-project-f0451302321b.herokuapp.com/homepage',
      githubLink: 'https://github.com/CML120/MHS-Project',
      description: "An armory app based on the popular game: Monster Hunter World. Made using MySQL, Node.js, Express.js"
    },
    {
      title: 'Home Town Sound',
      imageSrc: hometownsound,
      liveLink: 'https://cml120.github.io/WWWW-Project-1/',
      githubLink: 'https://github.com/CML120/WWWW-Project-1',
      description: "A music venue searching app that allows users to purchase tickets and listen to the artist. Uses TicketMaster and Spotify API's."
    },
    {
      title: 'Guitar Hero Robot (video demo)',
      imageSrc: GHero,
      liveLink: 'https://drive.google.com/file/d/1XnWa0iv_XkYYEIjGIZz_uRqXDp7SjyeL/view?usp=drive_link',
      description: "A robot that plays the video game: Guitar Hero. Made using Allen Bradley PLC & interfaces with a Cognex vision system."
    },
    {
      title: 'Social Network API  (video demo)',
      imageSrc: socialnetworkapi,
      liveLink: 'https://drive.google.com/file/d/13JYQAXErm5AQpvb_ImRuCk9cUlNG_9F_/view?usp=drive_link',
      githubLink: 'https://github.com/CML120/Social-Network-API',
      description: "Builds an API for a social network app. Made using Express.js, MongoDB and Mongoose ODM"
    },
    {
      title: 'E-Commerce Backend (video demo)',
      imageSrc: ecommercebackend,
      liveLink: 'https://drive.google.com/file/d/1NtKs7-XpAJbtasHumcPLU-Tu7Pa9bNGA/view?usp=drive_link',
      githubLink: 'https://github.com/CML120/E-Commerce-backend',
      description: "Builds an API for an e-commerce site. Uses Express.js and MySQL to build out CRUD operations"
    },
    {
      title: 'SQL Employee Tracker (video demo)',
      imageSrc: employeetracker,
      liveLink: 'https://drive.google.com/file/d/1AC0L4MdV91C1wf7eB_xGVbwvspNWRLnJ/view?usp=drive_link',
      githubLink: 'https://github.com/CML120/SQL-Employee-Tracker',
      description: "A command line app that allows you to modify an employee database. Uses Node.js and MySQL."
    },
    {
      title: 'SVG Logo Maker (video demo)',
      imageSrc: svglogomaker,
      liveLink: 'https://drive.google.com/file/d/1EOJE-sG7kMvL0ylA8t8mjVhzfUb17HlJ/view?usp=drive_link',
      githubLink: 'https://github.com/CML120/SVG-Logo-Maker',
      description: "A command line app that allows you create an SVG Logo. Uses Node.js and Jest (for testing)",
    },
    {
      title: 'Weather Dashboard',
      imageSrc: weatherdashboard,
      liveLink: 'https://cml120.github.io/Weather-Dashboard/',
      githubLink: 'https://github.com/CML120/Weather-Dashboard',
      description: "A simple web app that searches for a city's weather info. Uses the Weather Forecast API to fetch weather data."
    },
  ];

  // State to keep track of the current page (four projects at a time)
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Calculate the index range for the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = portfolioItems.slice(indexOfFirstProject, indexOfLastProject);

  // Function to handle clicking the "Next" button
  const handleNextPage = () => {
    if (currentPage < Math.ceil(portfolioItems.length / projectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle clicking the "Previous" button
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Render the portfolio items for the current page
  return (
    <section className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="portfolio-items-container">
        {currentProjects.map((item, index) => (
          <div key={index} className="portfolio-item">
            <h3>{item.title}</h3>
            <img src={item.imageSrc} alt={item.title} className="portfolio-image" />
            <p>{item.description}</p>
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
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={handlePreviousPage}>Previous</button>
        )}
        {currentPage < Math.ceil(portfolioItems.length / projectsPerPage) && (
          <button onClick={handleNextPage}>Next</button>
        )}
      </div>
    </section>
  );
};
export default Portfolio;
