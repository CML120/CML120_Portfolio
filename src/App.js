import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div className="app-container"> {/* Use className instead of class */}
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
