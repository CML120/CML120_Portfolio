import React from 'react'; // Import the React library
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from 'react-router-dom' for routing
import './App.css'; // Import the stylesheet 
import 'font-awesome/css/font-awesome.min.css'; // Import the 'font-awesome' CSS for using icons
import Header from './components/Header'; 
import AboutMe from './components/AboutMe'; 
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact'; 
import Resume from './components/Resume'; 
import Footer from './components/Footer'; 

function App() {
  return (
    <Router> {/* Wrap the entire application in a 'Router' component to enable routing */}
      <div className="app-container"> 
        <Header /> {/* Render the 'Header' component at the top */}
        <div className="content"> 
          <Routes> {/* Use 'Routes' component to define different routes for the app */}
            <Route path="/" element={<AboutMe />} /> {/* Define the route for the 'AboutMe' component */}
            <Route path="/aboutme" element={<AboutMe />} /> {/* Define the route for the 'AboutMe' component */}
            <Route path="/portfolio" element={<Portfolio />} /> {/* Define the route for the 'Portfolio' component */}
            <Route path="/contact" element={<Contact />} /> {/* Define the route for the 'Contact' component */}
            <Route path="/resume" element={<Resume />} /> {/* Define the route for the 'Resume' component */}
          </Routes>
        </div>
        <Footer /> {/* Render the 'Footer' component at the bottom */}
      </div>
    </Router>
  );
}

export default App; // Export the 'App' component as the default export
