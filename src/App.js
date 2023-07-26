import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import HomeAbout from './components/HomeAbout';
import Contact from './components/Contact';

function App() {
  return (
    <Router className="react-app">
      <Header />
      <Navigation />
      <Routes>
        <Route path='/about' element={<HomeAbout />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router >
  );
}

export default App;
